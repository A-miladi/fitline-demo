import { readFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

// Compare production builds with the same tool. Excludes legacy-only polyfills.
const routes = ["index", "about", "services", "appointment", "specialists", "treatment-process"];
const report = {};
for (const route of routes) {
  const path = join(".next/server/app", `${route}.html`);
  if (!existsSync(path)) throw new Error("Run npm run build before measuring bundles");
  const html = readFileSync(path, "utf8");
  const scripts = [...html.matchAll(/<script\b[^>]*>/g)]
    .map(([tag]) => /nomodule/i.test(tag) ? null : tag.match(/src="([^"]+)"/)?.[1])
    .filter(Boolean);
  const styles = [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([tag]) => tag.includes('rel="stylesheet"') ? tag.match(/href="([^"]+)"/)?.[1] : null)
    .filter(Boolean);
  const measure = (urls) => [...new Set(urls)].map((url) => {
    const file = join(".next", url.replace(/^\/_next\//, ""));
    return { url, bytes: statSync(file).size, gzip: gzipSync(readFileSync(file)).length };
  });
  const js = measure(scripts), css = measure(styles);
  report[route === "index" ? "/" : `/${route}`] = {
    jsGzip: js.reduce((sum, entry) => sum + entry.gzip, 0),
    cssGzip: css.reduce((sum, entry) => sum + entry.gzip, 0),
    scripts: js,
  };
}
if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.table(Object.entries(report).map(([route, data]) => ({
    route, "JS gzip (KiB)": (data.jsGzip / 1024).toFixed(1),
    "CSS gzip (KiB)": (data.cssGzip / 1024).toFixed(1), scripts: data.scripts.length,
  })));
}
