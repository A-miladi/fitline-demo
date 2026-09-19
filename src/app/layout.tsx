import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://fitlineclinic.com";
const siteName = "کلینیک راه تناسب";
const siteTitle = "راه تناسب | مرکز تخصصی حرکات اصلاحی و توانبخشی ورزشی";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description:
    "مرکز تخصصی حرکات اصلاحی، آسیب‌شناسی ورزشی و توانبخشی در تهران. اصلاح ناهنجاری‌های اسکلتی-عضلانی، درمان دردهای مزمن، توانبخشی ورزشی، تیپینگ و ماساژ درمانی و ورزش سالمندان با متخصصین دارای مدرک معتبر.",
  keywords: [
    "حرکات اصلاحی",
    "مرکز حرکات اصلاحی",
    "توانبخشی ورزشی",
    "آسیب شناسی ورزشی",
    "اصلاح ناهنجاری اسکلتی عضلانی",
    "درمان کف پای صاف",
    "درمان زانوی پرانتزی",
    "زانوی ضربدری",
    "لوردوز",
    "کایفوز",
    "اسکولیوز",
    "سر به جلو",
    "تورتیکولی",
    "سندروم متقاطع",
    "درمان کمردرد",
    "گردن درد",
    "درمان دردهای اسکلتی عضلانی",
    "تیپینگ",
    "ماساژ درمانی",
    "ماساژ ورزشی",
    "ورزش سالمندان",
    "فیزیوتراپی ورزشی",
    "راه تناسب",
    "کلینیک",
    "آسیب",
    "دیسک",
    "fitline",
    "fitlineclinic",
    "clinic",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "سلامت و تندرستی",
  applicationName: siteName,
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon/logo192.png", sizes: "192x192" }],
    shortcut: ["/icon/favicon.ico"],
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
    description:
      "مرکز تخصصی حرکات اصلاحی و توانبخشی ورزشی — اصلاح ناهنجاری‌های اسکلتی-عضلانی با متخصصین مجرب و متدهای نوین.",
    images: [
      {
        url: "/icon/logo512.png",
        width: 512,
        height: 512,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "مرکز تخصصی حرکات اصلاحی و توانبخشی ورزشی — اصلاح ناهنجاری‌های اسکلتی-عضلانی.",
    images: ["/icon/logo512.png"],
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
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon/logo512.png`,
  image: `${siteUrl}/icon/logo512.png`,
  description:
    "مرکز تخصصی حرکات اصلاحی، توانبخشی ورزشی و درمان دردهای اسکلتی-عضلانی.",
  medicalSpecialty: ["Physiotherapy", "PhysicalTherapy"],
  areaServed: {
    "@type": "Country",
    name: "Iran",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressLocality: "تهران",
  },
  sameAs: [
    // "https://instagram.com/rahtanasob",
    // "https://t.me/rahtanasob",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "fa-IR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
      </head>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
