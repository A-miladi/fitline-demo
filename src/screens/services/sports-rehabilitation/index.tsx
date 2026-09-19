import Navbar from "@/components/navbar";
import Link from "next/link";
import {
  FaBullseye,
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function SportsRehabilitation() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              توانبخشی ورزشی و بازگشت به ورزش
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              بازگشت ایمن و تدریجی به فعالیت‌های ورزشی پس از آسیب، تحت نظر
              متخصصین مجرب
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                خدمات توانبخشی ورزشی در مرکز راه تناسب
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  آسیب‌های ورزشی می‌توانند مسیر پیشرفت ورزشی شما را متوقف کنند.
                  در مرکز <strong>راه تناسب</strong>، با بهره‌گیری از متخصصین
                  مجرب و استفاده از روش‌های علمی روز دنیا، به شما کمک می‌کنیم تا
                  به صورت ایمن و مؤثر به ورزش بازگردید.
                </p>
                <p>
                  برنامه‌های توانبخشی ما بر اساس ارزیابی دقیق نوع آسیب، سطح
                  آمادگی جسمانی و اهداف ورزشی شما طراحی می‌شود. ما نه تنها به
                  درمان آسیب فعلی می‌پردازیم، بلکه با تقویت نقاط ضعف و بهبود
                  تکنیک‌های حرکتی، از آسیب‌های آینده پیشگیری می‌کنیم.
                </p>
                <p>
                  <strong>هدف نهایی ما</strong> بازگرداندن شما به میادین ورزشی
                  با عملکردی بهتر و آمادگی جسمانی بالاتر از قبل است.
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
                      آسیب‌های شانه
                    </h4>
                    <p className="text-gray-600 text-sm">
                      پارگی روتاتور کاف، دررفتگی، تاندونیت
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
                    <p className="text-gray-600 text-sm">
                      تنیس البو، گلف البو، کشیدگی تاندون
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های لگن
                    </h4>
                    <p className="text-gray-600 text-sm">
                      بورسیت، کشیدگی عضلات، سندرم ایلیوتیبیال باند
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      آسیب‌های زانو
                    </h4>
                    <p className="text-gray-600 text-sm">
                      پارگی رباط صلیبی، آسیب منیسک، تاندونیت
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
                      پیچ خوردگی، پارگی رباط، التهاب تاندون
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              فرآیند توانبخشی تخصصی
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              برنامه‌ای جامع و علمی برای بازگشت ایمن به ورزش
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ارزیابی دقیق
              </h3>
              <p className="text-gray-600 text-sm">
                بررسی کامل آسیب، تست‌های عملکردی و تعیین سطح آمادگی
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                کاهش درد و التهاب
              </h3>
              <p className="text-gray-600 text-sm">
                استفاده از روش‌های مختلف برای کنترل درد و کاهش التهاب
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بازتوانی و تقویت
              </h3>
              <p className="text-gray-600 text-sm">
                تمرینات پیشرونده برای بازگرداندن قدرت و انعطاف‌پذیری
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">۴</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                بازگشت تدریجی
              </h3>
              <p className="text-gray-600 text-sm">
                بازگشت پلکانی به فعالیت ورزشی با نظارت مستمر
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              رویکرد منحصر به فرد ما
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  برنامه شخصی‌سازی شده
                </h3>
              </div>
              <p className="text-gray-600">
                هر برنامه توانبخشی بر اساس شرایط خاص شما طراحی می‌شود. نوع آسیب،
                سطح ورزشی، اهداف و محدودیت‌های شما در طراحی برنامه در نظر گرفته
                می‌شوند.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  پایش مستمر پیشرفت
                </h3>
              </div>
              <p className="text-gray-600">
                با استفاده از تست‌های عملکردی و ارزیابی‌های دوره‌ای، پیشرفت شما
                به دقت پایش شده و برنامه بر اساس نتایج به‌روزرسانی می‌شود.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  پیشگیری از آسیب مجدد
                </h3>
              </div>
              <p className="text-gray-600">
                آموزش تکنیک‌های صحیح حرکتی، تقویت عضلات stabilizer و بهبود
                الگوهای حرکتی برای پیشگیری از آسیب‌های آینده.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaHandshake className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">
                  همکاری تیمی
                </h3>
              </div>
              <p className="text-gray-600">
                در صورت نیاز، با پزشک معالج، جراح و دیگر متخصصین در ارتباط هستیم
                تا بهترین نتیجه برای شما حاصل شود.
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
                  بازگشت زودهنگام و بدون برنامه‌ریزی به ورزش می‌تواند منجر به
                  آسیب‌های جدی‌تر و مزمن شدن مشکل شود.
                  <strong> برنامه توانبخشی باید تحت نظر متخصص مجرب</strong> و با
                  رعایت اصول علمی طراحی و اجرا شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            آماده بازگشت به ورزش هستید؟
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            با برنامه‌ریزی تخصصی و علمی، ایمن و مطمئن به میادین ورزشی بازگردید
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
