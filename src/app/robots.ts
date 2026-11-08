import type { MetadataRoute } from "next";
import { CAN_INDEX, SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: CAN_INDEX ? [
      // Admin is crawlable so search engines can read its explicit noindex tag.
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
    ] : [{ userAgent: "*", disallow: "/" }],
    ...(CAN_INDEX && { sitemap: `${SITE_URL}/sitemap.xml` }),
  };
}
