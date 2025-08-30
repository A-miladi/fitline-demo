import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              معرفی مرکز تندرستی و حرکات اصلاحی
              <span className="gradient-text"> راه تناسب</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مرکز تخصصی پیشگیری و اصلاح ناهنجاری‌های اسکلتی-عضلانی با رویکرد
              علمی و تخصصی
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                درباره مرکز راه تناسب
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مطالعات علمی مختلف در سطح دنیا نشان می‌دهند که پیشگیری بهتر از
                  درمان است. مرکز تندرستی و حرکات اصلاحی{" "}
                  <strong>راه تناسب</strong> با درک این اصل مهم، فعالیت خود را
                  بر پایه شناسایی و اصلاح ناهنجاری‌های اسکلتی-عضلانی قبل از
                  تبدیل شدن به مشکلات جدی بنا نهاده است.
                </p>
                <p>
                  در دنیای امروز که فقر حرکتی، کم‌تحرکی و چاقی به همراه
                  تکنولوژی‌های نوین ظهور کرده‌اند، نیاز به متخصصین حرکات اصلاحی
                  بیش از پیش احساس می‌شود. الگوهای حرکتی تکراری و نادرست در محیط
                  کار و خانه، عدم رعایت اصول ارگونومی و استفاده از کفش نامناسب،
                  افراد را در معرض ناهنجاری‌های جسمانی قرار می‌دهد.
                </p>
                <p>
                  ما در مرکز راه تناسب با بهره‌گیری از{" "}
                  <strong>متخصصین مجرب دارای مدرک معتبر</strong>و استفاده از
                  رویکردها و متدهای نوین، به شما کمک می‌کنیم تا از محدودیت‌های
                  حرکتی و بیماری‌های ناشی از بی‌تحرکی پیشگیری کنید.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                تمایزهای مرکز راه تناسب
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      متخصصین دارای مدرک معتبر
                    </h4>
                    <p className="text-gray-600 text-sm">
                      کلیه متخصصین ما حداقل دارای مدرک کارشناسی ارشد حرکات
                      اصلاحی و آسیب شناسی ورزشی هستند
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۲</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      رویکرد پیشگیرانه
                    </h4>
                    <p className="text-gray-600 text-sm">
                      تأکید بر شناسایی و اصلاح ناهنجاری‌ها قبل از نیاز به
                      درمان‌های پیچیده
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      روش‌های علمی و نوین
                    </h4>
                    <p className="text-gray-600 text-sm">
                      استفاده از آخرین متدهای روز دنیا در حوزه حرکات اصلاحی و
                      توانبخشی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۴</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      خدمات تخصصی یکپارچه
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ارائه کلیه خدمات مورد نیاز از ارزیابی تا درمان و پیگیری در
                      یک مرکز
                    </p>
                  </div>
                </div>
              </div>
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
                  متأسفانه بسیاری از افراد یا باشگاه‌ها بدون داشتن تخصص و مجوز
                  اقدام به تبلیغات با واژه‌هایی مانند ماساژ اصلاحی، یوگا اصلاحی،
                  پیلاتس اصلاحی و... به صورت غیرمجاز می‌کنند.
                </p>
                <p className="text-gray-700">
                  این افراد با ارائه تمرینات غیر اصولی و روش‌های نادرست، گاهی به
                  حوزه پزشکی و درمانی وارد شده و اقداماتی انجام می‌دهند که ممکن
                  است آسیب‌های جبران‌ناپذیری به افراد تحمیل کند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۱۰۰۰+</div>
              <div className="text-gray-600">ناهنجاری اصلاح شده</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۹۸%</div>
              <div className="text-gray-600">رضایت مراجعین</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۱۵+</div>
              <div className="text-gray-600">متخصص مجرب</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۰</div>
              <div className="text-gray-600">مورد عوارض جدی</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
            تعهد ما به شما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ما در مرکز راه تناسب متعهدیم که با ارائه خدمات تخصصی و علمی، به شما
            کمک کنیم تا از <strong>زمان طلایی اصلاح ناهنجاری</strong> بهره ببرید
            و از درمان‌های پیچیده و جراحی‌های پرهزینه جلوگیری کنید.
          </p>
        </div>
      </section>
    </div>
  );
}
