import type { Metadata, Viewport } from "next";
import "./globals.css";
import I92 from "../../public/icon/logo192.png";

export const metadata: Metadata = {
  title: "راه تناسب - مرکز تندرستی و حرکات اصلاحی",
  description:
    "مرکز تخصصی حرکات اصلاحی و آسیب شناسی ورزشی - اصلاح ناهنجاری‌های اسکلتی عضلانی، توانبخشی ورزشی و خدمات تخصصی حرکات اصلاحی",
  manifest: "/manifest.json",
  icons: {
    apple: "../../public/icon/logo192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "راه تناسب",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d5aa0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="راه تناسب" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2d5aa0" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#2d5aa0" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        <link rel="apple-touch-icon" href="../../public/icon/logo192.png" />
        <link
          rel="apple-touch-startup-image"
          href="../../public/icon/logo192.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
