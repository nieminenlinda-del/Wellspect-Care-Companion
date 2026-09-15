# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The live app is published from `main` to:

**https://nieminenlinda-del.github.io/Wellspect-Care-Companion/**

`npm run build` (and Capacitor APK packaging) uses base `/`. The Pages workflow sets `VITE_BASE=/Wellspect-Care-Companion/` so assets, the router, and `/media/...` files load under that subdirectory. Deep links are served via `404.html` (a copy of the SPA shell).

```sh
npm run build:pages
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
