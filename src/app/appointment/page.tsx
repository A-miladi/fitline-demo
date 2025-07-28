import Navbar from "@/components/navbar";

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              ثبت نوبت
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              رزرو نوبت درمانی در مرکز فیت‌لاین با متخصصان مجرب
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                فرم رزرو نوبت
              </h2>
              <p className="text-gray-600 mb-8">
                فرم زیر را تکمیل کنید تا نوبت شما رزرو شود. کارشناسان ما در اسرع
                وقت با شما تماس می‌گیرند.
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      سن *
                    </label>
                    <input
                      type="number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="سن خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      جنسیت *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="male">مرد</option>
                      <option value="female">زن</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع خدمت *
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
                    <option value="evaluation">ارزیابی وضعیت جسمانی</option>
                    <option value="home-program">برنامه تمرینی خانگی</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ترجیح زمان *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        روز هفته
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="saturday">شنبه</option>
                        <option value="sunday">یکشنبه</option>
                        <option value="monday">دوشنبه</option>
                        <option value="tuesday">سه‌شنبه</option>
                        <option value="wednesday">چهارشنبه</option>
                        <option value="thursday">پنجشنبه</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        ساعت
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="08:00">۸:۰۰ صبح</option>
                        <option value="09:00">۹:۰۰ صبح</option>
                        <option value="10:00">۱۰:۰۰ صبح</option>
                        <option value="11:00">۱۱:۰۰ صبح</option>
                        <option value="12:00">۱۲:۰۰ ظهر</option>
                        <option value="14:00">۲:۰۰ عصر</option>
                        <option value="15:00">۳:۰۰ عصر</option>
                        <option value="16:00">۴:۰۰ عصر</option>
                        <option value="17:00">۵:۰۰ عصر</option>
                        <option value="18:00">۶:۰۰ عصر</option>
                        <option value="19:00">۷:۰۰ عصر</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیحات مشکل
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="مشکل یا نیاز خود را به طور مفصل توضیح دهید..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    آیا قبلاً درمان مشابهی داشته‌اید؟
                  </label>
                  <div className="flex space-x-4 space-x-reverse">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previous_treatment"
                        value="yes"
                        className="ml-2"
                      />
                      <span>بله</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previous_treatment"
                        value="no"
                        className="ml-2"
                      />
                      <span>خیر</span>
                    </label>
                  </div>
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
                  ثبت درخواست نوبت
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-morabba">
                اطلاعات مرکز
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
                  <li>
                    • لطفاً ۱۵ دقیقه قبل از وقت مقرر در مرکز حضور داشته باشید
                  </li>
                  <li>• کارشناسان ما در اسرع وقت با شما تماس می‌گیرند</li>
                  <li>
                    • در صورت نیاز به تغییر وقت، حداقل ۲۴ ساعت قبل اطلاع دهید
                  </li>
                  <li>• همراه داشتن مدارک پزشکی قبلی توصیه می‌شود</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
              خدمات ما
            </h2>
            <p className="text-gray-600">
              خدمات تخصصی ارائه شده در مرکز فیت‌لاین
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃‍♂️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                حرکات اصلاحی
              </h3>
              <p className="text-gray-600 text-sm">
                اصلاح ناهنجاری‌های اسکلتی-عضلانی
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                توانبخشی ورزشی
              </h3>
              <p className="text-gray-600 text-sm">
                بازگشت به ورزش و توانبخشی آسیب‌ها
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💆‍♀️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ماساژ درمانی
              </h3>
              <p className="text-gray-600 text-sm">ماساژ تخصصی و ریلکسیشن</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
