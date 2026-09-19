"use client";
import Navbar from "@/components/navbar";
import {
  AppointmentCreatePayload,
  AppointmentFormData,
  ContactInfo,
  DropdownOption,
  ProcessStep,
} from "@/types";

import { useCallback, useEffect, useState, useMemo, memo } from "react";
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
import {
  isValidPhoneNumber,
  formatPhoneNumber,
  getPhoneError,
} from "@/utils/validation";

dayjs.extend(jalaliday);

const SERVICE_MAP: Record<string, string> = {
  corrective: "consultation",
  rehabilitation: "treatment",
  "pain-treatment": "treatment",
  "taping-massage": "cleaning",
  evaluation: "checkup",
};

const CONTACT_INFO: ContactInfo = {
  phone: ["۰۸۶-۳۲۲۴۱۷۵۲", "۰۹۳۸۴۸۰۸۸۱۶"],
  address: "اراک ، چهارراه دکتر حسابی ، انتهای کوچه اردیبهشت ، نبش کوچه تربیت",
  workingHours: {
    morning: "۸:۰۰ الی ۱۳‌:۰۰",
    afternoon: "۱۵:۰۰ الی ۲۰:۰۰",
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

// کامپوننت ورودی با memo
const InputField = memo(
  ({
    label,
    type,
    required,
    value,
    onChange,
    placeholder,
    error,
    dir,
  }: {
    label: string;
    type?: string;
    required?: boolean;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
    dir?: string;
  }) => (
    <div className="max-w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type || "text"}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border rounded-lg focus:bg-neutral-100 focus:outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-500"
            : "border-gray-300 focus:ring-2 focus:ring-primary"
        }`}
        placeholder={placeholder}
        dir={dir}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  ),
);

InputField.displayName = "InputField";

// کامپوننت Textarea با memo
const TextareaField = memo(
  ({
    label,
    required,
    value,
    onChange,
    placeholder,
    rows = 4,
  }: {
    label: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    rows?: number;
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      <textarea
        rows={rows}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  ),
);

TextareaField.displayName = "TextareaField";

const Appointment: React.FC = () => {
  const searchParams = useSearchParams();
  const doctorIdFromUrl = searchParams.get("doctorId") ?? "";
  const { data: doctors } = useFetch<Doctor[]>(API_URL.Doctors);
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
  const [phoneError, setPhoneError] = useState<string>("");
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

  // استفاده از useMemo برای doctorOptions
  const doctorOptions = useMemo(() => {
    return (
      doctors?.map((doctor) => ({
        value: doctor._id.toString(),
        label: doctor.name,
      })) ?? []
    );
  }, [doctors]);

  // استفاده از useCallback برای تمام handlerها
  const handleInputChange = useCallback(
    (field: keyof AppointmentFormData, value: string | number) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;
      const formattedValue = formatPhoneNumber(rawValue);

      if (formattedValue.length <= 11) {
        setFormData((prev) => ({ ...prev, phone: formattedValue }));

        if (formattedValue.length > 0) {
          const error = getPhoneError(formattedValue);
          setPhoneError(error);
        } else {
          setPhoneError("");
        }
      }
    },
    [],
  );

  const handleDateSelect = useCallback((date: string) => {
    console.log("Appointment - Date selected:", date);
    setFormData((prev) => {
      const newData = { ...prev, date };
      console.log("New formData after date change:", newData);
      return newData;
    });
  }, []);

  const handleTimeSelect = useCallback((time: string) => {
    console.log("Appointment - Time selected:", time);
    setFormData((prev) => {
      const newData = { ...prev, time };
      console.log("New formData after time change:", newData);
      return newData;
    });
  }, []);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, name: e.target.value }));
    },
    [],
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, description: e.target.value }));
    },
    [],
  );

  const handleDoctorSelect = useCallback((option: DropdownOption) => {
    setSelectedDoctorId(option.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isSubmitting || isSubmittingLocal) {
        return;
      }

      setToast(null);

      if (!isValidPhoneNumber(formData.phone)) {
        setToast({
          type: "error",
          message: "لطفاً یک شماره تماس معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)",
        });
        return;
      }

      setIsSubmittingLocal(true);

      const doctorId = selectedDoctorId || doctorIdFromUrl;

      if (!doctorId) {
        setToast({
          type: "error",
          message: "لطفاً پزشک را انتخاب کنید",
        });
        setIsSubmittingLocal(false);
        return;
      }

      const gregorianDate = convertJalaliToGregorian(formData.date);
      const dateTime = `${gregorianDate} ${formData.time}`;

      const payload: AppointmentCreatePayload = {
        id: 0,
        full_name: `${formData.name} ${formData.lastName}`.trim(),
        phone: formData.phone,
        date: dateTime,
        description: formData.description,
        doctor_id: doctorId,
      };

      console.log("Payload being sent:", payload); // لاگ برای دیباگ

      try {
        const result = await submitAppointment(payload);

        if (result) {
          setToast({
            type: "success",
            message: "درخواست نوبت با موفقیت ثبت شد",
          });
          setFormData({
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
          setSelectedDoctorId("");
          setPhoneError("");
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
        setTimeout(() => {
          setToast(null);
        }, 5000);
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

      {toast && (
        <div className="fixed top-4 left-0 right-0 z-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className={`rounded-lg border px-4 py-3 text-sm shadow-lg ${
                toast.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{toast.message}</span>
                <button
                  onClick={() => setToast(null)}
                  className="mr-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

      <section className="py-16">
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
                <InputField
                  label="نام و نام خانوادگی"
                  required
                  value={formData.name}
                  onChange={handleNameChange}
                  placeholder="نام خود را وارد کنید"
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    انتخاب پزشک
                  </label>
                  <CustomDropdown
                    options={doctorOptions}
                    value={selectedDoctorId}
                    onSelect={handleDoctorSelect}
                    placeholder="پزشک مورد نظر را انتخاب کنید"
                    disabled={doctorOptions.length === 0}
                  />
                </div>

                <InputField
                  label="شماره تماس"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  error={phoneError}
                  dir="ltr"
                />

                <TextareaField
                  label="توضیح مشکل یا نیاز"
                  required
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  placeholder="مشکل خود را به طور مختصر توضیح دهید..."
                />

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
                  disabled={isSubmitting || isSubmittingLocal || !!phoneError}
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

export default memo(Appointment);
