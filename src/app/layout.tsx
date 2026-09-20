import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  brandKeywords,
  locationKeywords,
  longTailKeywords,
  benefitKeywords,
  audienceKeywords,
  serviceKeywords,
  primaryKeywords,
} from "./keywords";

const siteUrl = "https://fitlineclinic.com";
const siteName = "کلینیک راه تناسب";
const siteTitle = "کلینیک راه تناسب | حرکات اصلاحی و توانبخشی ورزشی در تهران";
const siteDescription =
  "کلینیک تخصصی حرکات اصلاحی و توانبخشی ورزشی در تهران. اصلاح ناهنجاری‌های اسکلتی-عضلانی مثل کف پای صاف، زانوی پرانتزی و ضربدری، لوردوز، کایفوز و اسکولیوز، درمان دردهای مزمن ستون فقرات و مفاصل، توانبخشی آسیب‌های ورزشی، تیپینگ و ماساژ درمانی و ورزش سالمندان با متخصصین دارای مدرک معتبر.";

const allKeywordsList = Array.from(
  new Set([
    ...primaryKeywords,
    ...brandKeywords,
    ...locationKeywords,
    ...longTailKeywords,
    ...benefitKeywords,
    ...audienceKeywords,
    ...Object.values(serviceKeywords).flat(),
  ]),
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: allKeywordsList,

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "سلامت، تندرستی و توانبخشی",
  applicationName: siteName,
  generator: "Next.js",

  manifest: "/manifest.json",

  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon/logo192.png", sizes: "192x192" }],
    shortcut: ["/favicon.ico"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteName,
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} — حرکات اصلاحی و توانبخشی ورزشی`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og/og-image.jpg"],
    // site: "@rahtanasob",
    // creator: "@rahtanasob",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // yandex: "...",
    // other: { "msvalidate.01": "..." },
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-tap-highlight": "no",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  viewportFit: "cover",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalClinic", "Physiotherapy"],
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: ["راه تناسب", "Rahtanasob", "Fitline Clinic"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon/logo512.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og/og-image.jpg`,
  description: siteDescription,
  medicalSpecialty: [
    "Physiotherapy",
    "PhysicalTherapy",
    "SportsMedicine",
    "Rehabilitation",
  ],
  priceRange: "$$",
  currenciesAccepted: "IRR",
  paymentAccepted: "Cash, Credit Card, Online Payment",
  areaServed: {
    "@type": "Country",
    name: "Iran",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressLocality: "تهران",
    addressRegion: "تهران",
    streetAddress: "YOUR_STREET_ADDRESS",
    postalCode: "YOUR_POSTAL_CODE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "YOUR_LATITUDE",
    longitude: "YOUR_LONGITUDE",
  },
  telephone: "YOUR_PHONE_NUMBER",
  email: "YOUR_EMAIL",
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
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    // "https://instagram.com/rahtanasob",
    // "https://t.me/rahtanasob",
    // "https://www.aparat.com/rahtanasob",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات کلینیک راه تناسب",
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
          name: "تیپینگ و ماساژ",
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
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "Rahtanasob",
  url: siteUrl,
  inLanguage: "fa-IR",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#localbusiness`,
  name: siteName,
  image: `${siteUrl}/og/og-image.jpg`,
  url: siteUrl,
  telephone: "YOUR_PHONE_NUMBER",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressLocality: "تهران",
    streetAddress: "YOUR_STREET_ADDRESS",
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
      opens: "09:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
