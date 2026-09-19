// components/admin/AdminLoginForm.tsx
"use client";

import Button from "@/components/ui/Button";
import { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaArrowLeft,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

interface AdminLoginFormProps {
  username: string;
  password: string;
  error: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AdminLoginForm({
  username,
  password,
  error,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: AdminLoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#583f99] to-[#32bcce] text-white transition-transform group-hover:scale-105">
              <FaCalendarAlt className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold text-gray-900">راه تناسب</span>
          </Link>

          {/* Back to Site Button */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-[#583f99] hover:bg-[#583f99]/5 hover:text-[#583f99] hover:shadow-md"
          >
            <FaArrowLeft className="h-4 w-4" />
            بازگشت به سایت
          </Link>
        </div>
      </nav>

      {/* Main Card */}
      <div className="relative w-full max-w-md animate-fade-in-up overflow-hidden lg:rounded-3xl lg:border border-white/20 lg:bg-white/80 lg:shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
        {/* Card Header with Gradient */}
        <div className="relative bg-gradient-to-r from-[#583f99] via-[#5b46a7] to-[#32bcce] px-8 pb-10 pt-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_60%)]" />

          {/* Logo/Icon */}
          <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <FaShieldAlt className="h-10 w-10 text-white" />
          </div>

          <div className="relative text-center text-white">
            <h2 className="text-2xl font-bold">پنل مدیریت</h2>
            <p className="mt-1 text-sm text-white/70">راه تناسب</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 pb-8 pt-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">خوش آمدید</h3>
            <p className="mt-1 text-sm text-gray-500">
              برای دسترسی به پنل مدیریت وارد شوید
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                نام کاربری
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  value={username}
                  onChange={(e) => onUsernameChange(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pr-10 pl-4 text-right outline-none transition-all focus:border-[#583f99] focus:bg-white focus:ring-2 focus:ring-[#583f99]/20"
                  placeholder="نام کاربری خود را وارد کنید"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pr-10 pl-12 text-right outline-none transition-all focus:border-[#583f99] focus:bg-white focus:ring-2 focus:ring-[#583f99]/20"
                  placeholder="••••••••"
                  dir="rtl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-colors hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="text-xs font-bold">!</span>
                </div>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#583f99] to-[#5b46a7] py-3.5 text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            >
              <div className="flex items-center justify-center gap-2">
                <FaSignInAlt className="h-5 w-5" />
                ورود به پنل مدیریت
              </div>
            </Button>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                این بخش فقط برای مدیران سیستم قابل دسترسی است
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
