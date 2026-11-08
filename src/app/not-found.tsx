import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: { absolute: "صفحه پیدا نشد | راه تناسب" },
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-gray-50" dir="rtl">
      <Navbar />
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="mb-4 text-sm font-semibold text-primary">خطای ۴۰۴</p>
        <h1 className="mb-5 font-morabba text-3xl font-bold text-gray-900">صفحه موردنظر پیدا نشد</h1>
        <p className="mb-8 leading-8 text-gray-600">ممکن است آدرس تغییر کرده باشد. از صفحه اصلی یا فهرست خدمات مرکز راه تناسب ادامه دهید.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white">صفحه اصلی</Link>
          <Link href="/services" className="rounded-xl border border-primary px-6 py-3 font-semibold text-primary">خدمات مرکز</Link>
        </div>
      </main>
    </div>
  );
}
