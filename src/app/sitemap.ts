import type { MetadataRoute } from "next";
import { CAN_INDEX, SEO_PAGES, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!CAN_INDEX) return [];
  return Object.entries(SEO_PAGES).map(([path, page]) => ({
    url: absoluteUrl(path),
    lastModified: page.lastModified,
  }));
}
