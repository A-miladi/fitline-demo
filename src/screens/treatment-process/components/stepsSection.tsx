"use client";
import { motion } from "framer-motion";
import AnimatedStep from "./AnimateStep";

interface StepData {
  number: string;
  title: string;
  description: string;
}

const StepsSection: React.FC = () => {
  const stepsData: StepData[] = [
    {
      number: "۱",
      title: "نوبت گیری",
      description:
        "دریافت نوبت اولیه برای ارزیابی تخصصی از طریق تماس تلفنی یا ثبت درخواست آنلاین",
    },
    {
      number: "۲",
      title: "ارزیابی و معاینه",
      description:
        "بررسی دقیق وضعیت بدنی، تشخیص ناهنجاری‌ها و تعیین علل اصلی مشکلات توسط متخصص",
    },
    {
      number: "۳",
      title: "ارائه نسخه تمرینی",
      description:
        "طراحی برنامه تمرینی شخصی‌سازی شده بر اساس نتایج ارزیابی و نیازهای خاص شما",
    },
    {
      number: "۴",
      title: "ارزیابی مجدد",
      description:
        "بررسی روند بهبود، تنظیم برنامه بر اساس پیشرفت و اطمینان از دستیابی به نتایج مطلوب",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-morabba">
            مراحل درمان
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            از اولین تماس تا بهبود کامل، همراه شما هستیم
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {stepsData.map((step, index) => (
              <AnimatedStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
                isLast={index === stepsData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
