import Navbar from "@/components/navbar";
import Link from "next/link";

export default function CorrectiveExercisesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              حرکات اصلاحی
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              شناسایی و اصلاح ناهنجاری‌های اسکلتی-عضلانی قبل از تبدیل شدن به
              مشکلات جدی
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
                خدمات حرکات اصلاحی در مرکز راه تناسب
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مطالعات علمی نشان می‌دهند که{" "}
                  <strong>پیشگیری بهتر از درمان است</strong>. بسیاری از
                  ناهنجاری‌های اسکلتی-عضلانی اگر در زمان مناسب شناسایی و اصلاح
                  شوند، نیاز به درمان‌های پیچیده و جراحی را از بین می‌برند.
                </p>
                <p>
                  در مرکز <strong>راه تناسب</strong>، با استفاده از متخصصین مجرب
                  دارای مدرک معتبر و بهره‌گیری از آخرین متدهای علمی، به شناسایی
                  و اصلاح ناهنجاری‌های بدنی می‌پردازیم.
                </p>
                <p>
                  الگوهای حرکتی تکراری و نادرست، وضعیت‌های نامناسب در ایستادن،
                  نشستن و خوابیدن، عدم رعایت اصول ارگونومی و استفاده از کفش
                  نامناسب، همگی می‌توانند منجر به ناهنجاری‌های بدنی شوند که با
                  تمرینات تخصصی قابل پیشگیری و درمان هستند.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                ناهنجاری‌های قابل اصلاح
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ناهنجاری‌های ستون فقرات
                    </h4>
                    <p className="text-gray-600 text-sm">
                      لوردوز (گودی کمر)، کایفوز (قوز پشت)، اسکولیوز (انحراف
                      جانبی)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ناهنجاری‌های زانو
                    </h4>
                    <p className="text-gray-600 text-sm">
                      زانوی پرانتزی (ژنوواروم)، زانوی ضربدری (ژنووالگوم)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ناهنجاری‌های کف پا
                    </h4>
                    <p className="text-gray-600 text-sm">
                      کف پای صاف، کف پای گود (حالت قوس زیاد)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ناهنجاری‌های لگن
                    </h4>
                    <p className="text-gray-600 text-sm">
                      انحراف لگن، سندرم متقاطع تحتانی و فوقانی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ناهنجاری‌های سر و گردن
                    </h4>
                    <p className="text-gray-600 text-sm">
                      سر به جلو، تورتیکولی (کجی گردن)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              چرا حرکات اصلاحی مهم است؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ⏰ پیشگیری از مشکلات آینده
              </h3>
              <p className="text-gray-600">
                ناهنجاری‌های اصلاح نشده می‌توانند به مرور زمان منجر به
                محدودیت‌های حرکتی، دردهای مزمن و بیماری‌های اسکلتی-عضلانی شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💪 بهبود کیفیت زندگی
              </h3>
              <p className="text-gray-600">
                وضعیت بدنی صحیح نه تنها از درد جلوگیری می‌کند، بلکه باعث بهبود
                عملکرد روزانه، افزایش انرژی و اعتماد به نفس می‌شود.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🏃‍♂️ افزایش کارایی حرکتی
              </h3>
              <p className="text-gray-600">
                اصلاح ناهنجاری‌ها باعث بهبود الگوهای حرکتی، افزایش راندمان ورزشی
                و کاهش خطر آسیب‌های ورزشی می‌شود.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💰 صرفه‌جویی در هزینه‌ها
              </h3>
              <p className="text-gray-600">
                سرمایه‌گذاری در پیشگیری و اصلاح ناهنجاری‌ها، از هزینه‌های سنگین
                درمان‌های پیچیده و جراحی در آینده جلوگیری می‌کند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              فرآیند اصلاح ناهنجاری‌ها
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مراحل تخصصی شناسایی و اصلاح ناهنجاری‌های اسکلتی-عضلانی
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ارزیابی تخصصی
              </h3>
              <p className="text-gray-600 text-sm">
                بررسی دقیق وضعیت بدنی و تشخیص ناهنجاری‌ها توسط متخصص
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                طراحی برنامه
              </h3>
              <p className="text-gray-600 text-sm">
                طراحی برنامه تمرینی شخصی‌سازی شده بر اساس نیازهای شما
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                اجرای تمرینات
              </h3>
              <p className="text-gray-600 text-sm">
                انجام تمرینات اصلاحی تحت نظارت مستقیم متخصص
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۴</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                پیگیری مستمر
              </h3>
              <p className="text-gray-600 text-sm">
                ارزیابی دوره‌ای و调整 برنامه بر اساس پیشرفت حاصل شده
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
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
                  هشدار مهم
                </h3>
                <p className="text-gray-700 mb-3">
                  بسیاری از افراد بدون داشتن تخصص و مجوز لازم، اقدام به ارائه
                  خدمات حرکات اصلاحی می‌کنند. این افراد با ارائه تمرینات غیر
                  اصولی و روش‌های نادرست، ممکن است آسیب‌های جبران‌ناپذیری به شما
                  وارد کنند.
                </p>
                <p className="text-gray-700">
                  مرکز <strong>راه تناسب</strong> با بهره‌گیری از{" "}
                  <strong>متخصصین دارای مدرک معتبر دانشگاهی</strong>و{" "}
                  <strong>مجوزهای لازم</strong>، تضمین‌کننده کیفیت و ایمنی خدمات
                  ارائه شده است.
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
