import Navbar from "@/components/navbar";

const specialists = [
  {
    id: 1,
    name: "دکتر احمد محمدی",
    title: "فیزیوتراپیست ارشد",
    experience: "۱۵ سال تجربه",
    specialization: "حرکات اصلاحی و توانبخشی ورزشی",
    image: "/images/specialist-1.jpg",
    description:
      "متخصص در درمان آسیب‌های ورزشی و حرکات اصلاحی با بیش از ۱۵ سال تجربه در مراکز درمانی معتبر.",
  },
  {
    id: 2,
    name: "دکتر فاطمه احمدی",
    title: "کارشناس حرکات اصلاحی",
    experience: "۱۲ سال تجربه",
    specialization: "اصلاح ناهنجاری‌های اسکلتی-عضلانی",
    image: "/images/specialist-2.jpg",
    description:
      "متخصص در تشخیص و درمان ناهنجاری‌های ستون فقرات و اندام‌های فوقانی و تحتانی.",
  },
  {
    id: 3,
    name: "دکتر علی رضایی",
    title: "مربی ورزشی ارشد",
    experience: "۱۰ سال تجربه",
    specialization: "برنامه‌ریزی تمرینی و بازگشت به ورزش",
    image: "/images/specialist-3.jpg",
    description:
      "متخصص در طراحی برنامه‌های تمرینی شخصی‌سازی شده برای بازگشت به فعالیت‌های ورزشی.",
  },
  {
    id: 4,
    name: "دکتر مریم کریمی",
    title: "متخصص ماساژ درمانی",
    experience: "۸ سال تجربه",
    specialization: "ماساژ تخصصی و ریلکسیشن",
    image: "/images/specialist-4.jpg",
    description:
      "متخصص در انواع ماساژ درمانی و تکنیک‌های آرامش‌بخش برای کاهش استرس و درد.",
  },
  {
    id: 5,
    name: "دکتر حسین نوری",
    title: "فیزیوتراپیست ورزشی",
    experience: "۱۳ سال تجربه",
    specialization: "توانبخشی آسیب‌های ورزشی",
    image: "/images/specialist-5.jpg",
    description:
      "متخصص در درمان و توانبخشی آسیب‌های ورزشی با استفاده از جدیدترین تکنیک‌های درمانی.",
  },
  {
    id: 6,
    name: "دکتر زهرا صادقی",
    title: "کارشناس تغذیه ورزشی",
    experience: "۹ سال تجربه",
    specialization: "تغذیه و مکمل‌های ورزشی",
    image: "/images/specialist-6.jpg",
    description: "متخصص در برنامه‌ریزی تغذیه‌ای برای ورزشکاران و افراد فعال.",
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
              متخصصان ما
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تیم متخصص و مجرب ما با سال‌ها تجربه در حوزه حرکات اصلاحی و
              توانبخشی ورزشی
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
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {specialist.name.split(" ")[0].charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-morabba">
                    {specialist.name}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {specialist.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {specialist.experience} • {specialist.specialization}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {specialist.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                      رزرو نوبت
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
              چرا متخصصان ما؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تیم متخصص ما با بهره‌گیری از دانش روز و تجربه عملی، بهترین خدمات
              را ارائه می‌دهند
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
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
                تخصص و تجربه
              </h3>
              <p className="text-gray-600">
                متخصصان ما دارای مدارک معتبر و سال‌ها تجربه عملی هستند
              </p>
            </div>

            <div className="text-center">
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
                روش‌های نوین
              </h3>
              <p className="text-gray-600">
                استفاده از جدیدترین تکنیک‌ها و روش‌های درمانی روز دنیا
              </p>
            </div>

            <div className="text-center">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                مراقبت شخصی
              </h3>
              <p className="text-gray-600">
                برنامه‌ریزی درمانی شخصی‌سازی شده برای هر مراجع
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
