# Fitline — راه تناسب

Persian, right-to-left clinic website built with Next.js App Router, React, TypeScript and Tailwind CSS. Includes services, specialists, appointment requests and an administration screen.

## Requirements and setup

Use Node.js 24 LTS (`.nvmrc`) and npm. `package-lock.json` is the project lockfile.

```bash
nvm use
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks and production

```bash
npm run check  # ESLint (zero warnings), TypeScript and calendar regression tests
npm run build
npm start
```

TypeScript errors fail production builds. ESLint runs separately through `npm run lint` or `npm run check`.

TypeScript stays on version 6 and ESLint on version 9 because the current lint plugins do not yet support TypeScript 7 and all ESLint 10 peer dependencies.

## PWA

Serwist generates and registers `/sw.js` during production builds. Development and production builds use Webpack for the service worker integration. Generated service workers are ignored by Git. API and administration requests bypass the runtime cache.

When a new service worker finishes downloading, a Persian update banner appears on every page. Activation and page reload happen after the user presses the update button. First installation does not show the banner. Updates are checked every minute while the app is visible, and when it regains focus or connectivity. Other open tabs keep their own update button instead of reloading automatically.

Deploy using a fresh `npm run build` and publish the complete build and generated `public/sw.js` together. Serve `/sw.js` without CDN/browser caching (the Next.js configuration sets the response header). This flow runs in production on HTTPS or localhost, including the installed PWA; it is disabled during `npm run dev`.

## API

The frontend uses `NEXT_PUBLIC_API_URL`, defaulting to `https://backend.fitlineclinic.com`. The backend is maintained separately. The administration screen currently uses a local demo login; real authentication requires a backend session flow.

## Performance checks

Run `npm run build` followed by `npm run analyze:size` to compare the gzip size of JavaScript referenced by each route's generated HTML. Legacy-only polyfills are excluded. This measures build output, not a Lighthouse score or real-user loading time.

Public pages render their content on the server; only navigation, forms and the app update prompt hydrate in the browser. Local WOFF2 fonts and WebP images preserve the existing design while reducing asset sizes. Font filenames include a version so they can be cached for a year. If a font changes, publish it under a new versioned filename and update its CSS reference.

The PWA precaches its app assets, installation icons and WOFF2 fonts. Original TTF fonts, unused images and public source files are excluded from eager precaching. Other visited images are cached at runtime. The user-controlled update flow is unchanged.
