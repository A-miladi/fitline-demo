import Navbar from "@/components/navbar";
import Image from "next/image";

const specialists = [
  {
    id: 1,
    name: "دکتر مهسا عسگری",
    title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
    experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
    education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه اصفهان",
    specialization: "بازتوانی دردهای اسکلتی-عضلانی، اصلاح ناهنجاری‌های قامتی",
    image: "/images/doctor-female-placeholder.jpg",
    description:
      "نائب رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی و جزو استعدادهای درخشان دانشگاه. متخصص در بازتوانی دردهای اسکلتی عضلانی مانند کمردرد، دیسک گردن، آرتروز زانو، روماتیسم مفصلی، بهبود دردهای سیاتیک و گرفتگی‌های عضلانی، و حرکات اصلاحی برای اصلاح گودی کمر، گودپشتی، زانوی پرانتزی و ضربدری، و کف پای صاف.",
  },
  {
    id: 2,
    name: "دکتر حسین حیدری نیک",
    title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
    experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
    education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه تهران",
    specialization: "پیشگیری و توانبخشی آسیب‌های اسکلتی-عضلانی",
    image: "/images/doctor-male-placeholder.jpg",
    description:
      "رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی، مولف، پژوهشگر و مدرس دانشگاه. متخصص در مشاوره، ارزیابی و تجویز برنامه تمرینی، پیشگیری و اصلاح ناهنجاری‌های بدنی، پیشگیری و توانبخشی دردهای اسکلتی عضلانی (کمردرد، آرتروز، دردهای شانه و ...)، و بازگشت به ورزش.",
  },
];

export default function Specialists() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              متخصصین مجرب مرکز راه تناسب
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تیمی از متخصصین دارای مدرک معتبر حرکات اصلاحی و آسیب شناسی ورزشی
              با سال‌ها تجربه علمی و عملی
            </p>
          </div>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {specialists.map((specialist) => (
              <div
                key={specialist.id}
                className="bg-white flex flex-col w-full h-full rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-32 h-32 rounded-full shadow-lg shadow-primary/40 border-4 border-white bg-gray-200 flex items-center justify-center text-5xl text-primary/50">
                    {specialist.id === 1 ? "👩‍⚕️" : "👨‍⚕️"}
                  </div>
                </div>

                <div className="p-6 h-full w-full flex items-start justify-between flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-morabba">
                    {specialist.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {specialist.title}
                  </p>
                  <div className="mb-3">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2">
                      {specialist.experience}
                    </span>
                    <p className="text-gray-600 text-sm mb-1">
                      {specialist.education}
                    </p>
                    <p className="text-gray-600 text-sm font-medium">
                      {specialist.specialization}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {specialist.description}
                  </p>

                  <div className="mt-4 w-full pt-4 border-t border-gray-100">
                    <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                      دریافت نوبت مشاوره
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              چرا متخصصین مرکز راه تناسب؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تمامی متخصصین ما دارای شرایط و استانداردهای لازم برای ارائه خدمات
              تخصصی حرکات اصلاحی هستند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
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
                مدارک معتبر
              </h3>
              <p className="text-gray-600">
                کلیه متخصصین دارای حداقل مدرک کارشناسی ارشد حرکات اصلاحی و
                مجوزهای لازم
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                رویکرد علمی
              </h3>
              <p className="text-gray-600">
                استفاده از آخرین یافته‌های علمی و متدهای نوین در حوزه حرکات
                اصلاحی
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                کار تیمی
              </h3>
              <p className="text-gray-600">
                همکاری تیمی متخصصین برای ارائه بهترین راهکارهای درمانی یکپارچه
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
                  متأسفانه برخی افراد بدون داشتن مدارک معتبر و تخصص لازم، اقدام
                  به ارائه خدمات حرکات اصلاحی می‌کنند. مرکز راه تناسب با
                  بهره‌گیری از{" "}
                  <strong>متخصصین دارای مدرک معتبر دانشگاهی</strong> و
                  <strong> مجوزهای لازم</strong>، تضمین‌کننده کیفیت و ایمنی
                  خدمات ارائه شده است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
