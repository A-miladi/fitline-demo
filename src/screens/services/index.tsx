import Navbar from "@/components/navbar";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "حرکات اصلاحی",
    description: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
    icon: "🏃‍♂️",
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
    icon: "⚽",
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
    icon: "🩺",
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
    icon: "💆‍♀️",
    link: "/services/taping-massage",
    features: [
      "تیپینگ تخصصی برای اصلاح ناهنجاری",
      "ماساژ درمانی تخصصی",
      "کاهش درد و تنش عضلانی",
      "بهبود گردش خون و انعطاف‌پذیری",
      "خدمات تکمیلی alongside حرکات اصلاحی",
      "ریلکسیشن و آرامش‌بخشی",
    ],
    duration: "۶-۱۰ جلسه",
    price: "مشاوره رایگان",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6 gap-2">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1 font-morabba">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 border-b pb-2">
                      خدمات ارائه شده:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                    <span>📅 مدت دوره: {service.duration}</span>
                    <span>💰 قیمت: {service.price}</span>
                  </div>

                  <Link href={service.link}>
                    <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium">
                      دریافت مشاوره تخصصی
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                ۱
              </div>
              <h3 className="font-semibold text-lg mb-2">تماس و نوبت‌گیری</h3>
              <p className="text-gray-600 text-sm">دریافت نوبت ارزیابی اولیه</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                ۲
              </div>
              <h3 className="font-semibold text-lg mb-2">ارزیابی تخصصی</h3>
              <p className="text-gray-600 text-sm">
                تشخیص دقیق ناهنجاری توسط متخصص
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                ۳
              </div>
              <h3 className="font-semibold text-lg mb-2">درمان و تمرین</h3>
              <p className="text-gray-600 text-sm">
                شروع فرآیند درمان و تمرینات اصلاحی
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                ۴
              </div>
              <h3 className="font-semibold text-lg mb-2">پیگیری و ارزیابی</h3>
              <p className="text-gray-600 text-sm">
                بررسی روند بهبود و调整 برنامه
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                متخصصین مجرب
              </h3>
              <p className="text-gray-600 text-sm">
                متخصصین دارای مدرک معتبر حرکات اصلاحی
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                روش‌های نوین
              </h3>
              <p className="text-gray-600 text-sm">
                استفاده از آخرین متدهای علمی روز دنیا
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                پشتیبانی مستمر
              </h3>
              <p className="text-gray-600 text-sm">
                پیگیری و پشتیبانی در تمام مراحل درمان
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                شفافیت مالی
              </h3>
              <p className="text-gray-600 text-sm">
                قیمت‌های شفاف و منصفانه بدون هزینه پنهان
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            زمان طلایی اصلاح ناهنجاری را از دست ندهید!
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            با شناسایی به موقع و انجام تمرینات تخصصی، از درمان‌های پیچیده و
            جراحی پیشگیری کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                دریافت نوبت ارزیابی
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
