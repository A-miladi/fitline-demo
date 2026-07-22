"use client";
import Navbar from "@/components/navbar";
import {
  AppointmentCreatePayload,
  AppointmentFormData,
  ContactInfo,
  DropdownOption,
  ProcessStep,
} from "@/types";

import { useCallback, useEffect, useState } from "react";
import ContactInfoCard from "@/components/contactInfoCard";
import ProcessInfo from "@/components/processInfo";
import CustomDropdown from "@/components/DropDown";
import CalendarPicker from "@/components/callender";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import usePost from "@/hooks/usePost";
import useFetch from "@/hooks/useFetch";
import { API_URL } from "@/constants/api";
import { Doctor } from "@/types/doctor";
import { useSearchParams } from "next/navigation";

dayjs.extend(jalaliday);

const SERVICE_MAP: Record<string, string> = {
  corrective: "consultation",
  rehabilitation: "treatment",
  "pain-treatment": "treatment",
  "taping-massage": "cleaning",
  evaluation: "checkup",
};

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
  const searchParams = useSearchParams();
  const doctorIdFromUrl = searchParams.get("doctorId") ?? "";
  const { data: doctors } = useFetch<Doctor[]>(API_URL.Doctors);
  // در Appointment component
  const { loading: isSubmitting, execute: submitAppointment } = usePost<
    AppointmentCreatePayload,
    AppointmentCreatePayload
  >(`${API_URL.Appointments}`, {
    onSuccess: (data) => {
      console.log("✅ Appointment created:", data);
    },
    onError: (error) => {
      console.error("❌ Error creating appointment:", error);
    },
  });
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("");
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);
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

  const handleDateSelect = (date: string) => {
    handleInputChange("date", date);
  };

  const handleTimeSelect = (time: string) => {
    handleInputChange("time", time);
  };

  const doctorOptions: DropdownOption[] =
    doctors?.map((doctor) => ({
      value: doctor.id.toString(),
      label: doctor.name,
    })) ?? [];

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSubmitting || isSubmittingLocal) {
        return;
      }

      setToast(null);
      setIsSubmittingLocal(true);

      const doctorId = Number(selectedDoctorId || doctorIdFromUrl);

      if (!doctorId) {
        setToast({
          type: "error",
          message: "لطفاً پزشک را انتخاب کنید",
        });
        setIsSubmittingLocal(false);
        return;
      }

      const payload: AppointmentCreatePayload = {
        id: 0,
        full_name: `${formData.name} ${formData.lastName}`.trim(),
        phone: formData.phone,
        date: `${formData.date} ${formData.time}`,
        description: formData.description,
        doctor_id: doctorId,
      };

      try {
        const result = await submitAppointment(payload);

        if (result) {
          setToast({
            type: "success",
            message: "درخواست نوبت با موفقیت ثبت شد",
          });
        } else {
          setToast({
            type: "error",
            message: "ثبت نوبت با خطا مواجه شد. لطفاً دوباره تلاش کنید",
          });
        }
      } catch (error) {
        setToast({
          type: "error",
          message: "خطا در ارتباط با سرور. لطفاً مجدداً تلاش کنید",
        });
      } finally {
        setIsSubmittingLocal(false);
      }
    },
    [
      isSubmitting,
      isSubmittingLocal,
      selectedDoctorId,
      doctorIdFromUrl,
      formData,
      submitAppointment,
    ],
  );
  useEffect(() => {
    if (doctorIdFromUrl) {
      setSelectedDoctorId(doctorIdFromUrl);
    } else {
      setSelectedDoctorId("");
    }
  }, [doctorIdFromUrl]);
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
          {toast && (
            <div
              className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
                toast.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {toast.message}
            </div>
          )}
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
                    انتخاب پزشک
                  </label>
                  <CustomDropdown
                    options={doctorOptions}
                    value={selectedDoctorId}
                    onSelect={(option) => setSelectedDoctorId(option.value)}
                    placeholder="پزشک مورد نظر را انتخاب کنید"
                    disabled={doctorOptions.length === 0}
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
                  disabled={isSubmitting || isSubmittingLocal}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting || isSubmittingLocal
                    ? "در حال ثبت..."
                    : "ثبت نوبت"}
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
