import Navbar from "@/components/navbar";
import Link from "next/link";
import MASSAGE from "../../../public/images/massage.v1.webp";
import VECTOR1 from "../../../public/images/sport1.v1.webp";
import VECTOR2 from "../../../public/images/sport2.v1.webp";
import OTHERS from "../../../public/images/others.v1.webp";
import Image, { StaticImageData } from "next/image";

import { FC, ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode;
}

interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}
interface StatItemProps {
  number: string;
  text: string;
}
interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const SectionContent: FC<SectionContentProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300 motion-safe:hover:-translate-y-2 cursor-pointer group"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Image
          src={icon}
          alt=""
          width={44}
          height={44}
          sizes="44px"
          className="w-11 h-auto group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center justify-center mx-auto">
        
          مشاهده جزئیات
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        
      </Link>
    </div>
  );
};

const StatItem: FC<StatItemProps> = ({ number, text }) => {
  return (
    <div
      className="text-center text-white"
    >
      <div
        className="text-4xl font-bold mb-2"
      >
        {number}
      </div>
      <div className="text-white/90">{text}</div>
    </div>
  );
};

const ProcessStep: FC<ProcessStepProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div
      className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl motion-safe:hover:scale-105 transition-all duration-300 border border-gray-100 group"
    >
      <div className="relative mb-5">
        <div
          className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md"
        >
          {number}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className=" bg-gradient-to-br from-primary/20 via-white to-secondary/10 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="text-center"
          >
            <h1
              className="md:text-3xl text-xl font-extrabold text-gray-900 mb-6 font-morabba"
            >
              مرکز تندرستی و حرکات اصلاحی
              <span className="gradient-text"> راه تناسب</span>
            </h1>
            <p
              className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              پیشگیری بهتر از درمان است. با تخصص و تجربه ما، ناهنجاری‌های
              اسکلتی-عضلانی را قبل از تبدیل شدن به مشکل جدی، شناسایی و اصلاح
              کنید.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-2 justify-center"
            >
              <Link href="/appointment" className="bg-gradient-to-br from-primary to-secondary text-white w-full px-6 md:min-w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-lg">
                
                  دریافت نوبت ارزیابی
                
              </Link>
              <Link href="/services" className="group relative inline-flex items-center justify-center gap-2 w-full md:min-w-32 h-12 px-6 rounded-lg font-semibold text-lg text-primary border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer overflow-hidden">
                
                  <span className="relative z-10">خدمات ما</span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                خدمات تخصصی ما
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                با استفاده از رویکردها و متدهای نوین در شناسایی و اصلاح
                ناهنجاری‌های اسکلتی-عضلانی
              </p>
            </div>
          </SectionContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={VECTOR2}
              title="حرکات اصلاحی"
              description="اصلاح ناهنجاری‌هایی مانند کف پای صاف و گود، زانوی پرانتزی و ضربدری، ناهنجاری‌های ستون فقرات"
              link="/services/corrective-exercises"
            />
            <ServiceCard
              icon={VECTOR1}
              title="توانبخشی ورزشی"
              description="بازگشت به ورزش پس از آسیب‌های شانه، آرنج، لگن، زانو و مچ پا تحت نظر متخصصین"
              link="/services/sports-rehabilitation"
            />
            <ServiceCard
              icon={MASSAGE}
              title="درمان دردها"
              description="درمان دردهای اسکلتی-عضلانی با تجویز و ارجاع پزشک متخصص"
              link="/services/pain-treatment"
            />
            <ServiceCard
              icon={OTHERS}
              title="تیپینگ و ماساژ"
              description="خدمات تخصصی تیپینگ و ماساژ برای بهبود و توانبخشی سریع‌تر"
              link="/services/taping-massage"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                چرا مرکز راه تناسب؟
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                تیمی متشکل از متخصصین مجرب حرکات اصلاحی با مدرک معتبر و تجربه
                علمی
              </p>
            </div>
          </SectionContent>

          <div className="grid md:grid-cols-3 gap-8">
            <SectionContent >
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  تخصص معتبر
                </h3>
                <p className="text-gray-600">
                  متخصصین دارای حداقل مدرک کارشناسی ارشد حرکات اصلاحی و آسیب
                  شناسی ورزشی
                </p>
              </div>
            </SectionContent>

            <SectionContent >
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  رویکرد علمی
                </h3>
                <p className="text-gray-600">
                  استفاده از متدهای نوین و علمی بر اساس آخرین تحقیقات روز دنیا
                </p>
              </div>
            </SectionContent>

            <SectionContent >
              <div className="text-center">
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
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
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  پیشگیری محور
                </h3>
                <p className="text-gray-600">
                  شناسایی و اصلاح ناهنجاری‌ها قبل از تبدیل شدن به مشکلات جدی و
                  نیاز به درمان‌های پیچیده
                </p>
              </div>
            </SectionContent>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            <StatItem number="۱۰۰۰+" text="ناهنجاری اصلاح شده"  />
            <StatItem number="۹۸٪" text="رضایت مراجعین"  />
            <StatItem number="۱۵+" text="متخصص مجرب"  />
            <StatItem number="۰" text="مورد عوارض جدی"  />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <SectionContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                فرآیند استفاده از خدمات
              </h2>
            </div>
          </SectionContent>

          <div className="relative py-12">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full z-0">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <ProcessStep
                number="۱"
                title="نوبت گیری"
                description="دریافت نوبت اولیه برای ارزیابی تخصصی"
              />
              <ProcessStep
                number="۲"
                title="ارزیابی و معاینه"
                description="تشخیص دقیق ناهنجاری توسط متخصصین مجرب"
              />
              <ProcessStep
                number="۳"
                title="ارائه برنامه تمرینی"
                description="دریافت برنامه تمرینی شخصی‌سازی شده"
              />
              <ProcessStep
                number="۴"
                title="پیگیری و ارزیابی مجدد"
                description="بررسی روند بهبود و تنظیم برنامه درمانی"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionContent>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              زمان طلایی اصلاح ناهنجاری را از دست ندهید!
            </h2>
          </SectionContent>
          <SectionContent >
            <p className="text-gray-600 mb-8 text-lg">
              با شناسایی به موقع و انجام تمرینات تخصصی، از درمان‌های پیچیده و
              جراحی پیشگیری کنید
            </p>
          </SectionContent>
          <SectionContent >
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link href="/appointment" className="bg-gradient-to-br from-primary to-secondary text-white w-full px-6 md:min-w-30 h-12 cursor-pointer rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                
                  دریافت نوبت ارزیابی
                
              </Link>
            </div>
          </SectionContent>
        </div>
      </section>
    </div>
  );
}
