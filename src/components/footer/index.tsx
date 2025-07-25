import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaEnvelope,
  FaUserMd,
  FaClinicMedical,
  FaRunning,
  FaHandsHelping,
  FaCalendarAlt,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    {
      name: "حرکات اصلاحی",
      subServices: ["اصلاح وضعیت بدن", "تمرینات اصلاحی"],
    },
    {
      name: "توانبخشی ورزشی",
      subServices: ["بازتوانی پس از آسیب", "تمرینات تخصصی"],
    },
    { name: "ماساژ درمانی", subServices: ["ماساژ ورزشی", "ماساژ درمانی"] },
  ];

  return (
    <footer
      className="bg-neutral-200 text-neutral-900 pt-8 pb-6 text-sm"
      dir="rtl"
    >
      <div className="max-w-[1225px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Center - Compact */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3">
              <FaClinicMedical className="text-xl text-[#32bcce] ml-2" />
              <span className="text-lg font-bold">مرکز تخصصی ما</span>
            </div>
            <p className="text-justify mb-3 line-clamp-3">
              مرکز تخصصی حرکات اصلاحی و توانبخشی ورزشی با متخصصین مجرب و تجهیزات
              پیشرفته
            </p>
            <div className="flex gap-1">
              <a
                href="#"
                className="text-neutral-900 hover:text-[#32bcce] transition"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="text-neutral-900 hover:text-[#32bcce] transition"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services - Compact */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-[#32bcce] pb-1 flex items-center">
              <FaRunning className="ml-2 text-[#32bcce] text-sm" />
              خدمات ما
            </h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <details key={index} className="group">
                  <summary className="font-medium hover:text-[#32bcce] transition cursor-pointer list-none">
                    {service.name}
                  </summary>
                  <div className="mr-3 mt-1">
                    {service.subServices.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        href="#"
                        className="block text-xs py-0.5 hover:text-[#32bcce] transition"
                      >
                        - {sub}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Quick Links - Compact */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-[#32bcce] pb-1 flex items-center">
              <FaHandsHelping className="ml-2 text-[#32bcce] text-sm" />
              لینک‌های سریع
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/about"
                className="hover:text-[#32bcce] transition text-xs"
              >
                معرفی مرکز
              </Link>
              <Link
                href="/specialists"
                className="hover:text-[#32bcce] transition text-xs"
              >
                متخصصین
              </Link>
              <Link
                href="/consultation"
                className="hover:text-[#32bcce] transition text-xs"
              >
                مشاوره
              </Link>
              <Link
                href="/appointment"
                className="hover:text-[#32bcce] transition text-xs"
              >
                نوبت‌گیری
              </Link>
              <Link
                href="/blog"
                className="hover:text-[#32bcce] transition text-xs"
              >
                مقالات
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#32bcce] transition text-xs"
              >
                تماس
              </Link>
            </div>
          </div>

          {/* Contact - Compact */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-[#32bcce] pb-1">
              تماس
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-0.5 ml-2 text-[#32bcce] text-sm" />
                <span className="text-xs">تهران، خیابان نمونه، پلاک ۱۲</span>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="ml-2 text-[#32bcce] text-sm" />
                <a href="tel:+982122223333" className="text-xs">
                  ۰۲۱۲۲۲۲۳۳۳۳
                </a>
              </div>
              <div className="flex items-center">
                <FaMobileAlt className="ml-2 text-[#32bcce] text-sm" />
                <a href="tel:+989123456789" className="text-xs">
                  ۰۹۱۲۳۴۵۶۷۸۹
                </a>
              </div>
            </div>
            <div className="mt-4 bg-[#ffffff20] p-2 rounded text-xs">
              <p>شنبه-چهارشنبه: ۸صبح-۸شب</p>
              <p>پنجشنبه: ۸صبح-۴عصر</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff20] mt-6 pt-4 text-center flex w-full items-center justify-center text-xs">
          <p>© {new Date().getFullYear()} مرکز تخصصی حرکات اصلاحی</p>
          <div className="flex justify-center space-x-3 space-x-reverse">
            <Link href="/privacy" className="hover:text-[#32bcce] transition">
              قوانین
            </Link>
            <Link href="/terms" className="hover:text-[#32bcce] transition">
              شرایط
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
