import { ReactNode } from "react";
import type { Metadata } from "next";
import { serviceKeywords, longTailKeywords } from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services/sports-rehabilitation";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "توانبخشی ورزشی";
const description =
  "توانبخشی تخصصی آسیب‌های ورزشی شامل پارگی رباط صلیبی، آسیب منیسک، روتاتور کاف، تنیس البو و پیچ خوردگی مچ پا. بازگشت ایمن و تدریجی به ورزش با متخصصین مجرب کلینیک راه تناسب.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    ...serviceKeywords.sportsRehab,
    ...longTailKeywords.filter((k) =>
      /توانبخشی|ورزش|آسیب|رباط|ACL|منیسک|روتاتور|تنیس|گلف|پیچ خوردگی|بازگشت/.test(
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
        url: "/og/og-sports-rehabilitation.jpg",
        width: 1200,
        height: 630,
        alt: "توانبخشی ورزشی در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-sports-rehabilitation.jpg"],
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
  name: "توانبخشی ورزشی",
  alternateName: [
    "Sports Rehabilitation",
    "Athletic Rehabilitation",
    "Sports Injury Rehabilitation",
  ],
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
    "SportsMedicine",
    "Rehabilitation",
  ],
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "ورزشکاران حرفه‌ای و آماتور",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "توانبخشی آسیب‌های شانه و روتاتور کاف",
    },
    {
      "@type": "MedicalProcedure",
      name: "توانبخشی آسیب‌های آرنج (تنیس البو، گلف البو)",
    },
    {
      "@type": "MedicalProcedure",
      name: "توانبخشی آسیب‌های لگن و سندرم ایلیوتیبیال باند",
    },
    {
      "@type": "MedicalProcedure",
      name: "توانبخشی پارگی رباط صلیبی و آسیب منیسک",
    },
    {
      "@type": "MedicalProcedure",
      name: "توانبخشی پیچ خوردگی مچ پا و تاندون آشیل",
    },
    {
      "@type": "MedicalProcedure",
      name: "برنامه بازگشت تدریجی به ورزش",
    },
    {
      "@type": "MedicalProcedure",
      name: "پیشگیری از آسیب‌های ورزشی مکرر",
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
      name: "توانبخشی ورزشی",
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
      name: "توانبخشی ورزشی چه تفاوتی با فیزیوتراپی معمول دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "توانبخشی ورزشی فراتر از فیزیوتراپی معمول است و هدف آن نه‌تنها کاهش درد و بهبود آسیب، بلکه بازگرداندن ورزشکار به سطح عملکرد قبلی و حتی بالاتر است. این برنامه شامل تست‌های عملکردی، تمرینات پیشرونده، تمرینات اختصاصی رشته‌ی ورزشی و آماده‌سازی برای بازگشت ایمن به میدان است.",
      },
    },
    {
      "@type": "Question",
      name: "بعد از پارگی رباط صلیبی (ACL) چقدر طول می‌کشد تا به ورزش بازگردم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "مدت زمان بازگشت به ورزش پس از پارگی ACL بسته به نوع درمان (جراحی یا غیرجراحی)، سطح ورزشی و پاسخ فرد به توانبخشی متفاوت است. به طور معمول بین ۶ تا ۱۲ ماه برای بازگشت کامل به ورزش‌های پربرخورد زمان لازم است. برنامه‌ی توانبخشی تخصصی و پیگیری مستمر این مدت را بهینه می‌کند.",
      },
    },
    {
      "@type": "Question",
      name: "آیا برای شروع توانبخشی ورزشی به تجویز پزشک نیاز است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برای آسیب‌های جدی مثل پارگی رباط یا پس از جراحی، ارجاع پزشک متخصص توصیه می‌شود. در آسیب‌های خفیف‌تر مانند کشیدگی عضلانی یا پیچ خوردگی ساده، ارزیابی تخصصی توسط متخصص توانبخشی کافی است و در صورت نیاز، به پزشک ارجاع داده می‌شوید.",
      },
    },
    {
      "@type": "Question",
      name: "توانبخشی ورزشی چه آسیب‌هایی را پوشش می‌دهد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "توانبخشی ورزشی شامل آسیب‌های شانه (پارگی روتاتور کاف، دررفتگی، تاندونیت)، آرنج (تنیس البو، گلف البو)، لگن (بورسیت، سندرم ITBS)، زانو (پارگی ACL، آسیب منیسک، تاندونیت)، مچ پا (پیچ خوردگی، پارگی رباط، التهاب آشیل) و بسیاری از آسیب‌های ورزشی دیگر است.",
      },
    },
    {
      "@type": "Question",
      name: "چگونه از آسیب مجدد پس از بازگشت به ورزش پیشگیری می‌کنیم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "پیشگیری از آسیب مجدد با آموزش تکنیک‌های صحیح حرکتی، تقویت عضلات stabilizer، بهبود الگوهای حرکتی، افزایش تدریجی بار تمرینی و انجام تست‌های عملکردی قبل از بازگشت کامل به ورزش انجام می‌شود. این رویکرد علمی، خطر بازگشت آسیب را به میزان قابل توجهی کاهش می‌دهد.",
      },
    },
    {
      "@type": "Question",
      name: "آیا برای ورزشکاران حرفه‌ای برنامه‌ی اختصاصی دارید؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، برای ورزشکاران حرفه‌ای برنامه‌ی توانبخشی اختصاصی متناسب با رشته‌ی ورزشی، سطح رقابتی و تقویم مسابقات طراحی می‌شود. این برنامه‌ها با هماهنگی تیم پزشکی، مربی و فیزیوتراپیست اجرا می‌شوند تا ورزشکار در کوتاه‌ترین زمان ممکن با ایمنی کامل به میدان بازگردد.",
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
