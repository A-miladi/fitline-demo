import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const routes = ["/", "/about", "/services", "/services/corrective-exercises", "/services/sports-rehabilitation", "/services/pain-treatment", "/services/taping-massage", "/services/elderly-exercise", "/specialists", "/treatment-process", "/appointment"];
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1] || "");
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(([tag]) => tag);
const meta = (html, key) => tags(html, "meta").filter((tag) => attr(tag,"name") === key || attr(tag,"property") === key).map((tag) => attr(tag,"content"));
const titles = new Set(), descriptions = new Set();
let canonicalOrigin;

for (const route of routes) {
  const file = `.next/server/app/${route === "/" ? "index" : route.slice(1)}.html`;
  assert.ok(existsSync(file), "Run npm run build before npm run seo:check");
  const html = readFileSync(file,"utf8");
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || "");
  assert.ok(title && !titles.has(title), `${route}: title is missing or duplicated`);
  titles.add(title);
  const description = meta(html,"description");
  assert.equal(description.length, 1, `${route}: expected one description`);
  assert.ok(description[0].length >= 80 && !descriptions.has(description[0]), `${route}: description missing, too short or duplicated`);
  descriptions.add(description[0]);
  const canonical = tags(html,"link").filter((tag) => attr(tag,"rel") === "canonical");
  assert.equal(canonical.length,1,`${route}: expected one canonical`);
  const canonicalUrl = new URL(attr(canonical[0],"href"));
  canonicalOrigin ??= canonicalUrl.origin;
  assert.equal(canonicalUrl.origin,canonicalOrigin,`${route}: inconsistent domain`);
  assert.equal(canonicalUrl.pathname,route,`${route}: wrong canonical path`);
  assert.equal(canonicalUrl.search,"",`${route}: query parameters must not be canonical`);
  assert.equal(new URL(meta(html,"og:url")[0]).href,canonicalUrl.href,`${route}: Open Graph URL must match canonical`);
  assert.equal(meta(html,"og:title")[0],title,`${route}: social title differs from page title`);
  const image = new URL(meta(html,"og:image")[0]);
  assert.equal(image.origin,canonicalOrigin,`${route}: image must use the configured domain`);
  assert.ok(existsSync(`.next/server/app${image.pathname}.body`),`${route}: missing generated social image`);
  assert.equal(meta(html,"og:image:width")[0],"1200");
  assert.equal(meta(html,"og:image:height")[0],"630");
  assert.ok(meta(html,"robots").some((value) => /\bindex\b/.test(value) && !value.includes("noindex")),`${route}: public production page must be indexable`);
  assert.equal((html.match(/<h1\b/g) || []).length,1,`${route}: expected one server-rendered h1`);
  assert.ok(html.includes('lang="fa-IR"') && html.includes('dir="rtl"'));
  assert.ok(!/YOUR_|\/og\/og-|تهران|SearchAction|TraditionalMedicine|recognizingAuthority|aggregateRating/.test(html),`${route}: placeholder, wrong location or unsupported schema claim`);
  const structured = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(([,json]) => JSON.parse(json));
  const graph = structured.flatMap((item) => item["@graph"] || [item]);
  assert.equal(graph.filter((item) => item["@type"] === "LocalBusiness").length,1,`${route}: business must not be duplicated`);
  const business = graph.find((item) => item["@type"] === "LocalBusiness");
  assert.equal(business.address.addressLocality,"اراک");
  assert.equal(business.geo.latitude,34.087055);
  assert.equal(business.geo.longitude,49.695316);
  assert.deepEqual(business.telephone,["+988632241752","+989384808816"]);
  const pageNodes = graph.filter((item) => ["WebPage","AboutPage","CollectionPage","ContactPage"].includes(item["@type"]));
  assert.equal(pageNodes.length,1,`${route}: nested layouts must not emit extra pages`);
  assert.equal(pageNodes[0].url,canonicalUrl.href);
  const breadcrumbs = graph.filter((item) => item["@type"] === "BreadcrumbList");
  assert.equal(breadcrumbs.length,route === "/" ? 0 : 1,`${route}: invalid breadcrumb count`);
  if (breadcrumbs.length) {
    assert.equal(breadcrumbs[0].itemListElement.at(-1).item,canonicalUrl.href);
    assert.ok(html.includes('aria-label="مسیر صفحه"'),`${route}: breadcrumb must be visible`);
  }
  const faq = graph.filter((item) => item["@type"] === "FAQPage");
  assert.equal(faq.length,route === "/treatment-process" ? 1 : 0,`${route}: FAQ markup only belongs on a page with visible questions`);
  if (faq.length) for (const question of faq[0].mainEntity) {
    assert.ok(html.includes(question.name) && html.includes(question.acceptedAnswer.text),"FAQ must match visible content");
  }
  const anchors = tags(html,"a").map((tag) => attr(tag,"href"));
  for (const link of ["/about","/services","/specialists","/appointment","/treatment-process"]) {
    assert.ok(anchors.includes(link),`${route}: main navigation link ${link} is not crawlable`);
  }
  assert.ok(!/<a\b[^>]*>\s*<button\b/.test(html),`${route}: interactive button nested in a link`);
  console.log(`✓ ${route}: metadata, canonical, social image, structured data and crawlable content`);
}

const admin=readFileSync('.next/server/app/admin.html','utf8');
assert.ok(meta(admin,"robots").some((value)=>value.includes("noindex")));
const missing=readFileSync('.next/server/app/_not-found.html','utf8');
assert.ok(meta(missing,"robots").some((value)=>value.includes("noindex")));
const sitemap=readFileSync('.next/server/app/sitemap.xml.body','utf8');
const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([,url])=>decode(url));
assert.equal(locations.length,routes.length);
assert.equal(new Set(locations).size,locations.length);
assert.deepEqual(locations.map((url)=>new URL(url).pathname).sort(),[...routes].sort());
assert.ok(!sitemap.includes('/admin') && !sitemap.includes('doctorId='));
assert.ok(!sitemap.includes('changefreq') && !sitemap.includes('priority'));
const robots=readFileSync('.next/server/app/robots.txt.body','utf8');
assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
assert.ok(!robots.includes('Disallow: /admin'),"Allow crawlers to see admin's noindex tag");
console.log(`✓ Admin/404 noindex, robots.txt and ${routes.length} canonical sitemap entries`);
