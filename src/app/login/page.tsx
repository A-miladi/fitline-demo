"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import LogoSection from "./LogoSection";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function LoginPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <BackgroundEffects />

      <div
        dir="rtl"
        className="relative z-10 min-h-screen flex items-center justify-center p-4"
      >
        <div className="w-full h-full flex items-center justify-center flex-col max-w-lg">
          <LogoSection />

          <div className="backdrop-blur-xl flex flex-col w-full h-full bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 transition-colors duration-300">
            {isLoginMode ? (
              <LoginForm toggleMode={toggleMode} isLoading={false} />
            ) : (
              <RegisterForm toggleMode={toggleMode} isLoading={false} />
            )}
          </div>

          <motion.div
            className="text-center mt-4 md:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <button
              onClick={() => window.history.back()}
              className="text-blue-200 hover:text-white transition-colors text-sm font-iransans"
            >
              ← بازگشت به صفحه اصلی
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
