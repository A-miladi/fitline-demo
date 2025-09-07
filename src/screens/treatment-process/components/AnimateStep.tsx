"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

const AnimatedStep: React.FC<AnimatedStepProps> = ({
  number,
  title,
  description,
  index,
  isLast = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative mb-5">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
          {number}
        </div>
        {!isLast && (
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden md:block">
            <svg
              className="w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-xl mb-4 text-gray-800 relative">
        {title}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </h3>
      <p className="text-gray-600 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
};

export default AnimatedStep;
