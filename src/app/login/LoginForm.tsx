"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginFormProps {
  toggleMode: () => void;
  isLoading: boolean;
}

type Step = "email" | "code";

export default function LoginForm({ toggleMode }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("email");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setInfo(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        "http://localhost:4123/auth/register-user-send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setStep("code");
        setInfo("کد به ایمیل شما ارسال شد.");
      } else {
        setServerError(data.message || "خطا در ارسال ایمیل");
      }
    } catch (err) {
      setServerError("خطایی رخ داده است. دوباره تلاش کنید.");
    }
    setIsLoading(false);
  };

  // 2. تایید کد
  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setInfo(null);
    setIsLoading(true);

    try {
      const res = await fetch(
        "http://localhost:4123/auth/register-user-step-Two",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: +code }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setInfo("ورود موفقیت آمیز بود!");
        localStorage.setItem("token", data.data.token);
        window.location.reload();
      } else {
        setServerError(data.message || "کد اشتباه است");
      }
    } catch (err) {
      setServerError("خطایی رخ داده است. دوباره تلاش کنید.");
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4123/auth/google/login";
  };

  const resendCode = async () => {
    setServerError(null);
    setInfo(null);
    setIsLoading(true);
    try {
      const res = await fetch(
        "http://localhost:4123/auth/register-user-send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setInfo("کد جدید به ایمیل شما ارسال شد.");
      } else {
        setServerError(data.message || "خطا در ارسال مجدد کد");
      }
    } catch (err) {
      setServerError("خطایی رخ داده است.");
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 font-morabba">
          ورود/ثبت‌نام با ایمیل
        </h2>
        <p className="text-blue-200 text-xs md:text-sm">
          {step === "email"
            ? "ایمیل خود را وارد کنید"
            : "کد ارسال شده به ایمیل را وارد کنید"}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={step === "email" ? handleEmailSubmit : handleCodeSubmit}
        className="space-y-6"
      >
        <AnimatePresence mode="wait">
          {step === "email" ? (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-100 font-iransans"
              >
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
                autoFocus
                autoComplete="username"
                disabled={isLoading}
              />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <label
                htmlFor="code"
                className="block text-sm font-medium text-blue-100 font-iransans"
              >
                کد تأیید
              </label>
              <input
                type="text"
                id="code"
                inputMode="numeric"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                required
                pattern="\d+"
                maxLength={6}
                autoFocus
                placeholder="کد ۶ رقمی"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
                autoComplete="one-time-code"
                disabled={isLoading}
              />
              <button
                type="button"
                className="text-xs text-blue-200 underline mt-1"
                onClick={resendCode}
                disabled={isLoading}
              >
                ارسال مجدد کد
              </button>
              <div className="text-xs text-blue-100 mt-2 text-left">
                ایمیل:{" "}
                <span dir="ltr" className="font-mono">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setStep("email");
                    setCode("");
                  }}
                  className="ml-2 text-pink-200 underline"
                >
                  تغییر ایمیل
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error & Info messages */}
        {serverError && (
          <div className="text-red-300 font-iransans text-sm">
            {serverError}
          </div>
        )}
        {info && (
          <div className="text-green-300 font-iransans text-sm">{info}</div>
        )}

        {/* Submit Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed font-morabba"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center"
                >
                  <motion.div
                    className="rounded-full h-5 w-5 border-b-2 border-white ml-2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                  {step === "email" ? "در حال ارسال..." : "در حال ورود..."}
                </motion.div>
              ) : (
                <motion.span
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {step === "email" ? "ارسال کد به ایمیل" : "ورود/تایید"}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </form>

      {/* Google OAuth Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 bg-white/10 border border-white/20 hover:bg-white/20 rounded-xl text-white font-bold transition-all duration-300 font-iransans"
        >
          ورود با گوگل
        </button>
      </div>
    </>
  );
}
