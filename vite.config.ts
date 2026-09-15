// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

/**
 * GitHub Pages project site vs Capacitor/local:
 *   VITE_BASE=/Wellspect-Care-Companion/  → Pages
 *   unset or `/`                          → Capacitor file:// and local/Lovable
 */
export function resolveViteBase(raw = process.env.VITE_BASE): string {
  if (!raw || raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

function rewritePublicBase(code: string, base: string): string {
  const prefix = base === "/" ? "" : base.replace(/\/$/, "");
  let next = code.replace(/\/__l5e\/assets-v1\/[0-9a-f-]+\/([^"'`?\s]+)/g, `${prefix}/media/$1`);
  if (prefix) {
    next = next.replace(/(["'`])\/(media|images)\//g, `$1${prefix}/$2/`);
    next = next.replace(/(["'`])\/favicon\.png/g, `$1${prefix}/favicon.png`);
  }
  return next;
}

/**
 * Safety net: Lovable `*.asset.json` files originally used hostless `/__l5e/...`
 * URLs. Those work on the preview origin but 404 inside a Capacitor WebView
 * and on GitHub Pages (project site is not `/`).
 * Source files are rewritten to `/media/<file>` (or `${base}media/<file>`).
 */
function localL5eMediaPlugin(base: string): Plugin {
  return {
    name: "local-l5e-media",
    enforce: "pre",
    transform(code, id) {
      if (id.includes("node_modules")) return;
      const file = id.split("?")[0] ?? id;
      if (!/\.(json|[cm]?[jt]sx?|css)$/.test(file)) return;
      if (
        !code.includes("/__l5e/") &&
        !code.includes("/media/") &&
        !code.includes("/images/") &&
        !code.includes("/favicon.png")
      ) {
        return;
      }
      const next = rewritePublicBase(code, base);
      if (next === code) return;
      return { code: next, map: null };
    },
  };
}

const base = resolveViteBase();

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Capacitor needs a client-side shell with index.html (no Cloudflare worker in the APK).
    spa: {
      enabled: true,
      prerender: { outputPath: "/index" },
    },
  },
  vite: {
    base,
    plugins: [localL5eMediaPlugin(base)],
  },
});
