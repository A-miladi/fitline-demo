"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-morabba">
              مرکز تخصصی
              <span className="gradient-text"> فیت‌لاین</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              ارائه خدمات تخصصی حرکات اصلاحی، توانبخشی ورزشی و ماساژ درمانی با
              بهره‌گیری از متخصصان مجرب و تجهیزات پیشرفته
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-lg">
                  رزرو نوبت
                </button>
              </Link>
              <Link href="/consultation">
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200 text-lg">
                  مشاوره رایگان
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              خدمات ما
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              خدمات تخصصی ما در حوزه سلامت و توانبخشی ورزشی
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏃‍♂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba">
                حرکات اصلاحی
              </h3>
              <p className="text-gray-600 mb-4">
                اصلاح ناهنجاری‌های اسکلتی-عضلانی با تکنیک‌های علمی
              </p>
              <Link href="/services/corrective-exercises">
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  مشاهده جزئیات →
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba">
                توانبخشی ورزشی
              </h3>
              <p className="text-gray-600 mb-4">
                بازگشت ایمن به ورزش پس از آسیب‌های ورزشی
              </p>
              <Link href="/services/sports-rehabilitation">
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  مشاهده جزئیات →
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💆‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba">
                ماساژ درمانی
              </h3>
              <p className="text-gray-600 mb-4">
                ماساژ تخصصی و ریلکسیشن برای کاهش درد و تنش
              </p>
              <Link href="/services/therapeutic-massage">
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  مشاهده جزئیات →
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-morabba">
                سایر خدمات
              </h3>
              <p className="text-gray-600 mb-4">
                ارزیابی جسمانی، مشاوره تغذیه و برنامه‌های تمرینی
              </p>
              <Link href="/services/other-services">
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  مشاهده جزئیات →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              چرا فیت‌لاین؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ما با ارائه خدمات با کیفیت و تخصصی، به بهبود سلامت و کیفیت زندگی
              شما کمک می‌کنیم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                تخصص و تجربه
              </h3>
              <p className="text-gray-600">
                بیش از ۱۰ سال تجربه در حوزه حرکات اصلاحی و توانبخشی ورزشی
              </p>
            </div>

            <div className="text-center">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                متخصصان مجرب
              </h3>
              <p className="text-gray-600">
                تیم متخصص شامل فیزیوتراپیست‌ها، کارشناسان حرکات اصلاحی و مربیان
                ورزشی
              </p>
            </div>

            <div className="text-center">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                مراقبت شخصی
              </h3>
              <p className="text-gray-600">
                برنامه‌ریزی درمانی شخصی‌سازی شده برای هر مراجع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">۱۰+</div>
              <div className="text-white/90">سال تجربه</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">۵۰۰۰+</div>
              <div className="text-white/90">مراجع راضی</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">۱۵</div>
              <div className="text-white/90">متخصص مجرب</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">۹۵%</div>
              <div className="text-white/90">رضایت مراجعین</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
            آماده شروع درمان هستید؟
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            همین امروز با ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200">
                رزرو نوبت
              </button>
            </Link>
            <Link href="/consultation">
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200">
                مشاوره رایگان
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
