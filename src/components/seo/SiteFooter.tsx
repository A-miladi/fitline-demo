import Link from "next/link";
import { CONTACT_INFO } from "@/constants/contact";
import { CLINIC } from "@/constants/clinic";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white px-4 py-10 text-sm text-gray-600" dir="rtl">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        <div>
          <p className="mb-2 font-morabba text-lg font-bold text-primary">{CLINIC.name} اراک</p>
          <p className="leading-7">حرکات اصلاحی، ارزیابی تخصصی و توانبخشی ورزشی</p>
          <nav aria-label="پیوندهای پایین صفحه" className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/about" prefetch={false} className="hover:text-primary">معرفی مرکز</Link>
            <Link href="/services" prefetch={false} className="hover:text-primary">خدمات</Link>
            <Link href="/specialists" prefetch={false} className="hover:text-primary">متخصصین</Link>
            <Link href="/appointment" prefetch={false} className="hover:text-primary">درخواست نوبت</Link>
          </nav>
        </div>
        <address className="not-italic">
          <a href={CONTACT_INFO.location.mapUrl} target="_blank" rel="noopener noreferrer" className="leading-7 hover:text-primary">{CONTACT_INFO.address}</a>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {CONTACT_INFO.phone.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))).replace(/\D/g, "")}`} dir="ltr" className="hover:text-primary">{phone}</a>
            ))}
          </div>
        </address>
      </div>
    </footer>
  );
}
