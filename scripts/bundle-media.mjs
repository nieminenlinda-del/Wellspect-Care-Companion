#!/usr/bin/env node
/**
 * Fetch Lovable-hosted clinic media into public/media so Capacitor's APK
 * WebView can load logos, packshots, captions and videos offline.
 *
 * Root cause: src/assets/*.asset.json (and a few data modules) point at
 * relative `/__l5e/assets-v1/<id>/<file>` URLs. Those resolve on Lovable's
 * preview host, but inside the APK there is no host, so images 404 and
 * videos never play.
 *
 * Source of truth for the original files is the published preview app:
 *   https://id-preview--6165df68-9e99-4dc4-ae1d-105cd6d6a8c8.lovable.app
 *
 * Instructional MP4s are gitignored (too large for Lovable git sync) and
 * are downloaded here during `npm run build`. Images and .vtt captions
 * are committed so a no-network UI still shows logos/packshots.
 *
 * Override the host with LOVABLE_ASSET_HOST if the preview URL changes.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS_DIR = path.join(ROOT, "src/assets");
const OUT_DIR = path.join(ROOT, "public/media");
const STATUS_FILE = path.join(OUT_DIR, "FETCH-STATUS.md");
const LOG_FILE = path.join(OUT_DIR, ".fetch-log.md");
const HOST =
  process.env.LOVABLE_ASSET_HOST ||
  "https://id-preview--6165df68-9e99-4dc4-ae1d-105cd6d6a8c8.lovable.app";
const CONCURRENCY = Number(process.env.MEDIA_FETCH_CONCURRENCY || 3);
const FORCE = process.argv.includes("--force");
const SKIP_REENCODE = process.argv.includes("--skip-reencode");

/** @typedef {{ file: string, url: string, size: number, contentType: string, jsonPath: string }} Asset */

function listAssets() {
  /** @type {Asset[]} */
  const assets = [];
  for (const name of fs.readdirSync(ASSETS_DIR).sort()) {
    if (!name.endsWith(".asset.json")) continue;
    const jsonPath = path.join(ASSETS_DIR, name);
    const meta = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const file = meta.original_filename;
    if (!file) throw new Error(`Missing original_filename in ${name}`);
    assets.push({
      file,
      url: `${HOST}${meta.url.startsWith("/media/") ? `/__l5e/assets-v1/${meta.asset_id}/${file}` : meta.url}`,
      size: meta.size ?? 0,
      contentType: meta.content_type ?? "",
      jsonPath,
    });
  }
  return assets;
}

function localPath(file) {
  return path.join(OUT_DIR, file);
}

