"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginFormProps {
  toggleMode: () => void;
  isLoading: boolean;
}

export default function LoginForm({ toggleMode, isLoading }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for login
  };

  return (
    <>
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 font-morabba">
          ورود به سیستم
        </h2>
        <p className="text-blue-200 text-xs md:text-sm">
          اطلاعات خود را وارد کنید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-blue-100 font-iransans"
          >
            ایمیل
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
              placeholder="example@email.com"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-blue-100 font-iransans"
          >
            رمز عبور
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
              placeholder="••••••••"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-blue-200 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400"
            />
            <span className="font-iransans">مرا به خاطر بسپار</span>
          </label>
          <button
            type="button"
            className="text-blue-300 hover:text-blue-200 text-xs font-iransans"
          >
            رمز عبور را فراموش کرده‌اید؟
          </button>
        </div>

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
                  در حال ورود...
                </motion.div>
              ) : (
                <motion.span
                  key="login"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ورود
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </form>

      <motion.div
        className="text-center mt-6"
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        <p className="text-blue-200 text-sm font-iransans">
          حساب کاربری ندارید؟{" "}
          <button
            onClick={toggleMode}
            className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
          >
            ثبت نام کنید
          </button>
        </p>
      </motion.div>
    </>
  );
}
