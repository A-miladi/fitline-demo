import type { ContactInfo } from "@/types";
import Image from "next/image";
import neshanLogo from "../../../public/icon/neshan.png";
import googleMapsLogo from "../../../public/icon/google-maps.webp";

interface ClinicLocationProps {
  location: ContactInfo["location"];
  compact?: boolean;
}

export default function ClinicLocation({ location, compact = false }: ClinicLocationProps) {
  return (
    <div className="@container overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm shadow-primary/5">
      <iframe
        src={location.embedUrl}
        title="موقعیت مرکز راه تناسب روی نقشه"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className={`block w-full border-0 ${compact ? "h-44" : "h-60"}`}
      />
      <div className={`border-t border-gray-100 bg-gradient-to-bl from-primary/[0.04] via-white to-secondary/[0.04] ${compact ? "p-3" : "p-4"}`}>
        <div className="mb-3 flex items-center gap-2.5">
          <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/[0.07] text-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21 3-6.5 18-3.8-7.7L3 9.5 21 3Z" />
              <path d="m21 3-10.3 10.3" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900">مسیر رسیدن به مرکز</p>
            <p className="mt-0.5 text-xs text-gray-500">مسیریاب دلخواه‌تان را انتخاب کنید</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5 @min-[300px]:grid-cols-2">
          {[
            { href: location.neshanUrl, label: "نشان", logo: neshanLogo },
            { href: location.mapUrl, label: "گوگل‌مپ", logo: googleMapsLogo },
          ].map(({ href, label, logo }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`مسیریابی با ${label} (در صفحه جدید)`}
              className="group flex min-h-18 items-center gap-2.5 rounded-xl border border-gray-200/80 bg-white px-3 py-3 text-right shadow-sm shadow-black/[0.02] transition-[border-color,box-shadow,background-color] duration-200 hover:border-primary/30 hover:bg-primary/[0.02] hover:shadow-md hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white">
                <Image src={logo} alt="" width={28} height={28} sizes="28px" unoptimized className="h-7 w-7 object-contain" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-gray-800 transition-colors group-hover:text-primary">{label}</span>
                <span className="mt-1 block text-[11px] text-gray-500">شروع مسیریابی</span>
              </span>
              <svg aria-hidden="true" className="shrink-0 text-gray-400 transition-colors group-hover:text-primary" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3h7v7m0-7L10 14" />
                <path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
