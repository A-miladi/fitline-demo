"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RegisterFormProps {
  toggleMode: () => void;
  isLoading: boolean;
}

export default function RegisterForm({
  toggleMode,
  isLoading,
}: RegisterFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="text-center mb-4 md:mb-8">
        <h2 className="md:text-2xl text-xl font-bold text-white mb-2 font-morabba">
          ایجاد حساب کاربری
        </h2>
        <p className="text-blue-200 text-xs md:text-sm">
          فرم زیر را تکمیل کنید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex max-md:flex-col gap-4">
          <div className="space-y-2 w-full md:w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-blue-100 font-iransans"
            >
              نام
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 text-sm py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
                placeholder="نام خود را وارد کنید"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div className="space-y-2 w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-blue-100 font-iransans"
            >
              نام خانوادگی
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full text-sm px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

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
                  در حال ثبت‌نام...
                </motion.div>
              ) : (
                <motion.span
                  key="register"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ثبت‌نام
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
          قبلاً حساب کاربری دارید؟{" "}
          <button
            onClick={toggleMode}
            className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
          >
            وارد شوید
          </button>
        </p>
      </motion.div>
    </>
  );
}
