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

const SERVICES: DropdownOption[] = [
  { value: "corrective", label: "حرکات اصلاحی" },
  { value: "rehabilitation", label: "توانبخشی ورزشی" },
  { value: "pain-treatment", label: "درمان دردهای اسکلتی-عضلانی" },
  { value: "taping-massage", label: "تیپینگ و ماساژ" },
  { value: "evaluation", label: "ارزیابی وضعیت جسمانی" },
];

const GENDERS: DropdownOption[] = [
  { value: "male", label: "مرد" },
  { value: "female", label: "زن" },
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

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    serviceType: "",
    preferredDay: dayjs().calendar("jalali").format("YYYY/MM/DD"),
    preferredTime: DEFAULT_TIME,
    description: "",
    previousTreatment: "",
    contactPreference: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleInputChange = (
    field: keyof AppointmentFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDropdownSelect =
    (field: keyof AppointmentFormData) => (option: DropdownOption) => {
      setFormData((prev) => ({ ...prev, [field]: option.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleDateSelect = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const persianDate = date.toLocaleDateString("fa-IR");
      handleInputChange("preferredDay", persianDate);
    }
  };

  const handleTimeSelect = (time: string) => {
    handleInputChange("preferredTime", time);
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

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
                      placeholder="نام کامل خود را وارد کنید"
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
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
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
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      سن *
                    </label>
                    <input
                      required
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:bg-neutral-100 focus:outline-none"
                      placeholder="سن خود را وارد کنید"
                      min="1"
                      max="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      جنسیت *
                    </label>
                    <CustomDropdown
                      options={GENDERS}
                      value={formData.gender}
                      onSelect={handleDropdownSelect("gender")}
                      placeholder="انتخاب جنسیت"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نوع خدمت مورد نیاز *
                  </label>
                  <CustomDropdown
                    options={SERVICES}
                    value={formData.serviceType}
                    onSelect={handleDropdownSelect("serviceType")}
                    placeholder="انتخاب نوع خدمت"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    ترجیح زمانی *
                  </label>
                  <CalendarPicker
                    selectedDate={formData.preferredDay}
                    selectedTime={formData.preferredTime}
                    onDateSelect={(date) =>
                      handleInputChange("preferredDay", date)
                    }
                    onTimeSelect={(time) =>
                      handleInputChange("preferredTime", time)
                    }
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

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium text-lg"
                >
                  ارسال درخواست نوبت
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
