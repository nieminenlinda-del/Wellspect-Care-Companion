#!/usr/bin/env node
/**
 * Capacitor `webDir` is `dist/client` and needs a real `index.html`.
 * TanStack Start + Nitro emit the SPA into `.output/public` (`_shell.html`
 * or `index.html` when spa.prerender.outputPath is `/index`).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, ".output/public");
const DEST = path.join(ROOT, "dist/client");

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const sp = path.join(from, entry.name);
    const dp = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(sp, dp);
    else fs.copyFileSync(sp, dp);
  }
}

if (!fs.existsSync(SRC)) {
  console.error(`Missing ${SRC}. Run vite build first.`);
  process.exit(1);
}

fs.rmSync(DEST, { recursive: true, force: true });
copyDir(SRC, DEST);

const indexHtml = path.join(DEST, "index.html");
const shellHtml = path.join(DEST, "_shell.html");
if (!fs.existsSync(indexHtml) && fs.existsSync(shellHtml)) {
  fs.copyFileSync(shellHtml, indexHtml);
}

if (!fs.existsSync(indexHtml)) {
  console.error("No index.html in dist/client after packaging.");
  process.exit(1);
}

const media = path.join(DEST, "media");
const mediaCount = fs.existsSync(media) ? fs.readdirSync(media).length : 0;
console.log(`Packaged Capacitor webDir ${DEST} (${mediaCount} media files)`);
