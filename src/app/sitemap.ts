import type { MetadataRoute } from "next";

const siteUrl = "https://fitlineclinic.com";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/appointment", priority: 0.9, changeFrequency: "weekly" },
  {
    path: "/services/corrective-exercises",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/sports-rehabilitation",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/pain-treatment",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/taping-massage",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/elderly-exercise",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/specialists", priority: 0.7, changeFrequency: "monthly" },
  { path: "/treatment-process", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
