"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 2000);
  };

  // تعریف صحیح variants برای Framer Motion
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const bounceVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const waveVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(96, 165, 250, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-red-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-500/20 to-blue-500/15 rounded-full blur-2xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>

        <motion.div
          className="absolute top-2/3 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-500/15 to-orange-500/10 rounded-full blur-2xl"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        ></motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        ></motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          style={{ backgroundSize: "200% 200%" }}
        ></motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-cyan-500/8 via-transparent to-indigo-500/8"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          style={{ backgroundSize: "200% 200%" }}
        ></motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/4 right-10 w-2 h-2 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className="absolute top-3/4 left-10 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/2 left-20 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        ></motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>

        <motion.div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-morabba">
              FITLINE
            </h1>
            <p className="text-blue-200 text-sm">
              مرکز تخصصی فیزیوتراپی و توانبخشی
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 transition-colors duration-300">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2 font-morabba">
                ورود به سیستم
              </h2>
              <p className="text-blue-200 text-sm">اطلاعات خود را وارد کنید</p>
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
                  className="text-blue-300 hover:text-blue-200 transition-colors font-iransans"
                >
                  فراموشی رمز؟
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
                          className="rounded-full h-5 w-5 border-b-2 border-white mr-2"
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
              className="my-6 flex items-center"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <div className="flex-1 border-t border-white/20"></div>
              <span className="px-4 text-blue-200 text-sm font-iransans">
                یا
              </span>
              <div className="flex-1 border-t border-white/20"></div>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 font-iransans"
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ y: 0 }}
              >
                ورود با گوگل
              </motion.button>
              <motion.button
                className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 font-iransans"
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ y: 0 }}
              >
                ورود با اپل
              </motion.button>
            </motion.div>

            <motion.div
              className="text-center mt-6"
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              <p className="text-blue-200 text-sm font-iransans">
                حساب کاربری ندارید؟{" "}
                <motion.button
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ثبت نام کنید
                </motion.button>
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              onClick={() => router.push("/")}
              className="text-blue-200 hover:text-white transition-colors text-sm font-iransans"
              whileHover={{ x: -5 }}
              whileTap={{ x: 0 }}
            >
              ← بازگشت به صفحه اصلی
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
