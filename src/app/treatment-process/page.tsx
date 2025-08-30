"use client";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StepData {
  number: string;
  title: string;
  description: string;
}

interface DetailData {
  step: string;
  title: string;
  details: string[];
  time: string;
}

interface FAQData {
  question: string;
  answer: string;
}

interface AnimatedStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

interface DetailSectionProps {
  step: string;
  title: string;
  details: string[];
  time: string;
  index: number;
}

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
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

const TreatmentProcessPage: React.FC = () => {
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

  const faqData: FAQData[] = [
    {
      question: "چه مدارکی برای اولین جلسه نیاز است؟",
      answer:
        "بهتر است مدارک پزشکی مرتبط، نتایج آزمایشات و تصویربرداری‌های قبلی (در صورت وجود) را همراه داشته باشید.",
    },
    {
      question: "هر جلسه درمانی چقدر زمان می‌برد؟",
      answer:
        "جلسات بین ۴۵ تا ۹۰ دقیقه بسته به نوع خدمت و مرحله درمان متفاوت است.",
    },
    {
      question: "هر چند وقت یکبار نیاز به ارزیابی مجدد است؟",
      answer:
        "معمولاً هر ۴-۶ هفته یکبار بر اساس پیشرفت و نوع ناهنجاری نیاز به ارزیابی مجدد است.",
    },
    {
      question: "آیا بیمه هزینه‌ها را پرداخت می‌کند؟",
      answer:
        "بسته به نوع بیمه و پوشش آن متفاوت است. بهتر است با شرکت بیمه خود مشورت کنید.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
      dir="rtl"
    >
      <Navbar />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 font-morabba">
              فرآیند درمان در مرکز راه تناسب
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              آشنایی با مراحل کامل دریافت خدمات تخصصی حرکات اصلاحی از ابتدا تا
              انتها
            </p>

            <div className="flex justify-center gap-4">
              <Link href="/appointment">
                <button className="bg-gradient-to-r h-12 from-primary to-secondary text-white px-8 flex items-center justify-center rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  رزرو نوبت ارزیابی
                </button>
              </Link>
              <Link href="/about">
                <button className="border-2 border-primary h-12 text-primary px-8 rounded-lg flex items-center justify-center font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                  درباره مرکز ما
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
            {/* خط اتصال با انیمیشن */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full z-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              ></motion.div>
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

      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-morabba">
              سوالات متداول
            </h2>
            <p className="text-gray-600">
              پاسخ به پرسش‌های رایج درباره فرآیند درمان
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-48 -translate-x-48"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-white mb-6 font-morabba"
          >
            آماده شروع فرآیند درمان هستید؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/90 mb-10 text-xl"
          >
            همین امروز اولین قدم را بردارید و نوبت ارزیابی اولیه خود را رزرو
            کنید
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/appointment">
              <button className="bg-white text-primary w-full h-14 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                رزرو نوبت ارزیابی
              </button>
            </Link>
            <Link href="/consultation">
              <button className="border-2 border-white text-white w-full h-14 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors duration-300 text-lg">
                درخواست مشاوره
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentProcessPage;
