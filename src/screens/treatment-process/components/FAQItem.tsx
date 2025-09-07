"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
        <span className="ml-2">📋</span>
        {question}
      </h3>
      <p className="text-gray-600 border-t pt-3 border-gray-100 mt-3">
        {answer}
      </p>
    </motion.div>
  );
};

export default FAQItem;
