"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import MASSAGE from "../../public/images/massage.png";
import VECTOR1 from "../../public/images/sport1.png";
import VECTOR2 from "../../public/images/sport2.png";
import OTHERS from "../../public/images/others.png";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
  delay: number;
}
interface StatItemProps {
  number: string;
  text: string;
  delay: number;
}
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

// کامپوننت انیمیشنی برای کارت‌های خدمات
const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
  delay,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      whileHover={{ y: -10 }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Image
          src={icon}
          alt=""
          className="w-11 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link}>
        <button className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center justify-center mx-auto">
          مشاهده جزئیات
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Link>
    </motion.div>
  );
};

const StatItem: FC<StatItemProps> = ({ number, text, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay }}
      className="text-center text-white"
    >
      <motion.div
        className="text-4xl font-bold mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: delay + 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        {number}
      </motion.div>
      <div className="text-white/90">{text}</div>
    </motion.div>
  );
};

const ProcessStep: FC<ProcessStepProps> = ({
  number,
  title,
  description,
  delay,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative mb-5">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {number}
        </motion.div>
      </div>
      <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.h1
              className="text-3xl font-extrabold text-gray-900 mb-6 font-morabba"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              مرکز تندرستی و
              <span className="gradient-text"> حرکات اصلاحی راه تناسب</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              پیشگیری بهتر از درمان است. با تخصص و تجربه ما، ناهنجاری‌های
              اسکلتی-عضلانی را قبل از تبدیل شدن به مشکل جدی، شناسایی و اصلاح
              کنید.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-2 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link href="/appointment">
                <motion.button
                  className="bg-primary text-white w-full px-2 md:min-w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  دریافت نوبت ارزیابی
                </motion.button>
              </Link>
              <Link href="/consultation">
                <motion.button
                  className="border-2 border-primary text-primary w-full md:w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  مشاوره رایگان
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                خدمات تخصصی ما
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                با استفاده از رویکردها و متدهای نوین در شناسایی و اصلاح
                ناهنجاری‌های اسکلتی-عضلانی
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={VECTOR2}
              title="حرکات اصلاحی"
              description="اصلاح ناهنجاری‌هایی مانند کف پای صاف و گود، زانوی پرانتزی و ضربدری، ناهنجاری‌های ستون فقرات"
              link="/services/corrective-exercises"
              delay={0.1}
            />
            <ServiceCard
              icon={VECTOR1}
              title="توانبخشی ورزشی"
              description="بازگشت به ورزش پس از آسیب‌های شانه، آرنج، لگن، زانو و مچ پا تحت نظر متخصصین"
              link="/services/sports-rehabilitation"
              delay={0.2}
            />
            <ServiceCard
              icon={MASSAGE}
              title="درمان دردها"
              description="درمان دردهای اسکلتی-عضلانی با تجویز و ارجاع پزشک متخصص"
              link="/services/pain-treatment"
              delay={0.3}
            />
            <ServiceCard
              icon={OTHERS}
              title="تیپینگ و ماساژ"
              description="خدمات تخصصی تیپینگ و ماساژ برای بهبود و توانبخشی سریع‌تر"
              link="/services/taping-massage"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                چرا مرکز راه تناسب؟
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                تیمی متشکل از متخصصین مجرب حرکات اصلاحی با مدرک معتبر و تجربه
                علمی
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  تخصص معتبر
                </h3>
                <p className="text-gray-600">
                  متخصصین دارای حداقل مدرک کارشناسی ارشد حرکات اصلاحی و آسیب
                  شناسی ورزشی
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  رویکرد علمی
                </h3>
                <p className="text-gray-600">
                  استفاده از متدهای نوین و علمی بر اساس آخرین تحقیقات روز دنیا
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  پیشگیری محور
                </h3>
                <p className="text-gray-600">
                  شناسایی و اصلاح ناهنجاری‌ها قبل از تبدیل شدن به مشکلات جدی و
                  نیاز به درمان‌های پیچیده
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <StatItem number="۱۰۰۰+" text="ناهنجاری اصلاح شده" delay={0} />
            <StatItem number="۹۸٪" text="رضایت مراجعین" delay={0.1} />
            <StatItem number="۱۵+" text="متخصص مجرب" delay={0.2} />
            <StatItem number="۰" text="مورد عوارض جدی" delay={0.3} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                فرآیند استفاده از خدمات
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative py-12">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <ProcessStep
                number="۱"
                title="نوبت گیری"
                description="دریافت نوبت اولیه برای ارزیابی تخصصی"
                delay={0}
              />
              <ProcessStep
                number="۲"
                title="ارزیابی و معاینه"
                description="تشخیص دقیق ناهنجاری توسط متخصصین مجرب"
                delay={0.2}
              />
              <ProcessStep
                number="۳"
                title="ارائه برنامه تمرینی"
                description="دریافت برنامه تمرینی شخصی‌سازی شده"
                delay={0.4}
              />
              <ProcessStep
                number="۴"
                title="پیگیری و ارزیابی مجدد"
                description="بررسی روند بهبود و تنظیم برنامه درمانی"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              زمان طلایی اصلاح ناهنجاری را از دست ندهید!
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-600 mb-8 text-lg">
              با شناسایی به موقع و انجام تمرینات تخصصی، از درمان‌های پیچیده و
              جراحی پیشگیری کنید
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/appointment">
                <motion.button
                  className="bg-primary text-white w-full px-2 md:min-w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  دریافت نوبت ارزیابی
                </motion.button>
              </Link>
              <Link href="/consultation">
                <motion.button
                  className="border-2 border-primary text-primary w-full md:w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  مشاوره رایگان
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
