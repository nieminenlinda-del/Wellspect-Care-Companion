/**
 * Site public-base helpers.
 *
 * GitHub Pages project site: `/Wellspect-Care-Companion/`
 * Capacitor / local / Lovable: `/`
 *
 * Vite injects `import.meta.env.BASE_URL` from `vite.config` `base`
 * (set via `VITE_BASE` at build time). Always includes a trailing slash.
 */

function viteBaseUrl(): string {
  return import.meta.env.BASE_URL || "/";
}

/** TanStack Router `basepath` (`/` on Capacitor, no trailing slash on Pages). */
export function routerBasepath(): string {
  const base = viteBaseUrl();
  if (!base || base === "/") return "/";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

/**
 * Prefix a site-root path (`/media/foo.png`, `/favicon.png`) with Vite's base.
 * Absolute http(s) and data URLs are returned unchanged.
 */
export function publicUrl(path: string): string {
  if (!path || /^(?:https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }
  const base = viteBaseUrl();
  if (path.startsWith(base)) return path;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (trimmedBase !== "" && path.startsWith(`${trimmedBase}/`)) return path;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
