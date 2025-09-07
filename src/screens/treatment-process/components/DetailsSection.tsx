"use client";
import { motion } from "framer-motion";
import DetailSection from "./DetailSection";

interface DetailData {
  step: string;
  title: string;
  details: string[];
  time: string;
}

const DetailsSection: React.FC = () => {
  const detailsData: DetailData[] = [
    {
      step: "۱",
      title: "نوبت گیری",
      details: [
        "تماس با مرکز یا ثبت درخواست آنلاین",
        "دریافت اطلاعات اولیه و تعیین زمان مراجعه",
        "ارسال راهنمایی‌های لازم قبل از اولین جلسه",
        "تعیین زمان تقریبی مورد نیاز برای ارزیابی",
      ],
      time: "حدود ۱۰ دقیقه",
    },
    {
      step: "۲",
      title: "ارزیابی و معاینه",
      details: [
        "بررسی تاریخچه پزشکی و وضعیت فعلی",
        "ارزیابی وضعیت بدنی و الگوهای حرکتی",
        "تست‌های عملکردی و دامنه حرکتی",
        "تشخیص ناهنجاری‌ها و علل اصلی",
        "تعیین اهداف درمانی",
      ],
      time: "۶۰-۹۰ دقیقه",
    },
    {
      step: "۳",
      title: "ارائه نسخه تمرینی",
      details: [
        "طراحی برنامه تمرینی شخصی‌سازی شده",
        "آموزش تمرینات و تکنیک‌های لازم",
        "تعیین تناوب و شدت تمرینات",
        "ارائه راهنمایی برای اجرای صحیح تمرینات",
        "تعیین جلسات پیگیری",
      ],
      time: "۴۵-۶۰ دقیقه",
    },
    {
      step: "۴",
      title: "ارزیابی مجدد",
      details: [
        "بررسی پیشرفت و تغییرات ایجاد شده",
        "ارزیابی پایبندی به برنامه تمرینی",
        "تنظیم برنامه بر اساس نتایج جدید",
        "تعیین اهداف مرحله بعدی",
        "ارائه بازخورد و راهنمایی‌های تکمیلی",
      ],
      time: "۳۰-۴۵ دقیقه",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-gray-900 mb-4 font-morabba"
          >
            جزئیات هر مرحله
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            آشنایی کامل با آنچه در هر مرحله از فرآیند درمان انتظار می‌رود
          </p>
        </div>

        <div className="space-y-28">
          {detailsData.map((detail, index) => (
            <DetailSection
              key={index}
              step={detail.step}
              title={detail.title}
              details={detail.details}
              time={detail.time}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
