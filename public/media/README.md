# Bundled clinic media

Logos, packshots, anatomy illustrations, WebVTT captions and instructional
videos are served from this folder as `/media/<filename>` so the Capacitor
Android WebView can load them offline.

## Why this folder exists

Lovable stores uploads as `src/assets/*.asset.json` with relative URLs like
`/__l5e/assets-v1/<id>/<file>`. That path is rewritten by Lovable’s preview
origin. Inside the APK there is no such host, so logos were blank and videos
did not play. The JSON `url` fields (and hardcoded data-module paths) now
point here.

## Fetching files

```sh
npm run bundle:media
```

`npm run build` runs the same script first. It downloads from the published
preview app:

`https://id-preview--6165df68-9e99-4dc4-ae1d-105cd6d6a8c8.lovable.app`

Images and `.vtt` files are committed. MP4s are gitignored (they are large)
and re-fetched at build time. Override the host with `LOVABLE_ASSET_HOST`
if the preview URL changes.

If a video cannot be fetched, do **not** invent clinical footage. Drop the
official H.264 + AAC MP4 into this folder using the expected filename and
rebuild. See `FETCH-STATUS.md` after a fetch.

## Android WebView

Instructional videos are H.264 + AAC MP4 (`yuv420p`, `+faststart` when
re-encoded). That combination plays in Android WebView on Galaxy Tab A8/A9+.
