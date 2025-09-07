"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface DetailSectionProps {
  step: string;
  title: string;
  details: string[];
  time: string;
  index: number;
}

const DetailSection: React.FC<DetailSectionProps> = ({
  step,
  title,
  details,
  time,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`grid md:grid-cols-2 gap-10 items-center ${
        !isEven ? "md:direction-rtl" : ""
      }`}
    >
      <div className={`${!isEven ? "md:order-2" : ""}`}>
        <div className="flex items-center mb-6 gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg mr-5">
            {step}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 font-morabba">
            {title}
          </h3>
        </div>

        <div className="space-y-4 text-gray-700 text-lg bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
          {details.map((item, i) => (
            <div key={i} className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 ml-3 flex-shrink-0"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 ${
          !isEven ? "md:order-1" : ""
        }`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-gray-900 mb-2 text-xl">
            زمان مورد نیاز
          </h4>
          <p className="text-primary font-bold text-2xl">{time}</p>
          <p className="text-gray-600 mt-3">
            این مرحله بر اساس نیازهای فردی شما ممکن است متفاوت باشد
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailSection;
