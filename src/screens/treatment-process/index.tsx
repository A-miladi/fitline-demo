"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import CTA from "./components/CTA";
import FAQSection from "./components/FAQSection";
import DetailsSection from "./components/DetailsSection";
import StepsSection from "./components/stepsSection";

const TreatmentProcess: React.FC = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100"
      dir="rtl"
    >
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 font-morabba">
              فرآیند درمان در مرکز راه تناسب
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              آشنایی با مراحل کامل دریافت خدمات تخصصی حرکات اصلاحی از ابتدا تا
              انتها
            </p>

            <div className="flex justify-center gap-4">
              <Link href="/appointment">
                <button className="bg-gradient-to-r h-12 from-primary to-secondary text-white px-8 flex items-center justify-center rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  رزرو نوبت ارزیابی
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-primary h-12 text-primary px-8 rounded-lg flex items-center justify-center font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                  درباره مرکز ما
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <StepsSection />
      <DetailsSection />
      <FAQSection />

      <CTA
        title="آماده شروع فرآیند درمان هستید؟"
        description="همین امروز اولین قدم را بردارید و نوبت ارزیابی اولیه خود را رزرو کنید"
        buttonText="رزرو نوبت ارزیابی"
        buttonLink="/appointment"
      />
    </div>
  );
};

export default TreatmentProcess;
