import { ReactNode } from "react";
import type { Metadata } from "next";
import {
  primaryKeywords,
  brandKeywords,
  locationKeywords,
  longTailKeywords,
  audienceKeywords,
  benefitKeywords,
} from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/about";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "معرفی مرکز";
const description =
  "معرفی کلینیک راه تناسب؛ مرکز تخصصی حرکات اصلاحی، توانبخشی ورزشی و درمان دردهای اسکلتی-عضلانی در اراک. تیمی از متخصصین دارای مدرک معتبر، رویکرد علمی و پیشگیری‌محور برای ارتقای سلامت حرکتی شما.";

export const metadata: Metadata = {
  title,
  description,

  keywords: Array.from(
    new Set([
      "معرفی کلینیک",
      "درباره راه تناسب",
      "کلینیک حرکات اصلاحی",
      "مرکز توانبخشی ورزشی",
      "تیم متخصصین حرکات اصلاحی",
      ...primaryKeywords,
      ...brandKeywords,
      ...locationKeywords,
      ...longTailKeywords.filter((k) => /مرکز|کلینیک|متخصص|بهترین/.test(k)),
      ...audienceKeywords,
      ...benefitKeywords,
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
        url: "/og/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "معرفی کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-about.jpg"],
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

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${pageUrl}/#aboutpage`,
  url: pageUrl,
  name: "درباره کلینیک راه تناسب",
  description,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "کلینیک راه تناسب",
    url: siteUrl,
  },
  mainEntity: {
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#organization`,
    name: "کلینیک راه تناسب",
    alternateName: ["راه تناسب", "Rahtanasob", "Fitline Clinic"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon/logo512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og/og-about.jpg`,
    description:
      "کلینیک تخصصی حرکات اصلاحی، توانبخشی ورزشی و درمان دردهای اسکلتی-عضلانی با متخصصین دارای مدرک معتبر و رویکرد علمی و پیشگیری‌محور.",
    foundingDate: "1400",
    slogan: "پیشگیری بهتر از درمان است",
    medicalSpecialty: [
      "Physiotherapy",
      "PhysicalTherapy",
      "SportsMedicine",
      "Rehabilitation",
    ],
    telephone: "YOUR_PHONE_NUMBER",
    email: "YOUR_EMAIL",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "اراک",
      addressRegion: "مرکزی",
      streetAddress: "چهارراه دکتر حسابی، انتهای کوچه اردیبهشت، نبش کوچه تربیت",
      postalCode: "YOUR_POSTAL_CODE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "YOUR_LATITUDE",
      longitude: "YOUR_LONGITUDE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "اراک",
    },
    knowsAbout: [
      "حرکات اصلاحی",
      "توانبخشی ورزشی",
      "آسیب‌شناسی ورزشی",
      "درمان دردهای اسکلتی-عضلانی",
      "تیپینگ و ماساژ درمانی",
      "ورزش سالمندان",
    ],
    sameAs: [
      // "https://instagram.com/rahtanasob",
      // "https://t.me/rahtanasob",
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
      name: "معرفی مرکز",
      item: pageUrl,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "کلینیک راه تناسب چه تخصصی دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "کلینیک راه تناسب یک مرکز تخصصی در حوزه حرکات اصلاحی، توانبخشی ورزشی، آسیب‌شناسی ورزشی و درمان دردهای اسکلتی-عضلانی است. ما با تیمی از متخصصین دارای مدرک معتبر دانشگاهی، خدمات تخصصی را بر اساس آخرین متدهای علمی روز دنیا ارائه می‌دهیم.",
      },
    },
    {
      "@type": "Question",
      name: "متخصصین کلینیک راه تناسب چه مدارکی دارند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "متخصصین ما دارای مدرک معتبر دانشگاهی در رشته‌های حرکات اصلاحی، آسیب‌شناسی ورزشی و فیزیوتراپی هستند. برخی از اعضای تیم دارای مدرک کارشناسی ارشد و دکتری در این رشته‌ها هستند و همگی مجوزهای لازم برای ارائه خدمات درمانی را دارا می‌باشند.",
      },
    },
    {
      "@type": "Question",
      name: "رویکرد درمانی کلینیک راه تناسب چیست؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رویکرد ما پیشگیری‌محور و علمی است. بر این باوریم که شناسایی و اصلاح زودهنگام ناهنجاری‌ها می‌تواند از درمان‌های پیچیده و جراحی پیشگیری کند. برنامه‌های ما بر اساس ارزیابی دقیق، طراحی شخصی‌سازی شده و پیگیری مستمر ارائه می‌شوند.",
      },
    },
    {
      "@type": "Question",
      name: "آیا کلینیک راه تناسب در شهرهای دیگر شعبه دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "در حال حاضر کلینیک راه تناسب در اراک فعال است. برای اطلاع از خدمات آنلاین یا مشاوره از راه دور، با شماره‌های تماس درج شده در سایت در ارتباط باشید.",
      },
    },
    {
      "@type": "Question",
      name: "چند سال است که کلینیک راه تناسب فعالیت می‌کند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "کلینیک راه تناسب از سال ۱۴۰۰ فعالیت خود را آغاز کرده و در این مدت توانسته است رضایت بالای مراجعین را جلب کند. تاکنون بیش از ۱۰۰۰ مورد ناهنجاری با موفقیت اصلاح شده و نرخ رضایت مراجعین بالای ۹۸٪ است.",
      },
    },
    {
      "@type": "Question",
      name: "چه چیزی کلینیک راه تناسب را از سایر مراکز متمایز می‌کند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تمایز اصلی ما در چند چیز است: تیم متخصصین با مدارک معتبر، استفاده از متدهای علمی روز دنیا، رویکرد پیشگیری‌محور، شفافیت مالی بدون هزینه‌های پنهان، و پشتیبانی مستمر در تمام مراحل درمان. هدف ما نه فقط درمان، بلکه بهبود کیفیت زندگی مراجعین است.",
      },
    },
  ],
};

function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
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
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      {children}
    </>
  );
}

export default AboutLayout;
