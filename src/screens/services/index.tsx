import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  FaRunning,
  FaFutbol,
  FaStethoscope,
  FaSpa,
  FaWalking,
  FaCalendarAlt,
  FaTag,
  FaCheckCircle,
  FaBolt,
  FaHeadset,
  FaShieldAlt,
  FaArrowLeft,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "حرکات اصلاحی",
    description: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
    icon: FaRunning,
    link: "/services/corrective-exercises",
    features: [
      "اصلاح کف پای صاف و کف پای گود",
      "درمان ناهنجاری‌های زانو (پرانتزی و ضربدری)",
      "اصلاح ناهنجاری‌های لگن و ستون فقرات",
      "درمان لوردوز، کایفوز، اسکولیوز",
      "رفع سندروم‌های متقاطع قدامی و تحتانی",
      "اصلاح سر به جلو و تورتیکولی",
    ],
    duration: "۸-۱۶ جلسه",
    price: "مشاوره رایگان",
  },
  {
    id: 2,
    title: "توانبخشی ورزشی",
    description: "بازگشت به ورزش پس از آسیب‌های ورزشی",
    icon: FaFutbol,
    link: "/services/sports-rehabilitation",
    features: [
      "توانبخشی آسیب‌های شانه و آرنج",
      "بازگشت به ورزش پس از آسیب‌های لگن",
      "درمان آسیب‌های زانو و مچ پا",
      "برنامه بازگشت تدریجی به فعالیت ورزشی",
      "پیشگیری از آسیب‌های مکرر",
      "تقویت عضلات آسیب‌دیده",
    ],
    duration: "۱۲-۲۰ جلسه",
    price: "مشاوره رایگان",
  },
  {
    id: 3,
    title: "درمان دردهای اسکلتی-عضلانی",
    description: "با تجویز و ارجاع پزشک متخصص",
    icon: FaStethoscope,
    link: "/services/pain-treatment",
    features: [
      "درمان دردهای مزمن ستون فقرات",
      "رفع دردهای ناشی از ناهنجاری‌های قامتی",
      "درمان دردهای مفاصل و عضلات",
      "برنامه درمانی غیرجراحی",
      "همکاری با پزشکان متخصص",
      "پیگیری مستمر روند درمان",
    ],
    duration: "متغیر بر اساس نیاز",
    price: "مشاوره رایگان",
  },
  {
    id: 4,
    title: "تیپینگ و ماساژ",
    description: "خدمات تخصصی تکمیلی",
    icon: FaSpa,
    link: "/services/taping-massage",
    features: [
      "تیپینگ تخصصی برای اصلاح ناهنجاری",
      "ماساژ درمانی تخصصی",
      "کاهش درد و تنش عضلانی",
      "بهبود گردش خون و انعطاف‌پذیری",
      "خدمات تکمیلی در کنار حرکات اصلاحی",
      "ریلکسیشن و آرامش‌بخشی",
    ],
    duration: "۶-۱۰ جلسه",
    price: "مشاوره رایگان",
  },
  {
    id: 5,
    title: "ورزش سالمندان",
    description: "حفظ تحرک، تعادل و کیفیت زندگی در دوران سالمندی",
    icon: FaWalking,
    link: "/services/elderly-exercise",
    features: [
      "بهبود تعادل و پیشگیری از زمین‌خوردن",
      "افزایش قدرت و استقامت عضلانی",
      "حفظ دامنه حرکتی مفاصل و انعطاف‌پذیری",
      "کاهش دردهای مفصلی و عضلانی",
      "بهبود عملکرد قلبی-عروقی و تنفسی",
      "تمرینات ملایم و ایمن متناسب با شرایط فرد",
    ],
    duration: "۸-۱۲ جلسه",
    price: "مشاوره رایگان",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24">
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              مرکز تخصصی حرکات اصلاحی و توانبخشی
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              خدمات تخصصی مرکز راه تناسب
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ارائه خدمات تخصصی حرکات اصلاحی و توانبخشی با بهره‌گیری از متخصصین
              مجرب و متدهای نوین
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  {/* accent bar */}
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="p-8">
                    <div className="flex items-center mb-6 gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 font-morabba">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 border-b pb-2 text-sm">
                        خدمات ارائه شده:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-700 text-sm"
                          >
                            <FaCheckCircle className="w-3.5 h-3.5 text-primary ml-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-4 h-4 text-primary" />
                        مدت دوره: {service.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaTag className="w-4 h-4 text-primary" />
                        قیمت: {service.price}
                      </span>
                    </div>

                    <Link href={service.link}>
                      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium">
                        بیشتر بدانید
                        <FaArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              فرآیند دریافت خدمات
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              چگونه از خدمات تخصصی مرکز راه تناسب بهره‌مند شوید؟
            </p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-6 right-[12%] left-[12%] h-px bg-gradient-to-l from-primary/30 via-primary/50 to-primary/30" />

            {[
              {
                num: "۱",
                title: "تماس و نوبت‌گیری",
                desc: "دریافت نوبت ارزیابی اولیه",
              },
              {
                num: "۲",
                title: "ارزیابی تخصصی",
                desc: "تشخیص دقیق ناهنجاری توسط متخصص",
              },
              {
                num: "۳",
                title: "درمان و تمرین",
                desc: "شروع فرآیند درمان و تمرینات اصلاحی",
              },
              {
                num: "۴",
                title: "پیگیری و ارزیابی",
                desc: "بررسی روند بهبود و تنظیم برنامه",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold ring-4 ring-white">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              چرا مرکز راه تناسب؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تمایزهای ما در ارائه خدمات تخصصی حرکات اصلاحی
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaCheckCircle,
                title: "متخصصین مجرب",
                desc: "متخصصین دارای مدرک معتبر حرکات اصلاحی",
              },
              {
                icon: FaBolt,
                title: "روش‌های نوین",
                desc: "استفاده از آخرین متدهای علمی روز دنیا",
              },
              {
                icon: FaHeadset,
                title: "پشتیبانی مستمر",
                desc: "پیگیری و پشتیبانی در تمام مراحل درمان",
              },
              {
                icon: FaShieldAlt,
                title: "شفافیت مالی",
                desc: "قیمت‌های شفاف و منصفانه بدون هزینه پنهان",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-16">
        <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            زمان طلایی اصلاح ناهنجاری را از دست ندهید!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            با شناسایی به موقع و انجام تمرینات تخصصی، از درمان‌های پیچیده و
            جراحی پیشگیری کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                دریافت نوبت ارزیابی
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
