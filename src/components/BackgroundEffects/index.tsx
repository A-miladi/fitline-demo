"use client";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
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
  );
}
