import Navbar from "@/components/navbar";
import Link from "next/link";

export default function SportsRehabilitationPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              بازگشت به ورزش و توانبخشی
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              توانبخشی آسیب‌های ورزشی و بازگشت ایمن به فعالیت‌های ورزشی
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
                درباره توانبخشی ورزشی
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  توانبخشی ورزشی فرآیندی تخصصی است که به ورزشکاران کمک می‌کند تا
                  پس از آسیب‌های ورزشی، به تدریج و با ایمنی کامل به فعالیت‌های
                  ورزشی بازگردند.
                </p>
                <p>
                  در مرکز فیت‌لاین، برنامه‌های توانبخشی بر اساس نوع آسیب، شدت آن
                  و سطح فعالیت ورزشی فرد طراحی می‌شود. این برنامه‌ها شامل مراحل
                  مختلفی از کاهش درد تا بازگشت کامل به ورزش است.
                </p>
                <p>
                  هدف ما نه تنها درمان آسیب، بلکه تقویت بدن برای پیشگیری از
                  آسیب‌های مجدد و بهبود عملکرد ورزشی است.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                آسیب‌های قابل درمان
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های زانو
                    </h4>
                    <p className="text-gray-600 text-sm">
                      رباط صلیبی، منیسک، کشکک زانو
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های شانه
                    </h4>
                    <p className="text-gray-600 text-sm">
                      دررفتگی، پارگی روتاتور کاف
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های مچ پا
                    </h4>
                    <p className="text-gray-600 text-sm">
                      پیچ خوردگی، پارگی رباط
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های کمر
                    </h4>
                    <p className="text-gray-600 text-sm">
                      فتق دیسک، کشیدگی عضلانی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های آرنج
                    </h4>
                    <p className="text-gray-600 text-sm">تنیس البو، گلف البو</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rehabilitation Phases */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              مراحل توانبخشی
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فرآیند تدریجی و علمی بازگشت به ورزش
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                کاهش درد و التهاب
              </h3>
              <p className="text-gray-600 text-sm">
                استفاده از روش‌های مختلف برای کاهش درد و التهاب
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بازگرداندن دامنه حرکتی
              </h3>
              <p className="text-gray-600 text-sm">
                تمرینات کششی و حرکتی برای بازگرداندن انعطاف‌پذیری
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                تقویت عضلات
              </h3>
              <p className="text-gray-600 text-sm">
                تمرینات تقویتی پیشرونده برای بهبود قدرت
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۴</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بازگشت به ورزش
              </h3>
              <p className="text-gray-600 text-sm">
                تمرینات ورزشی تدریجی و بازگشت کامل
              </p>
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
            <p className="text-gray-600">
              بسته‌های مختلف توانبخشی متناسب با نوع و شدت آسیب
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                بسته پایه
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ۱,۲۰۰,۰۰۰ تومان
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>۱۲ جلسه توانبخشی</li>
                <li>ارزیابی اولیه</li>
                <li>برنامه تمرینی خانگی</li>
                <li>پیگیری هفتگی</li>
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
              <h3 className="text-xl font-bold mb-4">بسته کامل</h3>
              <div className="text-3xl font-bold mb-4">۱,۸۰۰,۰۰۰ تومان</div>
              <ul className="space-y-3 mb-8 text-sm text-white/90">
                <li>۱۶ جلسه توانبخشی</li>
                <li>ارزیابی کامل</li>
                <li>برنامه تمرینی پیشرفته</li>
                <li>پیگیری روزانه</li>
                <li>مشاوره تغذیه</li>
                <li>تست‌های عملکردی</li>
              </ul>
              <Link href="/appointment">
                <button className="w-full bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                  رزرو نوبت
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                بسته پیشرفته
              </h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ۲,۵۰۰,۰۰۰ تومان
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>۲۰ جلسه توانبخشی</li>
                <li>ارزیابی تخصصی</li>
                <li>برنامه تمرینی کامل</li>
                <li>پیگیری مستمر</li>
                <li>مشاوره تغذیه</li>
                <li>تست‌های عملکردی</li>
                <li>جلسات پیگیری ۶ ماهه</li>
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
            آماده بازگشت به ورزش هستید؟
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
