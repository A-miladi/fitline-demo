import { ReactNode } from "react";
import type { Metadata } from "next";
import {
  primaryKeywords,
  brandKeywords,
  locationKeywords,
  longTailKeywords,
} from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/appointment";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "ثبت نوبت";
const description =
  "ثبت نوبت آنلاین ارزیابی و مشاوره در کلینیک راه تناسب. دریافت نوبت حرکات اصلاحی، توانبخشی ورزشی، درمان دردهای اسکلتی-عضلانی، تیپینگ و ماساژ و ورزش سالمندان با متخصصین مجرب. مشاوره اولیه رایگان.";

export const metadata: Metadata = {
  title,
  description,

  keywords: Array.from(
    new Set([
      "ثبت نوبت",
      "نوبت دهی آنلاین",
      "رزرو نوبت",
      "نوبت حرکات اصلاحی",
      "نوبت توانبخشی ورزشی",
      "نوبت ماساژ درمانی",
      "مشاوره رایگان حرکات اصلاحی",
      "نوبت دهی کلینیک",
      ...primaryKeywords,
      ...brandKeywords,
      ...locationKeywords,
      ...longTailKeywords.filter((k) =>
        /نوبت|مشاوره|کلینیک|مرکز|بهترین/.test(k),
      ),
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
        url: "/og/og-appointment.jpg",
        width: 1200,
        height: 630,
        alt: "ثبت نوبت در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-appointment.jpg"],
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

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}/#webpage`,
  url: pageUrl,
  name: "ثبت نوبت در کلینیک راه تناسب",
  description,
  inLanguage: "fa-IR",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "کلینیک راه تناسب",
    url: siteUrl,
  },
  about: {
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#organization`,
    name: "کلینیک راه تناسب",
  },
  potentialAction: {
    "@type": "ReserveAction",
    name: "رزرو نوبت آنلاین",
    target: {
      "@type": "EntryPoint",
      urlTemplate: pageUrl,
      inLanguage: "fa-IR",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "نوبت ارزیابی و مشاوره",
    },
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ثبت نوبت و مشاوره تخصصی",
  description:
    "سرویس نوبت‌دهی آنلاین برای دریافت مشاوره و ارزیابی تخصصی در کلینیک راه تناسب",
  provider: {
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#organization`,
    name: "کلینیک راه تناسب",
    url: siteUrl,
    telephone: "YOUR_PHONE_NUMBER",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IR",
      addressLocality: "اراک",
      streetAddress: "چهارراه دکتر حسابی، انتهای کوچه اردیبهشت، نبش کوچه تربیت",
    },
  },
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: pageUrl,
    servicePhone: "YOUR_PHONE_NUMBER",
    availableLanguage: ["fa", "Persian"],
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IRR",
    description: "مشاوره اولیه رایگان",
    availability: "https://schema.org/InStock",
    url: pageUrl,
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
      name: "ثبت نوبت",
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
      name: "چگونه می‌توانم در کلینیک راه تناسب نوبت بگیرم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برای دریافت نوبت، فرم آنلاین این صفحه را پر کنید و اطلاعات خود را وارد نمایید. کارشناسان ما حداکثر تا ۲۴ ساعت آینده با شما تماس گرفته و وقت ارزیابی را نهایی می‌کنند. همچنین می‌توانید با شماره‌های تماس درج شده در همین صفحه تماس بگیرید.",
      },
    },
    {
      "@type": "Question",
      name: "آیا مشاوره اولیه رایگان است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، مشاوره اولیه در کلینیک راه تناسب رایگان است. در این جلسه، متخصص وضعیت شما را ارزیابی کرده و در صورت نیاز، برنامه‌ی درمانی مناسب را پیشنهاد می‌دهد.",
      },
    },
    {
      "@type": "Question",
      name: "چه مدت بعد از ثبت درخواست، با من تماس گرفته می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "کارشناسان ما حداکثر تا ۲۴ ساعت پس از ثبت درخواست با شما تماس می‌گیرند. در ساعات کاری (۸ تا ۱۳ و ۱۵ تا ۲۰) معمولاً تماس در همان روز انجام می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "آیا می‌توانم پزشک یا متخصص مورد نظرم را انتخاب کنم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، در فرم ثبت نوبت، امکان انتخاب پزشک یا متخصص مورد نظر وجود دارد. در صورت نداشتن انتخاب خاص، متخصص مناسب بر اساس نوع مشکل شما تعیین می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "آیا امکان تغییر یا لغو نوبت وجود دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، در صورت نیاز به تغییر یا لغو نوبت، لطفاً حداقل ۱۲ ساعت قبل از وقت مقرر با شماره‌های تماس درج شده در سایت تماس بگیرید تا نوبت شما بازآرایی شود.",
      },
    },
    {
      "@type": "Question",
      name: "چه اطلاعاتی برای ثبت نوبت لازم است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برای ثبت نوبت، نام و نام خانوادگی، شماره تماس معتبر، انتخاب پزشک و توضیح مختصر مشکل خود را وارد کنید. همچنین می‌توانید تاریخ و ساعت مورد نظر خود را از تقویم انتخاب کنید.",
      },
    },
    {
      "@type": "Question",
      name: "آیا حضور همراه در جلسه ارزیابی مجاز است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، در صورت تمایل می‌توانید یک همراه داشته باشید. برای افراد زیر ۱۸ سال، حضور والدین یا سرپرست توصیه می‌شود.",
      },
    },
  ],
};

function AppointmentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd),
        }}
      />
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

export default AppointmentLayout;
