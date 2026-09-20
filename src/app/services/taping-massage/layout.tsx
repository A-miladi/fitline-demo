import { ReactNode } from "react";
import type { Metadata } from "next";
import { serviceKeywords, longTailKeywords } from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services/taping-massage";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "تیپینگ و ماساژ درمانی";
const description =
  "خدمات تخصصی تیپینگ ورزشی و ماساژ درمانی شامل کینزیو تیپینگ، ماساژ ورزشی، ماساژ بافت عمقی و ریلکسیشن برای تسریع بهبود، کاهش درد و افزایش اثربخشی حرکات اصلاحی در کلینیک راه تناسب.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    ...serviceKeywords.taping,
    ...longTailKeywords.filter((k) =>
      /تیپینگ|ماساژ|نوارگذاری|ریلکسیشن|تنش عضلانی/.test(k),
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
        url: "/og/og-taping-massage.jpg",
        width: 1200,
        height: 630,
        alt: "تیپینگ و ماساژ درمانی در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-taping-massage.jpg"],
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
  name: "تیپینگ و ماساژ درمانی",
  alternateName: [
    "Kinesio Taping",
    "Sports Massage",
    "Therapeutic Massage",
    "Deep Tissue Massage",
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
    "MassageTherapy",
  ],
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "تیپینگ تخصصی برای اصلاح ناهنجاری",
    },
    {
      "@type": "MedicalProcedure",
      name: "کینزیو تیپینگ ورزشی",
    },
    {
      "@type": "MedicalProcedure",
      name: "ماساژ درمانی تخصصی",
    },
    {
      "@type": "MedicalProcedure",
      name: "ماساژ ورزشی و ریکاوری",
    },
    {
      "@type": "MedicalProcedure",
      name: "ماساژ بافت عمقی",
    },
    {
      "@type": "MedicalProcedure",
      name: "ماساژ ریلکسیشن و آرامش‌بخشی",
    },
    {
      "@type": "MedicalProcedure",
      name: "کاهش درد و تنش عضلانی",
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
      name: "تیپینگ و ماساژ درمانی",
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
      name: "تیپینگ چیست و چه کاربردی دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تیپینگ یا نوارگذاری، تکنیکی تخصصی است که با استفاده از نوارهای مخصوص الاستیک روی پوست اعمال می‌شود. این تکنیک به حمایت از مفاصل و عضلات، کاهش درد، بهبود گردش خون و لنف، اصلاح وضعیت بدن و تسریع روند بهبودی کمک می‌کند.",
      },
    },
    {
      "@type": "Question",
      name: "تفاوت تیپینگ ورزشی با تیپینگ اصلاحی چیست؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تیپینگ ورزشی بیشتر برای حمایت از عضلات و مفاصل در حین فعالیت ورزشی، پیشگیری از آسیب و بهبود عملکرد استفاده می‌شود. تیپینگ اصلاحی برای اصلاح ناهنجاری‌های وضعیتی، بهبود راستای بدن و کاهش فشار روی مفاصل به کار می‌رود.",
      },
    },
    {
      "@type": "Question",
      name: "ماساژ درمانی چه فوایدی دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ماساژ درمانی با بهبود گردش خون، کاهش تنش عضلانی، افزایش انعطاف‌پذیری، کاهش درد مزمن و بهبود ریکاوری پس از تمرین، نقش مهمی در تکمیل فرآیند درمان و بهبود کیفیت زندگی ایفا می‌کند.",
      },
    },
    {
      "@type": "Question",
      name: "آیا تیپینگ و ماساژ جایگزین حرکات اصلاحی هستند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خیر، تیپینگ و ماساژ به عنوان درمان‌های مکمل و تکمیلی در کنار برنامه اصلی حرکات اصلاحی ارائه می‌شوند و نه جایگزین آن. این خدمات به تسریع بهبودی و افزایش اثربخشی درمان اصلی کمک می‌کنند.",
      },
    },
    {
      "@type": "Question",
      name: "چند جلسه تیپینگ یا ماساژ برای نتیجه‌گیری لازم است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "مدت و تعداد جلسات بستگی به نوع مشکل، شدت علائم و پاسخ فرد به درمان دارد. به طور معمول دوره‌های تیپینگ و ماساژ درمانی بین ۶ تا ۱۰ جلسه پیشنهاد می‌شود و پیگیری منظم نقش مهمی در دستیابی به نتایج پایدار دارد.",
      },
    },
    {
      "@type": "Question",
      name: "آیا ماساژ درمانی برای همه افراد مناسب است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ماساژ درمانی برای اکثر افراد بی‌خطر است، اما در موارد خاص مانند بیماری‌های پوستی فعال، تب، ترومبوز، بیماری‌های قلبی خاص یا بارداری، نیاز به ارزیابی و تأیید پزشک متخصص است. ارزیابی اولیه توسط متخصص، بهترین راه تعیین مناسب بودن ماساژ برای شماست.",
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
