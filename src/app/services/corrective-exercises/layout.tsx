import { ReactNode } from "react";
import type { Metadata } from "next";
import { longTailKeywords, serviceKeywords } from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services/corrective-exercises";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "حرکات اصلاحی";
const description =
  "اصلاح ناهنجاری‌های اسکلتی-عضلانی شامل کف پای صاف و گود، زانوی پرانتزی و ضربدری، لوردوز، کایفوز، اسکولیوز، سر به جلو و تورتیکولی با متخصصین دارای مدرک معتبر در کلینیک راه تناسب.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    ...serviceKeywords.corrective,
    ...longTailKeywords.filter((k) =>
      /حرکات اصلاحی|ناهنجاری|کف پا|زانو|اسکولیوز|کایفوز|لوردوز|پرانتزی|ضربدری/.test(
        k,
      ),
    ),
  ],

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    type: "article",
    locale: "fa_IR",
    url: pageUrl,
    siteName: "کلینیک راه تناسب",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: [
      {
        url: "/og/og-corrective-exercises.jpg",
        width: 1200,
        height: 630,
        alt: "حرکات اصلاحی در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-corrective-exercises.jpg"],
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

// JSON-LD اختصاصی این سرویس
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "حرکات اصلاحی",
  alternateName: "Corrective Exercises",
  description,
  url: pageUrl,
  provider: {
    "@type": "MedicalClinic",
    name: "کلینیک راه تناسب",
    url: siteUrl,
    logo: `${siteUrl}/icon/logo512.png`,
    telephone: "YOUR_PHONE_NUMBER",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "اراک",
      streetAddress: "چهارراه دکتر حسابی، انتهای کوچه اردیبهشت، نبش کوچه تربیت",
    },
  },
  relevantSpecialty: ["Physiotherapy", "PhysicalTherapy", "Rehabilitation"],
  medicineSystem: "TraditionalMedicine",
  recognizingAuthority: {
    "@type": "Organization",
    name: "وزارت بهداشت، درمان و آموزش پزشکی",
  },
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "اصلاح کف پای صاف و کف پای گود",
    },
    {
      "@type": "MedicalProcedure",
      name: "درمان زانوی پرانتزی و ضربدری",
    },
    {
      "@type": "MedicalProcedure",
      name: "اصلاح لوردوز، کایفوز و اسکولیوز",
    },
    {
      "@type": "MedicalProcedure",
      name: "اصلاح سر به جلو و تورتیکولی",
    },
    {
      "@type": "MedicalProcedure",
      name: "رفع سندروم متقاطع قدامی و تحتانی",
    },
  ],
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
      item: `${siteUrl}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "حرکات اصلاحی",
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
      name: "حرکات اصلاحی برای چه کسانی مناسب است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "حرکات اصلاحی برای همه افرادی که دچار ناهنجاری‌های اسکلتی-عضلانی مانند کف پای صاف، زانوی پرانتزی یا ضربدری، لوردوز، کایفوز، اسکولیوز، سر به جلو و تورتیکولی هستند، مناسب است. این تمرینات در کودکان، نوجوانان و بزرگسالان قابل اجرا است.",
      },
    },
    {
      "@type": "Question",
      name: "آیا حرکات اصلاحی برای اصلاح کف پای صاف مؤثر است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، تمرینات اصلاحی تخصصی می‌توانند در تقویت عضلات کف پا و قوس آن مؤثر باشند و از پیشرفت عوارض جلوگیری کنند. برنامه‌ی دقیق باید توسط متخصص حرکات اصلاحی و بر اساس ارزیابی فردی طراحی شود.",
      },
    },
    {
      "@type": "Question",
      name: "چه مدت زمانی برای اصلاح ناهنجاری لازم است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "مدت زمان اصلاح به نوع و شدت ناهنجاری بستگی دارد. به طور معمول دوره‌های حرکات اصلاحی بین ۸ تا ۱۶ جلسه پیشنهاد می‌شود و پیگیری منظم نقش مهمی در نتیجه‌گیری دارد.",
      },
    },
    {
      "@type": "Question",
      name: "آیا برای شروع حرکات اصلاحی به تجویز پزشک نیاز است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برای شروع حرکات اصلاحی نیازی به تجویز پزشک نیست، اما انجام ارزیابی تخصصی الزامی است. در صورت وجود بیماری‌های زمینه‌ای، هماهنگی با پزشک معالج توصیه می‌شود.",
      },
    },
  ],
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
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

export default Layout;
