import type { Metadata } from "next";
import { CLINIC } from "../constants/clinic";

const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fitlineclinic.com");
export const SITE_URL = configuredUrl.origin;
export const CAN_INDEX = process.env.NODE_ENV === "production"
  && process.env.SITE_INDEXING_ENABLED !== "false"
  && process.env.VERCEL_ENV !== "preview";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

interface SeoPage {
  title: string;
  label: string;
  description: string;
  kind: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  service?: boolean;
  // Update only when this page's content changes, not on every request/build.
  lastModified: string;
}

export const SEO_PAGES: Record<string, SeoPage> = {
  "/": {
    title: "مرکز راه تناسب اراک | حرکات اصلاحی و توانبخشی ورزشی",
    label: "صفحه اصلی",
    description: "مرکز تندرستی و حرکات اصلاحی راه تناسب در اراک؛ ارزیابی تخصصی، اصلاح ناهنجاری‌های قامتی، توانبخشی ورزشی، تیپینگ و ماساژ و ورزش سالمندان. آشنایی با خدمات و ثبت درخواست نوبت.",
    kind: "WebPage", lastModified: "2026-11-08",
  },
  "/about": {
    title: "معرفی مرکز حرکات اصلاحی در اراک",
    label: "معرفی مرکز",
    description: "با مرکز راه تناسب اراک، رویکرد پیشگیری‌محور و خدمات حرکات اصلاحی و توانبخشی ورزشی آشنا شوید. اطلاعات تماس، نشانی مرکز و راهنمای دریافت نوبت ارزیابی.",
    kind: "AboutPage", lastModified: "2026-11-08",
  },
  "/services": {
    title: "خدمات حرکات اصلاحی و توانبخشی در اراک",
    label: "خدمات ما",
    description: "خدمات مرکز راه تناسب اراک: حرکات اصلاحی، توانبخشی آسیب‌های ورزشی، خدمات دردهای اسکلتی‌عضلانی، تیپینگ و ماساژ و ورزش سالمندان. جزئیات خدمات و ثبت درخواست ارزیابی.",
    kind: "CollectionPage", lastModified: "2026-11-08",
  },
  "/services/corrective-exercises": {
    title: "حرکات اصلاحی و اصلاح ناهنجاری‌های قامتی در اراک",
    label: "حرکات اصلاحی",
    description: "ارزیابی و برنامه حرکات اصلاحی در مرکز راه تناسب اراک برای ناهنجاری‌های قامتی، کف پا، زانو و ستون فقرات؛ آشنایی با مراحل ارزیابی، تمرینات و پیگیری تخصصی.",
    kind: "WebPage", service: true, lastModified: "2026-11-08",
  },
  "/services/sports-rehabilitation": {
    title: "توانبخشی ورزشی و بازگشت به ورزش در اراک",
    label: "توانبخشی ورزشی",
    description: "توانبخشی آسیب‌های ورزشی در مرکز راه تناسب اراک؛ ارزیابی عملکرد، برنامه تمرینی متناسب با آسیب و بازگشت تدریجی به فعالیت ورزشی با پیگیری متخصصین.",
    kind: "WebPage", service: true, lastModified: "2026-11-08",
  },
  "/services/pain-treatment": {
    title: "خدمات دردهای اسکلتی‌عضلانی در اراک",
    label: "درمان دردهای اسکلتی‌عضلانی",
    description: "خدمات تخصصی دردهای اسکلتی‌عضلانی در مرکز راه تناسب اراک با تجویز و ارجاع پزشک متخصص؛ ارزیابی، تمرینات متناسب با شرایط فرد و پیگیری روند بهبود.",
    kind: "WebPage", service: true, lastModified: "2026-11-08",
  },
  "/services/taping-massage": {
    title: "تیپینگ و ماساژ تخصصی در اراک",
    label: "تیپینگ و ماساژ",
    description: "آشنایی با خدمات تیپینگ و ماساژ تخصصی مرکز راه تناسب اراک برای کمک به ریکاوری و بهبود عملکرد حرکتی؛ بررسی شرایط دریافت خدمات و ثبت درخواست نوبت.",
    kind: "WebPage", service: true, lastModified: "2026-11-08",
  },
  "/services/elderly-exercise": {
    title: "ورزش سالمندان و تمرینات تعادل در اراک",
    label: "ورزش سالمندان",
    description: "برنامه ورزش سالمندان در مرکز راه تناسب اراک؛ ارزیابی وضعیت حرکتی و تمرینات متناسب برای حفظ تحرک، تقویت تعادل و افزایش توان انجام فعالیت‌های روزمره.",
    kind: "WebPage", service: true, lastModified: "2026-11-08",
  },
  "/specialists": {
    title: "متخصصین حرکات اصلاحی و توانبخشی در اراک",
    label: "متخصصین ما",
    description: "آشنایی با متخصصین مرکز راه تناسب اراک، زمینه‌های تخصصی و تحصیلات آنان در حرکات اصلاحی و آسیب‌شناسی ورزشی. انتخاب متخصص و ثبت درخواست نوبت مشاوره و ارزیابی.",
    kind: "CollectionPage", lastModified: "2026-11-08",
  },
  "/treatment-process": {
    title: "مراحل ارزیابی و دریافت خدمات حرکات اصلاحی",
    label: "فرآیند درمان",
    description: "مراحل دریافت خدمات در مرکز راه تناسب اراک: درخواست نوبت، ارزیابی تخصصی، طراحی برنامه تمرینی و پیگیری مجدد. راهنمای آمادگی برای مراجعه و پاسخ به پرسش‌های متداول.",
    kind: "WebPage", lastModified: "2026-11-08",
  },
  "/appointment": {
    title: "درخواست نوبت ارزیابی و مشاوره در اراک",
    label: "ثبت نوبت",
    description: "درخواست نوبت ارزیابی و مشاوره در مرکز راه تناسب اراک؛ انتخاب متخصص و زمان ترجیحی، اطلاعات تماس و موقعیت مرکز روی نقشه. کارشناسان برای هماهنگی نوبت با شما تماس می‌گیرند.",
    kind: "ContactPage", lastModified: "2026-11-08",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function pageTitle(path: string) {
  return path === "/" ? SEO_PAGES[path].title : `${SEO_PAGES[path].title} | راه تناسب`;
}

export function socialImage(path: string) {
  const slug = path.split("/").filter(Boolean).pop() || "home";
  return absoluteUrl(`/og/${slug}?v=1`);
}

export function createPageMetadata(path: string): Metadata {
  const page = SEO_PAGES[path];
  if (!page) throw new Error(`Missing SEO configuration for ${path}`);
  const title = pageTitle(path);
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website", locale: "fa_IR", siteName: CLINIC.name,
      url: absoluteUrl(path), title, description: page.description,
      images: [{ url: socialImage(path), width: 1200, height: 630, alt: title, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image", title, description: page.description,
      images: [{ url: socialImage(path), alt: title }],
    },
    robots: {
      index: CAN_INDEX, follow: true,
      googleBot: { index: CAN_INDEX, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

function internationalPhone(phone: string) {
  const digits = phone.replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))).replace(/\D/g, "");
  return `+98${digits.replace(/^0/, "")}`;
}

export function siteStructuredData() {
  const services = Object.entries(SEO_PAGES).filter(([, page]) => page.service);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "@id": BUSINESS_ID,
        name: CLINIC.name, alternateName: CLINIC.alternateName, url: SITE_URL,
        description: SEO_PAGES["/"].description,
        logo: absoluteUrl("/icon/logo512.png"), image: socialImage("/"),
        telephone: CLINIC.phones.map(internationalPhone),
        address: {
          "@type": "PostalAddress", addressCountry: CLINIC.country,
          addressLocality: CLINIC.city, addressRegion: CLINIC.region,
          streetAddress: CLINIC.streetAddress,
        },
        geo: { "@type": "GeoCoordinates", latitude: CLINIC.latitude, longitude: CLINIC.longitude },
        hasMap: `https://maps.google.com/?q=${CLINIC.latitude},${CLINIC.longitude}`,
        areaServed: { "@type": "City", name: CLINIC.city },
        hasOfferCatalog: {
          "@type": "OfferCatalog", name: "خدمات مرکز راه تناسب",
          itemListElement: services.map(([path, page]) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", "@id": `${absoluteUrl(path)}#service`, name: page.label, url: absoluteUrl(path) },
          })),
        },
      },
      {
        "@type": "WebSite", "@id": WEBSITE_ID, url: SITE_URL,
        name: CLINIC.name, alternateName: CLINIC.alternateName, inLanguage: "fa-IR",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

export function breadcrumbItems(path: string) {
  const items = [{ name: "صفحه اصلی", url: absoluteUrl("/") }];
  if (path.startsWith("/services/")) items.push({ name: SEO_PAGES["/services"].label, url: absoluteUrl("/services") });
  if (path !== "/") items.push({ name: SEO_PAGES[path].label, url: absoluteUrl(path) });
  return items;
}

export function pageStructuredData(path: string) {
  const page = SEO_PAGES[path];
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [{
    "@type": page.kind, "@id": `${url}#webpage`, url,
    name: pageTitle(path), description: page.description, inLanguage: "fa-IR",
    isPartOf: { "@id": WEBSITE_ID }, about: { "@id": BUSINESS_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: socialImage(path), width: 1200, height: 630 },
    ...(path !== "/" && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    ...(page.service && { mainEntity: { "@id": `${url}#service` } }),
  }];
  if (path !== "/") graph.push({
    "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumbItems(path).map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: item.url,
    })),
  });
  if (page.service) graph.push({
    "@type": "Service", "@id": `${url}#service`, url,
    name: page.label, description: page.description, serviceType: page.label,
    provider: { "@id": BUSINESS_ID }, areaServed: { "@type": "City", name: CLINIC.city },
  });
  if (path === "/services") graph.push({
    "@type": "ItemList", "@id": `${url}#services`,
    itemListElement: Object.entries(SEO_PAGES).filter(([, item]) => item.service).map(([servicePath, item], index) => ({
      "@type": "ListItem", position: index + 1, name: item.label, url: absoluteUrl(servicePath),
    })),
  });
  return { "@context": "https://schema.org", "@graph": graph };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
