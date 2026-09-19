import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  FaUserFriends,
  FaShieldAlt,
  FaBrain,
  FaHeartbeat,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function ElderlyExercise() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              ورزش سالمندان
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              حفظ تحرک، تعادل و کیفیت زندگی در دوران سالمندی با تمرینات ایمن و
              تخصصی
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                خدمات ورزش سالمندان
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  با افزایش سن، قدرت عضلانی، تعادل و انعطاف‌پذیری به تدریج کاهش
                  می‌یابد و خطر زمین‌خوردن و آسیب‌های حرکتی بیشتر می‌شود. در
                  مرکز
                  <strong> راه تناسب</strong>، برنامه‌های ورزشی اختصاصی برای
                  سالمندان طراحی می‌کنیم تا با حفظ تحرک، استقلال و کیفیت زندگی
                  آن‌ها را بهبود بخشیم.
                </p>
                <p>
                  تمرینات ما کاملاً ایمن، ملایم و متناسب با شرایط جسمانی هر فرد
                  است و زیر نظر متخصصین مجرب اجرا می‌شود. هدف ما پیشگیری از
                  تحلیل عضلانی، بهبود تعادل و کاهش دردهای مفصلی است.
                </p>
                <p>
                  این برنامه‌ها نه تنها به سلامت جسمی کمک می‌کنند، بلکه با بهبود
                  روحیه و کاهش اضطراب، به سلامت روان سالمندان نیز یاری
                  می‌رسانند.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                اهداف و مزایای ورزش سالمندان
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      بهبود تعادل و پیشگیری از زمین‌خوردن
                    </h4>
                    <p className="text-gray-600 text-sm">
                      تمرینات تعادلی برای کاهش خطر افتادن و شکستگی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      افزایش قدرت و استقامت عضلانی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      مقابله با تحلیل عضلانی ناشی از افزایش سن
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      حفظ دامنه حرکتی مفاصل
                    </h4>
                    <p className="text-gray-600 text-sm">
                      بهبود انعطاف‌پذیری و کاهش خشکی مفاصل
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      کاهش دردهای مفصلی و عضلانی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      تسکین دردهای مزمن با تمرینات ملایم و اصولی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      بهبود عملکرد قلبی-عروقی و تنفسی
                    </h4>
                    <p className="text-gray-600 text-sm">
                      تقویت قلب و ریه با تمرینات هوازی سبک
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
              رویکرد تمرینی ما
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اصول علمی و ایمن برای ورزش سالمندان
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ارزیابی جامع
              </h3>
              <p className="text-gray-600 text-sm">
                بررسی وضعیت جسمانی، سابقه پزشکی و سطح تحرک فرد
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                برنامه اختصاصی
              </h3>
              <p className="text-gray-600 text-sm">
                طراحی تمرینات متناسب با توانایی و شرایط هر سالمند
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                اجرای ایمن
              </h3>
              <p className="text-gray-600 text-sm">
                نظارت مستمر متخصص برای پیشگیری از هرگونه آسیب
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۴</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                پیگیری و پیشرفت
              </h3>
              <p className="text-gray-600 text-sm">
                ارزیابی دوره‌ای و تنظیم برنامه بر اساس پیشرفت فرد
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
              ویژگی‌های برنامه ورزش سالمندان
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تمریناتی متناسب با نیازهای ویژه دوران سالمندی
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaUserFriends className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  تمرینات گروهی و اجتماعی
                </h3>
              </div>
              <p className="text-gray-600">
                برگزاری جلسات گروهی برای افزایش انگیزه، تعامل اجتماعی و کاهش
                احساس تنهایی در سالمندان.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  ایمنی در اولویت
                </h3>
              </div>
              <p className="text-gray-600">
                تمام تمرینات با رعایت اصول ایمنی و با توجه به محدودیت‌های جسمانی
                هر فرد طراحی و اجرا می‌شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  تمرینات شناختی-حرکتی
                </h3>
              </div>
              <p className="text-gray-600">
                ترکیب تمرینات بدنی با فعالیت‌های ذهنی برای بهبود هماهنگی
                عصبی-عضلانی و حفظ عملکرد شناختی.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaHeartbeat className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  بهبود کیفیت زندگی
                </h3>
              </div>
              <p className="text-gray-600">
                افزایش استقلال، بهبود روحیه و ارتقای سلامت روانی و جسمی سالمندان
                در زندگی روزمره.
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
                <FaExclamationTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-morabba">
                  توجه مهم
                </h3>
                <p className="text-gray-700">
                  ورزش سالمندان باید تحت نظارت متخصص و با در نظر گرفتن شرایط
                  جسمانی، سابقه پزشکی و داروهای مصرفی فرد انجام شود. شروع هر
                  برنامه تمرینی بدون ارزیابی تخصصی ممکن است خطرناک باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            سالمندی فعال و پویا را تجربه کنید
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            با برنامه‌های تخصصی ورزش سالمندان، تحرک، تعادل و کیفیت زندگی خود را
            حفظ کنید
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
