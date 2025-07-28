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
              معرفی مرکز فیت‌لاین
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مرکز تخصصی حرکات اصلاحی و توانبخشی ورزشی با بیش از ۱۰ سال تجربه در
              ارائه خدمات حرفه‌ای
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
                درباره ما
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  مرکز فیت‌لاین با هدف ارائه خدمات تخصصی در حوزه حرکات اصلاحی و
                  توانبخشی ورزشی در سال ۱۳۹۲ تأسیس شد. این مرکز با بهره‌گیری از
                  متخصصان مجرب و تجهیزات پیشرفته، خدمات جامعی را به مراجعین
                  ارائه می‌دهد.
                </p>
                <p>
                  ما معتقدیم که سلامت جسمانی و روانی افراد از اهمیت بالایی
                  برخوردار است و با ارائه برنامه‌های شخصی‌سازی شده، به بهبود
                  کیفیت زندگی مراجعین کمک می‌کنیم.
                </p>
                <p>
                  تیم متخصص ما شامل فیزیوتراپیست‌ها، کارشناسان حرکات اصلاحی و
                  مربیان ورزشی است که با همکاری یکدیگر، بهترین نتایج را برای شما
                  به ارمغان می‌آورند.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                چرا فیت‌لاین؟
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      تخصص و تجربه
                    </h4>
                    <p className="text-gray-600 text-sm">
                      بیش از ۱۰ سال تجربه در حوزه حرکات اصلاحی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۲</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      تجهیزات پیشرفته
                    </h4>
                    <p className="text-gray-600 text-sm">
                      استفاده از جدیدترین تجهیزات تشخیصی و درمانی
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      برنامه شخصی‌سازی شده
                    </h4>
                    <p className="text-gray-600 text-sm">
                      طراحی برنامه درمانی متناسب با شرایط هر فرد
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">۴</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      پشتیبانی مستمر
                    </h4>
                    <p className="text-gray-600 text-sm">
                      پیگیری روند درمان و پشتیبانی در تمام مراحل
                    </p>
                  </div>
                </div>
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
              <div className="text-4xl font-bold text-primary mb-2">۱۰+</div>
              <div className="text-gray-600">سال تجربه</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۵۰۰۰+</div>
              <div className="text-gray-600">مراجع راضی</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۱۵</div>
              <div className="text-gray-600">متخصص مجرب</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">۹۵%</div>
              <div className="text-gray-600">رضایت مراجعین</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
