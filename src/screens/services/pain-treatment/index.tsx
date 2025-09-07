import Navbar from "@/components/navbar";
import Link from "next/link";

export default function PainTreatment() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              درمان دردهای اسکلتی-عضلانی
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              کاهش و درمان دردهای ناشی از ناهنجاری‌های اسکلتی-عضلانی با تجویز و
              ارجاع پزشک متخصص
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
                خدمات درمان دردهای اسکلتی-عضلانی
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  دردهای اسکلتی-عضلانی اغلب ناشی از ناهنجاری‌های ساختاری،
                  الگوهای حرکتی نادرست یا عدم تعادل عضلانی هستند. در مرکز
                  <strong> راه تناسب</strong>، با همکاری پزشکان متخصص، به درمان
                  ریشه‌ای این دردها می‌پردازیم.
                </p>
                <p>
                  رویکرد ما در درمان دردها، ترکیبی از حرکات اصلاحی، تکنیک‌های
                  کاهش درد و آموزش الگوهای حرکتی صحیح است. تمام برنامه‌های
                  درمانی پس از ارزیابی دقیق و با تجویز پزشک متخصص طراحی می‌شوند.
                </p>
                <p>
                  هدف ما نه تنها کاهش درد، بلکه شناسایی و درمان علت اصلی ایجاد
                  درد برای جلوگیری از بازگشت آن است.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                انواع دردهای قابل درمان
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      دردهای ستون فقرات
                    </h4>
                    <p className="text-gray-600 text-sm">
                      کمردرد، گردن درد، دردهای ناحیه توراسیک
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      دردهای مفاصل
                    </h4>
                    <p className="text-gray-600 text-sm">
                      آرتروز، دردهای زانو، شانه، لگن و مچ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      دردهای عضلانی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      فیبرومیالژیا، میوفاشیال پین، کشیدگی عضلات
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      دردهای ناشی از ناهنجاری
                    </h4>
                    <p className="text-gray-600 text-sm">
                      دردهای ناشی از اسکولیوز، لوردوز، کایفوز
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      دردهای وضعیتی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      دردهای ناشی از وضعیت‌های نامناسب کاری و روزمره
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              رویکرد درمانی ما
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              روش‌های علمی و تخصصی برای درمان مؤثر دردها
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ارزیابی دقیق
              </h3>
              <p className="text-gray-600 text-sm">
                بررسی کامل وضعیت بدنی و تشخیص علت اصلی درد
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                همکاری با پزشک
              </h3>
              <p className="text-gray-600 text-sm">
                دریافت تجویز و برنامه درمانی از پزشک متخصص
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                درمان تخصصی
              </h3>
              <p className="text-gray-600 text-sm">
                اجرای تمرینات و تکنیک‌های کاهش درد تحت نظارت متخصص
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۴</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                پیشگیری از بازگشت
              </h3>
              <p className="text-gray-600 text-sm">
                آموزش روش‌های پیشگیری و حفظ نتایج درمان
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              همکاری با پزشکان متخصص
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              رویکردی بین‌رشته‌ای برای درمان مؤثر دردها
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👨‍⚕️ ارجاع پزشکی
              </h3>
              <p className="text-gray-600">
                تمامی برنامه‌های درمانی پس از معاینه و تشخیص پزشک متخصص و با
                دریافت ارجاع مناسب طراحی و اجرا می‌شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🔄 پیگیری مستمر
              </h3>
              <p className="text-gray-600">
                گزارش پیشرفت درمان به پزشک معالج و تنظیم برنامه بر اساس
                توصیه‌های پزشکی و پاسخ بیمار به درمان.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📋 برنامه یکپارچه
              </h3>
              <p className="text-gray-600">
                تلفیق درمان‌های پزشکی با حرکات اصلاحی برای دستیابی به بهترین
                نتایج در کوتاه‌ترین زمان ممکن.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 هدف مشترک
              </h3>
              <p className="text-gray-600">
                همکاری نزدیک با پزشک برای دستیابی به اهداف درمانی مشترک و بهبود
                کیفیت زندگی بیمار.
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
                  درمان دردهای اسکلتی-عضلانی باید تحت نظارت پزشک متخصص و توسط
                  افراد دارای مجوز انجام شود. خوددرمانی یا مراجعه به افراد
                  غیرمتخصص ممکن است باعث تشدید مشکل و ایجاد آسیب‌های
                  جبران‌ناپذیر شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            از دردهای اسکلتی-عضلانی رهایی یابید
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            با برنامه‌ریزی تخصصی و همکاری پزشکان متخصص، زندگی بدون درد را تجربه
            کنید
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
