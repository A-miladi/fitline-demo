# Performance comparison

Measured on 2026-11-08 against the production build before this optimization. JavaScript sizes are the sum of gzip-compressed scripts referenced by each route, excluding legacy-only polyfills. They are not real-user timing or Lighthouse scores.

| Route | Before JS (KiB gzip) | After JS (KiB gzip) | Change |
| --- | ---: | ---: | ---: |
| `/` | 226.7 | 146.5 | -35.4% |
| `/about` | 174.5 | 142.6 | -18.3% |
| `/services` | 177.5 | 145.7 | -17.9% |
| `/appointment` | 174.5 | 175.9 | +0.8% |
| `/specialists` | 178.1 | 167.4 | -6.0% |
| `/treatment-process` | 227.2 | 145.7 | -35.9% |

The appointment bundle is approximately unchanged; it retains the form and calendar code that other pages no longer load. Its calendar is memoized, form initialization is lazy, and date formatting reuses an Intl formatter.

- Ten font weights: 873,573 bytes of TTF replaced by 262,304 bytes of WOFF2 (70.0% smaller), with all original glyphs retained.
- Home illustration source assets: 211,096 bytes of PNG replaced by 45,956 bytes of WebP (78.2% smaller). Display size is specified as 44px so responsive images request an appropriate variant.
- Logo source: 177,198 bytes replaced by a 16,660-byte WebP with explicit intrinsic aspect ratio.
- Public assets eagerly precached by the PWA: 3,775,266 bytes reduced to 683,472 bytes (81.9% smaller). Compiled app chunks are additional to these public-asset totals. Unvisited original fonts and images are no longer eagerly downloaded.
- Home and treatment-process content is rendered on the server and is visible without waiting for animation JavaScript. Hover effects use CSS and reduced-motion preferences are respected.
- The navigation imports contact data from a small shared constants module instead of importing the appointment screen.

Validation: production build, ESLint with zero warnings, TypeScript, 12 calendar/PWA tests, mobile menu navigation, desktop/mobile rendering, appointment UI, and HTTP cache headers for fonts and the service worker.

Reproduce route-size measurements with `npm run build` and `npm run analyze:size`. Real-world latency still depends on hosting, network and the separately hosted appointments API.
