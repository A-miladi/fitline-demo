import Navbar from "@/components/navbar";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              مشاوره رایگان
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              دریافت مشاوره تخصصی رایگان از متخصصان مجرب مرکز فیت‌لاین
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                فرم مشاوره رایگان
              </h2>
              <p className="text-gray-600 mb-8">
                فرم زیر را تکمیل کنید تا متخصصان ما در اسرع وقت با شما تماس
                بگیرند.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="نام و نام خانوادگی خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شماره تماس *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    آدرس ایمیل
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    سن
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="سن خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع مشکل یا سوال *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="corrective">حرکات اصلاحی</option>
                    <option value="rehabilitation">توانبخشی ورزشی</option>
                    <option value="massage">ماساژ درمانی</option>
                    <option value="nutrition">مشاوره تغذیه</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیحات
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="مشکل یا سوال خود را به طور مفصل توضیح دهید..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ترجیح تماس
                  </label>
                  <div className="flex space-x-4 space-x-reverse">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact_preference"
                        value="phone"
                        className="ml-2"
                      />
                      <span>تلفنی</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact_preference"
                        value="whatsapp"
                        className="ml-2"
                      />
                      <span>واتساپ</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact_preference"
                        value="email"
                        className="ml-2"
                      />
                      <span>ایمیل</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-lg"
                >
                  ارسال درخواست مشاوره
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                اطلاعات تماس
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      تلفن تماس
                    </h4>
                    <p className="text-gray-600">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-gray-600">۰۹۱۲۳۴۵۶۷۸۹</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">آدرس</h4>
                    <p className="text-gray-600">
                      تهران، خیابان نمونه، پلاک ۱۲
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      ساعت کار
                    </h4>
                    <p className="text-gray-600">
                      شنبه تا چهارشنبه: ۸ صبح تا ۸ شب
                    </p>
                    <p className="text-gray-600">پنجشنبه: ۸ صبح تا ۴ عصر</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">نکات مهم:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• مشاوره رایگان است و هیچ هزینه‌ای ندارد</li>
                  <li>• متخصصان ما در اسرع وقت با شما تماس می‌گیرند</li>
                  <li>• تمام اطلاعات شما محرمانه باقی می‌ماند</li>
                  <li>• می‌توانید از طریق واتساپ نیز درخواست دهید</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              سوالات متداول
            </h2>
            <p className="text-gray-600">
              پاسخ سوالات رایج شما درباره مشاوره رایگان
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                آیا مشاوره واقعاً رایگان است؟
              </h3>
              <p className="text-gray-600">
                بله، مشاوره اولیه کاملاً رایگان است و هیچ هزینه‌ای از شما دریافت
                نمی‌شود.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                چه زمانی با من تماس می‌گیرید؟
              </h3>
              <p className="text-gray-600">
                متخصصان ما معمولاً در همان روز یا حداکثر ۲۴ ساعت آینده با شما
                تماس می‌گیرند.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                آیا می‌توانم از طریق واتساپ مشاوره بگیرم؟
              </h3>
              <p className="text-gray-600">
                بله، می‌توانید از طریق واتساپ نیز درخواست مشاوره دهید و متخصصان
                ما با شما تماس می‌گیرند.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                آیا اطلاعات من محرمانه باقی می‌ماند؟
              </h3>
              <p className="text-gray-600">
                بله، تمام اطلاعات شما کاملاً محرمانه است و فقط برای ارائه مشاوره
                استفاده می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
