import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل مدیریت | راه تناسب",
  description: "پنل مدیریت نوبت‌های مرکز راه تناسب",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
