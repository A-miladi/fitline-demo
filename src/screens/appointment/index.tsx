"use client";
import Navbar from "@/components/navbar";
import {
  AppointmentFormData,
  ContactInfo,
  DropdownOption,
  ProcessStep,
} from "@/types";

import { useState } from "react";
import ContactInfoCard from "@/components/contactInfoCard";
import ProcessInfo from "@/components/processInfo";
import CustomDropdown from "@/components/DropDown";
import CalendarPicker from "@/components/callender";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import usePost from "@/hooks/usePost";
import { API_URL } from "@/constants/api";

dayjs.extend(jalaliday);

// Map services to backend enum values
const SERVICE_MAP: Record<string, string> = {
  corrective: "consultation",
  rehabilitation: "treatment",
  "pain-treatment": "treatment",
  "taping-massage": "cleaning",
  evaluation: "checkup",
};

const SERVICES: DropdownOption[] = [
  { value: "corrective", label: "حرکات اصلاحی" },
  { value: "rehabilitation", label: "توانبخشی ورزشی" },
  { value: "pain-treatment", label: "درمان دردهای اسکلتی-عضلانی" },
  { value: "taping-massage", label: "تیپینگ و ماساژ" },
  { value: "evaluation", label: "ارزیابی وضعیت جسمانی" },
];

const GENDERS: DropdownOption[] = [
  { value: "مرد", label: "مرد" },
  { value: "زن", label: "زن" },
];

const CONTACT_INFO: ContactInfo = {
  phone: ["۰۲۱-۱۲۳۴۵۶۷۸", "۰۹۱۲۳۴۵۶۷۸۹"],
  address: "تهران، خیابان نمونه، پلاک ۱۲",
  workingHours: {
    regular: "شنبه تا چهارشنبه: ۸:۰۰ - ۲۰:۰۰",
    thursday: "پنجشنبه: ۸:۰۰ - ۱۶:۰۰",
    friday: "جمعه‌ها تعطیل",
  },
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "تماس کارشناس",
    description:
      "متخصصین ما در اسرع وقت برای تعیین وقت ارزیابی با شما تماس می‌گیرند",
  },
  {
    step: 2,
    title: "ارزیابی اولیه",
    description: "جلسه ارزیابی تخصصی برای تشخیص دقیق ناهنجاری‌ها",
  },
  {
    step: 3,
    title: "شروع درمان",
    description: "شروع فرآیند درمان با برنامه‌ریزی شخصی‌سازی شده",
  },
];
const DEFAULT_TIME = "08:00";

// Convert Jalali date (YYYY/MM/DD) to Gregorian date (YYYY-MM-DD)
const convertJalaliToGregorian = (jalaliDate: string): string => {
  try {
    const [year, month, day] = jalaliDate.split("/").map(Number);
    const jalaliDateObj = dayjs()
      .calendar("jalali")
      .year(year)
      .month(month - 1)
      .date(day);
    const gregorianDate = jalaliDateObj.calendar("gregory");
    return gregorianDate.format("YYYY-MM-DD");
  } catch (error) {
    console.error("Error converting date:", error);
    return dayjs().format("YYYY-MM-DD");
  }
};

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    age: 0,
    gender: "",
    services: "",
    date: dayjs().calendar("jalali").format("YYYY/MM/DD"),
    time: DEFAULT_TIME,
    description: "",
  });

  const handleInputChange = (
    field: keyof AppointmentFormData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDropdownSelect =
    (field: keyof AppointmentFormData) => (option: DropdownOption) => {
      setFormData((prev) => ({ ...prev, [field]: option.value }));
    };

  const handleDateSelect = (date: string) => {
    handleInputChange("date", date);
  };

  const handleTimeSelect = (time: string) => {
    handleInputChange("time", time);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-morabba">
              ثبت نوبت در راه تناسب
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اولین قدم برای بهبود وضعیت جسمانی خود را بردارید. زمان طلایی اصلاح
              ناهنجاری را از دست ندهید!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-morabba">
                فرم درخواست نوبت
              </h2>
              <p className="text-gray-600 mb-8">
                اطلاعات خود را وارد کنید تا متخصصین ما برای تعیین وقت ارزیابی
                اولیه با شما تماس بگیرند.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام و نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    شماره تماس *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیح مشکل یا نیاز *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="مشکل خود را به طور مختصر توضیح دهید..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    ترجیح زمانی *
                  </label>
                  <CalendarPicker
                    selectedDate={formData.date}
                    selectedTime={formData.time}
                    onDateSelect={handleDateSelect}
                    onTimeSelect={handleTimeSelect}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ثبت نوبت
                </button>
              </form>
            </div>

            <ContactInfoCard contactInfo={CONTACT_INFO} />
          </div>
        </div>
      </section>

      <ProcessInfo steps={PROCESS_STEPS} />
    </div>
  );
};

export default Appointment;