async function fetchToFile(url, dest, expectedSize) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Wellspect-Care-Companion-media-bundler/1.0" },
    redirect: "follow",
  });
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status} for ${url}`);
    err.status = res.status;
    throw err;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (expectedSize && buf.length !== expectedSize) {
    console.warn(
      `  size mismatch for ${path.basename(dest)}: got ${buf.length}, expected ${expectedSize}`,
    );
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return buf.length;
}

function alreadyPresent(dest, expectedSize) {
  if (FORCE || !fs.existsSync(dest)) return false;
  const actual = fs.statSync(dest).size;
  if (expectedSize && actual !== expectedSize) {
    // Re-encoded MP4s are allowed to differ; leave them unless --force.
    if (dest.endsWith(".mp4")) return true;
    return false;
  }
  return true;
}

async function mapLimit(items, limit, worker) {
  const ret = new Array(items.length);
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      ret[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()));
  return ret;
}

function hasFfmpeg() {
  try {
    execFileSync("ffprobe", ["-version"], { stdio: "ignore" });
    execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function probeVideo(file) {
  try {
    const raw = execFileSync(
      "ffprobe",
      ["-v", "error", "-show_entries", "stream=codec_type,codec_name", "-of", "json", file],
      { encoding: "utf8" },
    );
    const streams = JSON.parse(raw).streams ?? [];
    const video = streams.find((s) => s.codec_type === "video");
    const audio = streams.find((s) => s.codec_type === "audio");
    return {
      video: video?.codec_name ?? "none",
      audio: audio?.codec_name ?? "none",
    };
  } catch {
    return { video: "unknown", audio: "unknown" };
  }
}

function ensureAndroidMp4(file) {
  const codecs = probeVideo(file);
  const okVideo = codecs.video === "h264";
  const okAudio = codecs.audio === "aac" || codecs.audio === "none";
  if (okVideo && okAudio) {
    return { file, ...codecs, reencoded: false };
  }
  const tmp = `${file}.h264.mp4`;
  console.log(`  re-encoding ${path.basename(file)} (${codecs.video}+${codecs.audio} → h264+aac)`);
  execFileSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      file,
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "-profile:v",
      "main",
      "-level",
      "4.0",
      "-movflags",
      "+faststart",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-ac",
      "2",
      tmp,
    ],
    { stdio: "inherit" },
  );
  fs.renameSync(tmp, file);
  return { file, video: "h264", audio: "aac", reencoded: true, from: codecs };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const assets = listAssets();
  /** @type {string[]} */
  const ok = [];
  /** @type {{ file: string, reason: string }[]} */
  const failed = [];
  /** @type {string[]} */
  const skipped = [];

  console.log(`Bundling ${assets.length} media files from ${HOST}`);

  await mapLimit(assets, CONCURRENCY, async (asset) => {
    const dest = localPath(asset.file);
    if (alreadyPresent(dest, asset.size)) {
      skipped.push(asset.file);
      return;
    }
    try {
      process.stdout.write(`↓ ${asset.file}\n`);
      await fetchToFile(asset.url, dest, asset.size);
      ok.push(asset.file);
    } catch (err) {
      failed.push({ file: asset.file, reason: err.message || String(err) });
      console.warn(`  FAILED ${asset.file}: ${err.message}`);
    }
  });

  /** @type {string[]} */
  const reencoded = [];
  if (!SKIP_REENCODE && hasFfmpeg()) {
    for (const asset of assets.filter((a) => a.file.endsWith(".mp4"))) {
      const dest = localPath(asset.file);
      if (!fs.existsSync(dest)) continue;
      try {
        const result = ensureAndroidMp4(dest);
        if (result.reencoded) reencoded.push(asset.file);
      } catch (err) {
        console.warn(`  re-encode skipped for ${asset.file}: ${err.message}`);
      }
    }
  }

  const missingVideos = failed.filter((f) => f.file.endsWith(".mp4"));
  const missingOther = failed.filter((f) => !f.file.endsWith(".mp4"));

  const status = [
    "# Clinic media fetch status",
    "",
    `Host: ${HOST}`,
    `Generated: ${new Date().toISOString()}`,
    "",
    `Downloaded this run: ${ok.length}`,
    `Already present: ${skipped.length}`,
    `Failed: ${failed.length}`,
    `Re-encoded to H.264+AAC: ${reencoded.length}`,
    "",
  ];
  if (missingVideos.length) {
    status.push("## TODO: instructional videos that could not be fetched");
    status.push("");
    status.push(
      "Do not invent clinical footage. Place the official Wellspect H.264+AAC MP4 in `public/media/` using the filename below, then rebuild.",
    );
    status.push("");
    for (const f of missingVideos) {
      status.push(`- [ ] \`${f.file}\` — ${f.reason}`);
    }
    status.push("");
  }
  if (missingOther.length) {
    status.push("## TODO: images or captions that could not be fetched");
    status.push("");
    for (const f of missingOther) {
      status.push(`- [ ] \`${f.file}\` — ${f.reason}`);
    }
    status.push("");
  }
  if (!failed.length) {
    status.push("All referenced Lovable assets resolved to local `public/media/` files.");
    status.push("");
  }
  fs.writeFileSync(LOG_FILE, status.join("\n"));
  if (failed.length) {
    fs.writeFileSync(STATUS_FILE, status.join("\n"));
  }
  console.log(status.join("\n"));

  if (missingOther.length) {
    console.error("Required still assets failed to download.");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
