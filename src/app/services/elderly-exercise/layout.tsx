import { ReactNode } from "react";
import type { Metadata } from "next";
import { serviceKeywords, longTailKeywords } from "@/app/keywords";

const siteUrl = "https://fitlineclinic.com";
const pagePath = "/services/elderly-exercise";
const pageUrl = `${siteUrl}${pagePath}`;

const title = "ورزش سالمندان";
const description =
  "برنامه‌های تخصصی ورزش سالمندان برای بهبود تعادل، پیشگیری از زمین‌خوردن، افزایش قدرت عضلانی، حفظ دامنه حرکتی مفاصل و بهبود کیفیت زندگی در دوران سالمندی، زیر نظر متخصصین مجرب کلینیک راه تناسب.";

export const metadata: Metadata = {
  title,
  description,

  keywords: [
    ...serviceKeywords.elderly,
    ...longTailKeywords.filter((k) =>
      /سالمند|سالمندان|تعادل|زمین خوردن|پوکی استخوان|ورزش/.test(k),
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
        url: "/og/og-elderly-exercise.jpg",
        width: 1200,
        height: 630,
        alt: "ورزش سالمندان در کلینیک راه تناسب",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | کلینیک راه تناسب`,
    description,
    images: ["/og/og-elderly-exercise.jpg"],
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
  name: "ورزش سالمندان",
  alternateName: "Elderly Exercise",
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
    "GeriatricMedicine",
    "Rehabilitation",
  ],
  areaServed: {
    "@type": "City",
    name: "اراک",
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 60,
    audienceType: "سالمندان",
  },
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "بهبود تعادل و پیشگیری از زمین‌خوردن",
    },
    {
      "@type": "MedicalProcedure",
      name: "افزایش قدرت و استقامت عضلانی",
    },
    {
      "@type": "MedicalProcedure",
      name: "حفظ دامنه حرکتی مفاصل و انعطاف‌پذیری",
    },
    {
      "@type": "MedicalProcedure",
      name: "کاهش دردهای مفصلی و عضلانی",
    },
    {
      "@type": "MedicalProcedure",
      name: "بهبود عملکرد قلبی-عروقی و تنفسی",
    },
    {
      "@type": "MedicalProcedure",
      name: "تمرینات شناختی-حرکتی",
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
      name: "ورزش سالمندان",
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
      name: "ورزش سالمندان از چه سنی شروع می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "به طور معمول از ۶۰ سالگی به بعد توصیه می‌شود، اما این بستگی به وضعیت جسمانی، سابقه پزشکی و سطح فعالیت فرد دارد. برخی سالمندان از سنین پایین‌تر نیز می‌توانند از این برنامه‌ها بهره‌مند شوند. ارزیابی اولیه توسط متخصص، نقطه شروع درست است.",
      },
    },
    {
      "@type": "Question",
      name: "آیا ورزش سالمندان برای افراد دارای بیماری زمینه‌ای مناسب است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، اما برنامه باید با در نظر گرفتن بیماری زمینه‌ای مثل دیابت، فشار خون، بیماری قلبی یا آرتروز طراحی شود. در این موارد، هماهنگی با پزشک معالج و ارائه‌ی برنامه‌ی ملایم و ایمن توسط متخصص ضروری است.",
      },
    },
    {
      "@type": "Question",
      name: "چه مدت زمانی طول می‌کشد تا تأثیر ورزش سالمندان دیده شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بهبود تعادل و قدرت عضلانی معمولاً پس از ۴ تا ۸ هفته تمرین منظم قابل مشاهده است. برای نتایج پایدار، ادامه‌ی تمرینات در بلندمدت توصیه می‌شود. دوره‌های ما معمولاً بین ۸ تا ۱۲ جلسه است.",
      },
    },
    {
      "@type": "Question",
      name: "آیا ورزش سالمندان به پیشگیری از زمین‌خوردن کمک می‌کند؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله، تمرینات تعادلی و قدرتی به طور مستقیم خطر زمین‌خوردن و شکستگی را کاهش می‌دهند. این تمرینات با تقویت عضلات پا، بهبود حس عمقی و افزایش واکنش‌های حرکتی، پایداری بدن را در سالمندان بهبود می‌بخشند.",
      },
    },
    {
      "@type": "Question",
      name: "آیا برای شرکت در کلاس‌های ورزش سالمندان نیاز به تجهیزات خاصی است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "خیر، تمرینات با وزن بدن، توپ، کش و صندلی قابل اجرا هستند. تنها توصیه‌ی ما پوشیدن لباس راحت و کفش مناسب ورزشی است. سایر تجهیزات در محل کلینیک موجود است.",
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
