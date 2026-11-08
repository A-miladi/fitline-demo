import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppUpdatePrompt from "@/components/AppUpdatePrompt";
import JsonLd from "@/components/seo/JsonLd";
import SiteFooter from "@/components/seo/SiteFooter";
import { CLINIC } from "@/constants/clinic";
import { createPageMetadata, SITE_URL, siteStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata("/"),
  metadataBase: new URL(SITE_URL),
  applicationName: CLINIC.name,
  authors: [{ name: CLINIC.name, url: SITE_URL }],
  creator: CLINIC.name,
  publisher: CLINIC.name,
  category: "سلامت و توانبخشی ورزشی",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon/logo192.png", sizes: "192x192" }],
  },
  appleWebApp: { capable: true, statusBarStyle: "default", title: CLINIC.name },
  formatDetection: { telephone: true, email: true, address: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#ffffff", width: "device-width", initialScale: 1,
  maximumScale: 5, userScalable: true, colorScheme: "light", viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <head>
        <link rel="preload" href="/fonts/Morabba/Morabba-ExtraBold.v1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <JsonLd data={siteStructuredData()} />
      </head>
      <body className="min-h-screen bg-white font-sans">
        {children}
        <SiteFooter />
        <AppUpdatePrompt />
      </body>
    </html>
  );
}
