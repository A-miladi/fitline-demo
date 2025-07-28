import Navbar from "@/components/navbar";
import Link from "next/link";

export default function TherapeuticMassagePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              ماساژ تخصصی
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ماساژ درمانی و ریلکسیشن برای کاهش درد و تنش عضلانی
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
                درباره ماساژ درمانی
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ماساژ درمانی یکی از قدیمی‌ترین روش‌های درمانی است که با
                  استفاده از تکنیک‌های مختلف دستی، به بهبود سلامت جسمانی و روانی
                  کمک می‌کند.
                </p>
                <p>
                  در مرکز فیت‌لاین، ماساژ درمانی توسط متخصصان مجرب و با استفاده
                  از تکنیک‌های علمی انجام می‌شود. این درمان می‌تواند به کاهش
                  درد، بهبود گردش خون و کاهش استرس کمک کند.
                </p>
                <p>
                  هر جلسه ماساژ بر اساس نیاز و شرایط فرد طراحی می‌شود و می‌تواند
                  به عنوان درمان مستقل یا مکمل سایر روش‌های درمانی استفاده شود.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                انواع ماساژ
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ سوئدی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ماساژ کلاسیک برای ریلکسیشن و آرامش
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ عمیق
                    </h4>
                    <p className="text-gray-600 text-sm">
                      درمان دردهای مزمن و تنش‌های عمیق
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
                      بهبود عملکرد ورزشی و ریکاوری
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ماساژ آروماتراپی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ترکیب ماساژ با روغن‌های معطر
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              قیمت‌گذاری
            </h2>
            <p className="text-gray-600">بسته‌های مختلف ماساژ درمانی</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">جلسه تکی</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ۶۰۰,۰۰۰ تومان
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>۶۰ دقیقه ماساژ</li>
                <li>مشاوره اولیه</li>
                <li>روغن‌های با کیفیت</li>
                <li>محیط آرام و راحت</li>
              </ul>
              <Link href="/appointment">
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                  رزرو نوبت
                </button>
              </Link>
            </div>

            <div className="bg-primary rounded-2xl shadow-lg p-8 text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                  پیشنهاد ویژه
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">بسته ۶ جلسه</h3>
              <div className="text-3xl font-bold mb-4">۳,۰۰۰,۰۰۰ تومان</div>
              <ul className="space-y-3 mb-8 text-sm text-white/90">
                <li>۶ جلسه ۶۰ دقیقه‌ای</li>
                <li>مشاوره تخصصی</li>
                <li>برنامه درمانی شخصی</li>
                <li>پیگیری روند درمان</li>
                <li>تخفیف ۲۰%</li>
              </ul>
              <Link href="/appointment">
                <button className="w-full bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                  رزرو نوبت
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                بسته ۸ جلسه
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ۳,۶۰۰,۰۰۰ تومان
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>۸ جلسه ۶۰ دقیقه‌ای</li>
                <li>مشاوره تخصصی</li>
                <li>برنامه درمانی کامل</li>
                <li>پیگیری مستمر</li>
                <li>تخفیف ۲۵%</li>
                <li>جلسه ارزیابی رایگان</li>
              </ul>
              <Link href="/appointment">
                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                  رزرو نوبت
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            آماده تجربه آرامش هستید؟
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            همین امروز با ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                رزرو نوبت
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
