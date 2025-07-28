import Navbar from "@/components/navbar";
import Link from "next/link";

const otherServices = [
  {
    id: 1,
    title: "ارزیابی وضعیت جسمانی",
    description: "بررسی کامل وضعیت جسمانی و تشخیص مشکلات",
    icon: "📊",
    price: "از ۵۰۰,۰۰۰ تومان",
    features: [
      "ارزیابی وضعیت بدنی",
      "تست‌های عملکردی",
      "بررسی انعطاف‌پذیری",
      "گزارش کامل و توصیه‌ها",
    ],
  },
  {
    id: 2,
    title: "مشاوره تغذیه ورزشی",
    description: "برنامه‌ریزی تغذیه‌ای برای ورزشکاران و افراد فعال",
    icon: "🥗",
    price: "از ۸۰۰,۰۰۰ تومان",
    features: [
      "برنامه تغذیه شخصی",
      "مشاوره مکمل‌ها",
      "برنامه کاهش/افزایش وزن",
      "پیگیری و تنظیم برنامه",
    ],
  },
  {
    id: 3,
    title: "برنامه تمرینی خانگی",
    description: "طراحی برنامه تمرینی قابل اجرا در منزل",
    icon: "🏠",
    price: "از ۴۰۰,۰۰۰ تومان",
    features: [
      "برنامه تمرینی شخصی",
      "ویدیوهای آموزشی",
      "پیگیری هفتگی",
      "تنظیم برنامه",
    ],
  },
  {
    id: 4,
    title: "پیگیری روند درمان",
    description: "مشاوره و پیگیری مستمر روند درمان",
    icon: "📈",
    price: "از ۳۰۰,۰۰۰ تومان",
    features: [
      "مشاوره تلفنی",
      "بررسی پیشرفت",
      "تنظیم برنامه",
      "پشتیبانی مستمر",
    ],
  },
];

export default function OtherServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              سایر خدمات
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              خدمات تخصصی دیگر مرکز فیت‌لاین برای بهبود سلامت و کیفیت زندگی
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {otherServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-morabba">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      خدمات شامل:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-primary font-semibold">
                      {service.price}
                    </span>
                  </div>

                  <Link href="/appointment">
                    <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                      رزرو نوبت
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              چرا خدمات ما؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ما با ارائه خدمات با کیفیت و تخصصی، به بهبود سلامت و کیفیت زندگی
              شما کمک می‌کنیم
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                کیفیت بالا
              </h3>
              <p className="text-gray-600 text-sm">
                استفاده از بهترین روش‌ها و تجهیزات
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                متخصصان مجرب
              </h3>
              <p className="text-gray-600 text-sm">تیم متخصص با سال‌ها تجربه</p>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                زمان مناسب
              </h3>
              <p className="text-gray-600 text-sm">
                انعطاف‌پذیری در زمان‌بندی جلسات
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                قیمت مناسب
              </h3>
              <p className="text-gray-600 text-sm">قیمت‌های منصفانه و شفاف</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-morabba">
            آماده شروع هستید؟
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
