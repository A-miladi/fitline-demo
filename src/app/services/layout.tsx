import { ReactNode } from "react";
import type { Metadata } from "next";
import {
  primaryKeywords,
  serviceKeywords,
  longTailKeywords,
  benefitKeywords,
} from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "خدمات تخصصی";
const description =
  "خدمات تخصصی کلینیک راه تناسب شامل حرکات اصلاحی، توانبخشی ورزشی، درمان دردهای اسکلتی-عضلانی، تیپینگ و ماساژ درمانی و ورزش سالمندان. ارائه خدمات با متخصصین دارای مدرک معتبر و متدهای نوین در اراک.";

export const metadata: Metadata = {
  title,
  description,

  keywords: Array.from(
    new Set([
      ...primaryKeywords,
      ...longTailKeywords,
      ...benefitKeywords,
      ...Object.values(serviceKeywords).flat(),
    ]),
  ),

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: pageUrl,
    siteName: "کلینیک راه تناسب",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: [
      {
        url: "/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات تخصصی کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-services.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}/#collection`,
  name: "خدمات تخصصی کلینیک راه تناسب",
  alternateName: "Services of Rahtanasob Clinic",
  description,
  url: pageUrl,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "کلینیک راه تناسب",
    url: siteUrl,
  },
  about: {
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: "کلینیک راه تناسب",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "فهرست خدمات تخصصی",
    numberOfItems: 5,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "حرکات اصلاحی",
        description: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
        url: `${siteUrl}/services/corrective-exercises`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "توانبخشی ورزشی",
        description: "بازگشت به ورزش پس از آسیب‌های ورزشی",
        url: `${siteUrl}/services/sports-rehabilitation`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "درمان دردهای اسکلتی-عضلانی",
        description: "با تجویز و ارجاع پزشک متخصص",
        url: `${siteUrl}/services/pain-treatment`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "تیپینگ و ماساژ درمانی",
        description: "خدمات تخصصی تکمیلی",
        url: `${siteUrl}/services/taping-massage`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "ورزش سالمندان",
        description: "حفظ تحرک، تعادل و کیفیت زندگی در دوران سالمندی",
        url: `${siteUrl}/services/elderly-exercise`,
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "صفحه اصلی",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "خدمات ما",
      item: pageUrl,
    },
  ],
};

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "خدمات تخصصی کلینیک راه تناسب",
  url: pageUrl,
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "حرکات اصلاحی",
        url: `${siteUrl}/services/corrective-exercises`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "توانبخشی ورزشی",
        url: `${siteUrl}/services/sports-rehabilitation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "درمان دردهای اسکلتی-عضلانی",
        url: `${siteUrl}/services/pain-treatment`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "تیپینگ و ماساژ درمانی",
        url: `${siteUrl}/services/taping-massage`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalTherapy",
        name: "ورزش سالمندان",
        url: `${siteUrl}/services/elderly-exercise`,
      },
    },
  ],
};

function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerCatalogJsonLd),
        }}
      />
      {children}
    </>
  );
}

export default ServicesLayout;
