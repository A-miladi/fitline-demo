import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "پنل مدیریت | راه تناسب" },
  description: "ورود مدیران مرکز راه تناسب",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/admin" },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
