import Navbar from "@/components/navbar";
import Link from "next/link";

export default function TapingMassagePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              تیپینگ و ماساژ تخصصی
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              خدمات تکمیلی تیپینگ و ماساژ برای بهبود سریع‌تر و کاهش درد
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                خدمات تیپینگ و ماساژ تخصصی
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  در مرکز <strong>راه تناسب</strong>، خدمات تیپینگ و ماساژ به
                  عنوان درمان‌های مکمل و تکمیلی alongside حرکات اصلاحی ارائه
                  می‌شوند. این خدمات به تسریع روند بهبود، کاهش درد و افزایش
                  اثربخشی درمان اصلی کمک می‌کنند.
                </p>
                <p>
                  تیپینگ (نوارگذاری) تکنیکی تخصصی است که با استفاده از نوارهای
                  مخصوص، به اصلاح وضعیت مفاصل و عضلات، کاهش درد و بهبود عملکرد
                  حرکتی کمک می‌کند.
                </p>
                <p>
                  ماساژ درمانی نیز با بهبود گردش خون، کاهش تنش عضلانی و افزایش
                  انعطاف‌پذیری، نقش مهمی در تکمیل فرآیند درمان ایفا می‌کند.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                خدمات ارائه شده
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      تیپینگ تخصصی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      نوارگذاری حرفه‌ای برای اصلاح ناهنجاری و کاهش درد
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ درمانی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      کاهش درد و تنش عضلانی با تکنیک‌های علمی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ ریلکسیشن
                    </h4>
                    <p className="text-gray-600 text-sm">
                      آرامش‌بخشی و کاهش استرس
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ ورزشی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      بهبود ریکاوری و عملکرد ورزشی
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              مزایای تیپینگ و ماساژ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              چگونه این خدمات به بهبود سریع‌تر شما کمک می‌کنند؟
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                کاهش درد
              </h3>
              <p className="text-gray-600 text-sm">
                کاهش سریع‌تر دردهای عضلانی و مفصلی
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                تسریع بهبودی
              </h3>
              <p className="text-gray-600 text-sm">
                بهبود سریع‌تر روند درمان و ریکاوری
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بهبود عملکرد
              </h3>
              <p className="text-gray-600 text-sm">
                افزایش دامنه حرکتی و عملکرد مفاصل
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">😌</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                آرامش روانی
              </h3>
              <p className="text-gray-600 text-sm">
                کاهش استرس و افزایش آرامش عمومی
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              یکپارچگی با درمان اصلی
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              چگونه تیپینگ و ماساژ در کنار حرکات اصلاحی عمل می‌کنند؟
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🔗 درمان مکمل
              </h3>
              <p className="text-gray-600">
                تیپینگ و ماساژ به عنوان درمان‌های مکمل و تکمیلی alongside برنامه
                اصلی حرکات اصلاحی ارائه می‌شوند و نه جایگزین آن.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 هدف مشترک
              </h3>
              <p className="text-gray-600">
                تمامی خدمات با هدف نهایی اصلاح ناهنجاری و بهبود کیفیت زندگی شما
                ارائه می‌شوند و به صورت هماهنگ عمل می‌کنند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ⏱️ صرفه‌جویی در زمان
              </h3>
              <p className="text-gray-600">
                استفاده از این خدمات مکمل می‌تواند مدت زمان مورد نیاز برای
                دستیابی به نتایج مطلوب را کاهش دهد.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💪 افزایش اثربخشی
              </h3>
              <p className="text-gray-600">
                ترکیب این روش‌ها با حرکات اصلاحی، اثربخشی کلی درمان را به طور
                قابل توجهی افزایش می‌دهد.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-morabba">
                  توجه مهم
                </h3>
                <p className="text-gray-700">
                  خدمات تیپینگ و ماساژ باید توسط متخصصین مجرب و دارای مدرک معتبر
                  ارائه شوند. این خدمات صرفاً به عنوان درمان مکمل و تکمیلی
                  alongside برنامه اصلی حرکات اصلاحی قابل استفاده هستند و
                  جایگزین درمان اصلی نمی‌شوند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            آماده بهبود سریع‌تر هستید؟
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            از خدمات تکمیلی تیپینگ و ماساژ برای تسریع روند درمان بهره‌مند شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                دریافت نوبت ارزیابی
              </button>
            </Link>
            <Link href="/consultation">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200">
                مشاوره رایگان
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
