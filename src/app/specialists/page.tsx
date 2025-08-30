import Navbar from "@/components/navbar";
import DOCTOR from "../../../public/images/Doctor1.jpg";
import DOCTOR1 from "../../../public/images/Doctor2.jpg";
import Image from "next/image";

const specialists = [
  {
    id: 1,
    name: "دکتر سید احمد حسینی",
    title: "متخصص ارشد حرکات اصلاحی",
    experience: "۱۲ سال تجربه تخصصی",
    education: "دکترای حرکات اصلاحی و آسیب شناسی ورزشی",
    specialization: "ناهنجاری‌های ستون فقرات و اندام تحتانی",
    image: DOCTOR,
    description:
      "متخصص در تشخیص و اصلاح ناهنجاری‌های اسکلتی-عضلانی با مدرک معتبر از دانشگاه علوم پزشکی تهران. دارای گواهینامه‌های بین‌المللی در حوزه حرکات اصلاحی.",
  },
  {
    id: 2,
    name: "دکتر فاطمه محمدی",
    title: "متخصص حرکات اصلاحی",
    experience: "۱۰ سال تجربه تخصصی",
    education: "دکترای بیومکانیک ورزشی",
    specialization: "اصلاح ناهنجاری‌های راه رفتن و ایستادن",
    image: DOCTOR1,
    description:
      "متخصص در ارزیابی و درمان اختلالات قامتی و الگوهای حرکتی نادرست. مدرس کارگاه‌های تخصصی حرکات اصلاحی برای متخصصین.",
  },
  {
    id: 3,
    name: "دکتر علی رضایی",
    title: "متخصص آسیب‌شناسی ورزشی",
    experience: "۱۴ سال تجربه تخصصی",
    education: "پزشکی ورزشی و توانبخشی",
    specialization: "بازگشت به ورزش پس از آسیب",
    image: DOCTOR,
    description:
      "متخصص در طراحی برنامه‌های بازتوانی ورزشی و پیشگیری از آسیب‌های مکرر. مشاور تیم‌های ورزشی در زمینه پیشگیری و توانبخشی آسیب‌ها.",
  },
  {
    id: 4,
    name: "دکتر مریم کریمی",
    title: "متخصص ارگونومی و حرکات اصلاحی",
    experience: "۹ سال تجربه تخصصی",
    education: "کارشناسی ارشد حرکات اصلاحی و آسیب شناسی ورزشی",
    specialization: "اصلاح ناهنجاری‌های ناشی از محیط کار",
    image: DOCTOR1,
    description:
      "متخصص در طراحی برنامه‌های اصلاحی برای کارمندان و افراد با سبک زندگی کم‌تحرک. طراحی برنامه‌های ارگونومیک برای محیط‌های کاری.",
  },
  {
    id: 5,
    name: "دکتر حسین نوری",
    title: "فیزیوتراپیست و متخصص حرکات اصلاحی",
    experience: "۱۱ سال تجربه تخصصی",
    education: "دکترای فیزیوتراپی و حرکات اصلاحی",
    specialization: "درمان دردهای اسکلتی-عضلانی",
    image: DOCTOR,
    description:
      "متخصص در درمان غیرجراحی دردهای مزمن ستون فقرات و مفاصل. ترکیب روش‌های فیزیوتراپی و حرکات اصلاحی برای بهترین نتایج.",
  },
  {
    id: 6,
    name: "دکتر زهرا صادقی",
    title: "متخصص حرکات اصلاحی کودکان",
    experience: "۸ سال تجربه تخصصی",
    education: "کارشناسی ارشد رشد و تکامل حرکتی",
    specialization: "ناهنجاری‌های اسکلتی در کودکان و نوجوانان",
    image: DOCTOR1,
    description:
      "متخصص در شناسایی و اصلاح ناهنجاری‌های دوران رشد. طراحی برنامه‌های تمرینی جذاب و مؤثر برای کودکان و نوجوانان.",
  },
];

export default function SpecialistsPage() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist) => (
              <div
                key={specialist.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-32 h-32 rounded-full shadow-lg shadow-primary/40 border-4 border-white"
                  />
                </div>

                <div className="p-6">
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
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {specialist.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
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

      {/* Why Choose Our Specialists */}
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
