"use client";

import Link from "next/link";
import { FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

export default function AdminLoginNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#583f99] to-[#32bcce] text-white transition-transform group-hover:scale-105">
            <FaCalendarAlt className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-gray-900">راه تناسب</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#583f99] hover:bg-[#583f99]/5 hover:text-[#583f99] hover:shadow-md"
        >
          <FaArrowLeft className="h-4 w-4" />
          بازگشت به سایت
        </Link>
      </div>
    </nav>
  );
}
