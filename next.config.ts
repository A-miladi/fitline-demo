// next.config.js
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  typescript: {
    ignoreBuildErrors: true, // خطاهای TypeScript را نادیده بگیر
  },
  eslint: {
    ignoreDuringBuilds: true, // خطاهای ESLint را نادیده بگیر
  },
  outputFileTracingRoot: __dirname,
  // برای رفع warning لاک فایل‌ها
});

module.exports = nextConfig;
