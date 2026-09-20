import { ReactNode } from "react";
import type { Metadata } from "next";
import { serviceKeywords, longTailKeywords } from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services/pain-treatment";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "درمان دردهای اسکلتی-عضلانی";
const description =
  "درمان تخصصی دردهای اسکلتی-عضلانی شامل کمردرد، گردن درد، آرتروز زانو، فیبرومیالژیا و میوفاشیال پین با تجویز و ارجاع پزشک متخصص، رویکرد غیرجراحی و پیگیری مستمر در کلینیک راه تناسب.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    ...serviceKeywords.pain,
    ...longTailKeywords.filter((k) =>
      /درد|کمردرد|گردن درد|آرتروز|دیسک|سیاتیک|فیبرومیالژیا|غیرجراحی/.test(k),
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
        url: "/og/og-pain-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "درمان دردهای اسکلتی-عضلانی در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-pain-treatment.jpg"],
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "درمان دردهای اسکلتی-عضلانی",
  alternateName: ["Musculoskeletal Pain Treatment", "Chronic Pain Management"],
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
  relevantSpecialty: [
    "Physiotherapy",
    "PhysicalTherapy",
    "PainMedicine",
    "Rehabilitation",
  ],
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "درمان دردهای مزمن ستون فقرات",
    },
    {
      "@type": "MedicalProcedure",
      name: "درمان کمردرد و گردن درد",
    },
    {
      "@type": "MedicalProcedure",
      name: "درمان آرتروز زانو و مفاصل",
    },
    {
      "@type": "MedicalProcedure",
      name: "درمان فیبرومیالژیا و میوفاشیال پین",
    },
    {
      "@type": "MedicalProcedure",
      name: "درمان دردهای وضعیتی",
    },
    {
      "@type": "MedicalProcedure",
      name: "برنامه درمانی غیرجراحی",
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
      name: "درمان دردهای اسکلتی-عضلانی",
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
      name: "درمان دردهای اسکلتی-عضلانی به تجویز پزشک نیاز دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، درمان دردهای اسکلتی-عضلانی در کلینیک راه تناسب پس از معاینه و تشخیص پزشک متخصص و با دریافت ارجاع مناسب انجام می‌شود. این رویکرد تضمین می‌کند که علت اصلی درد شناسایی شود و برنامه‌ی درمانی بر اساس شرایط فرد طراحی گردد.",
      },
    },
    {
      "@type": "Question",
      name: "آیا درمان دردهای مزمن بدون جراحی امکان‌پذیر است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، بسیاری از دردهای مزمن اسکلتی-عضلانی مانند کمردرد، گردن درد، آرتروز و دردهای وضعیتی با رویکرد غیرجراحی شامل حرکات اصلاحی، تمرینات تقویتی، تکنیک‌های کاهش درد و اصلاح الگوهای حرکتی قابل مدیریت و درمان هستند.",
      },
    },
    {
      "@type": "Question",
      name: "درمان کمردرد چقدر طول می‌کشد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "مدت زمان درمان به علت و شدت کمردرد بستگی دارد. در موارد حاد ممکن است طی چند جلسه بهبود قابل توجهی حاصل شود و در موارد مزمن، دوره‌ی درمانی طولانی‌تر و همراه با پیگیری مستمر خواهد بود. برنامه‌ی دقیق پس از ارزیابی تخصصی ارائه می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "چه تفاوتی بین درمان دردهای اسکلتی-عضلانی و فیزیوتراپی معمول وجود دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "درمان دردهای اسکلتی-عضلانی در مرکز ما با رویکردی بین‌رشته‌ای و با تمرکز بر علت اصلی درد انجام می‌شود. این رویکرد ترکیبی از حرکات اصلاحی، تکنیک‌های کاهش درد، آموزش الگوهای حرکتی صحیح و در صورت نیاز همکاری با پزشک متخصص است تا از بازگشت درد پیشگیری شود.",
      },
    },
    {
      "@type": "Question",
      name: "آیا فیبرومیالژیا و میوفاشیال پین قابل درمان هستند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "این شرایط معمولاً قابل مدیریت و کاهش قابل توجه هستند. درمان شامل ترکیبی از تمرینات ملایم، تکنیک‌های آزادسازی میوفاشیال، ماساژ درمانی، آموزش مدیریت استرس و اصلاح الگوهای حرکتی است. پیگیری مستمر در کنترل علائم نقش مهمی دارد.",
      },
    },
    {
      "@type": "Question",
      name: "برای شروع درمان درد به چه مدارکی نیاز است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "همراه داشتن مدارک پزشکی مرتبط مانند نسخه‌ی پزشک، گزارش MRI، عکس رادیولوژی و آزمایش‌های مرتبط در صورت وجود، به ارزیابی دقیق‌تر و طراحی برنامه‌ی مناسب کمک می‌کند.",
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
