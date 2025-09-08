"use client";
import { useState, useCallback } from "react";
import usePost from "@/hooks/usePost";
import {
  CodeResponse,
  EmailResponse,
  LoginFormProps,
  Step,
} from "@/types/auth";
import { API_URL } from "@/constants/api";
import { validateEmail, validateName, validatePhone } from "@/utils/validation";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

const FORM_CONFIG = {
  email: {
    label: "ایمیل",
    placeholder: "example@email.com",
    type: "email" as const,
    autoComplete: "username" as const,
  },
  firstName: {
    label: "نام",
    placeholder: "نام خود را وارد کنید",
    type: "text" as const,
    autoComplete: "given-name" as const,
  },
  lastName: {
    label: "نام خانوادگی",
    placeholder: "نام خانوادگی خود را وارد کنید",
    type: "text" as const,
    autoComplete: "family-name" as const,
  },
  phone: {
    label: "شماره تلفن",
    placeholder: "09*********",
    type: "tel" as const,
    autoComplete: "tel" as const,
  },
  code: {
    label: "کد تأیید",
    placeholder: "کد ۶ رقمی",
    type: "text" as const,
    inputMode: "numeric" as const,
    autoComplete: "one-time-code" as const,
    maxLength: 6,
  },
};

export default function LoginForm({ toggleMode }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    code: "",
  });
  const [step, setStep] = useState<Step>("EMAIL");
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const validateForm = useCallback(
    (field?: keyof typeof formData) => {
      const errors: Record<string, string> = {};

      if (!field || field === "email") {
        if (!formData.email) {
          errors.email = "ایمیل الزامی است";
        } else if (!validateEmail(formData.email)) {
          errors.email = "فرمت ایمیل نامعتبر است";
        }
      }

      if (step === "EMAIL") {
        if (!field || field === "firstName") {
          if (!formData.firstName) {
            errors.firstName = "نام الزامی است";
          } else if (!validateName(formData.firstName)) {
            errors.firstName = "نام باید فقط شامل حروف باشد";
          }
        }

        if (!field || field === "lastName") {
          if (!formData.lastName) {
            errors.lastName = "نام خانوادگی الزامی است";
          } else if (!validateName(formData.lastName)) {
            errors.lastName = "نام خانوادگی باید فقط شامل حروف باشد";
          }
        }

        if (!field || field === "phone") {
          if (!formData.phone) {
            errors.phone = "شماره تلفن الزامی است";
          } else if (!validatePhone(formData.phone)) {
            errors.phone = "فرمت شماره تلفن نامعتبر است";
          }
        }
      } else if (step === "CODE" && (!field || field === "code")) {
        if (!formData.code) {
          errors.code = "کد تأیید الزامی است";
        } else if (formData.code.length !== 6) {
          errors.code = "کد باید ۶ رقمی باشد";
        }
      }

      setValidationErrors((prev) => ({ ...prev, ...errors }));
      return Object.keys(errors).length === 0;
    },
    [formData, step]
  );

  const handleInputChange = useCallback(
    (field: keyof typeof formData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      if (validationErrors[field]) {
        setValidationErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [validationErrors]
  );

  const { loading: emailLoading, execute: sendEmail } = usePost<
    EmailResponse,
    { email: string; firstName: string; lastName: string; phone: string }
  >(API_URL.Auth.Send_Email, {
    onSuccess: (data) => {
      if (data.success) {
        setStep("CODE");
        setInfo("کد به ایمیل شما ارسال شد.");
        setServerError(null);
      } else {
        setServerError(data.message || "خطا در ارسال ایمیل");
      }
    },
    onError: (error) => {
      setServerError(error || "خطایی رخ داده است. دوباره تلاش کنید.");
    },
  });

  const { loading: codeLoading, execute: verifyCode } = usePost<
    CodeResponse,
    { code: number; email: string }
  >(API_URL.Auth.OTP, {
    onSuccess: (data) => {
      if (data.success && data.data?.token) {
        setInfo("ورود موفقیت آمیز بود!");
        localStorage.setItem("token", data.data.token);
        window.location.reload();
      } else {
        setServerError(data.message || "کد اشتباه است");
      }
    },
    onError: (error) => {
      setServerError(error || "خطایی رخ داده است. دوباره تلاش کنید.");
    },
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setInfo(null);

    if (!validateForm()) return;

    await sendEmail({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
    });
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setInfo(null);

    if (!validateForm("code")) return;

    await verifyCode({
      code: +formData.code,
      email: formData.email,
    });
  };

  const handleGoogleLogin = () => {
    window.location.href = API_URL.Auth.GOOGLE;
  };

  const resendCode = async () => {
    setServerError(null);
    setInfo(null);
    await sendEmail({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
    });
  };

  const isLoading = emailLoading || codeLoading;

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 font-morabba">
          {step === "EMAIL" ? "ثبت‌نام" : "تایید کد"}
        </h2>
        <p className="text-blue-200 text-sm">
          {step === "EMAIL"
            ? "لطفا اطلاعات خود را وارد کنید"
            : "کد ارسال شده به ایمیل را وارد کنید"}
        </p>
      </div>

      <form
        onSubmit={step === "EMAIL" ? handleEmailSubmit : handleCodeSubmit}
        className="space-y-4"
        noValidate
      >
        {step === "EMAIL" ? (
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3">
              <FormField
                id="firstName"
                label={FORM_CONFIG.firstName.label}
                type={FORM_CONFIG.firstName.type}
                value={formData.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
                placeholder={FORM_CONFIG.firstName.placeholder}
                autoComplete={FORM_CONFIG.firstName.autoComplete}
                error={validationErrors.firstName}
                disabled={isLoading}
                onBlur={() => validateForm("firstName")}
              />
              <FormField
                id="lastName"
                label={FORM_CONFIG.lastName.label}
                type={FORM_CONFIG.lastName.type}
                value={formData.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
                placeholder={FORM_CONFIG.lastName.placeholder}
                autoComplete={FORM_CONFIG.lastName.autoComplete}
                error={validationErrors.lastName}
                disabled={isLoading}
                onBlur={() => validateForm("lastName")}
              />
            </div>

            <FormField
              id="phone"
              label={FORM_CONFIG.phone.label}
              type={FORM_CONFIG.phone.type}
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
              placeholder={FORM_CONFIG.phone.placeholder}
              autoComplete={FORM_CONFIG.phone.autoComplete}
              error={validationErrors.phone}
              disabled={isLoading}
              onBlur={() => validateForm("phone")}
            />

            <FormField
              id="email"
              label={FORM_CONFIG.email.label}
              type={FORM_CONFIG.email.type}
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
              placeholder={FORM_CONFIG.email.placeholder}
              autoComplete={FORM_CONFIG.email.autoComplete}
              error={validationErrors.email}
              disabled={isLoading}
              onBlur={() => validateForm("email")}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <FormField
              id="code"
              label={FORM_CONFIG.code.label}
              type={FORM_CONFIG.code.type}
              inputMode={FORM_CONFIG.code.inputMode}
              value={formData.code}
              onChange={(value) =>
                handleInputChange("code", value.replace(/\D/g, ""))
              }
              placeholder={FORM_CONFIG.code.placeholder}
              autoComplete={FORM_CONFIG.code.autoComplete}
              maxLength={FORM_CONFIG.code.maxLength}
              error={validationErrors.code}
              disabled={isLoading}
              onBlur={() => validateForm("code")}
              autoFocus
            />

            <div className="flex justify-between items-center text-sm">
              <button
                type="button"
                className="text-blue-200 underline hover:text-blue-100 transition-colors"
                onClick={resendCode}
                disabled={isLoading}
              >
                ارسال مجدد کد
              </button>

              <div className="text-blue-100">
                ایمیل:{" "}
                <span dir="ltr" className="font-mono">
                  {formData.email}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setStep("EMAIL");
                    setFormData((prev) => ({ ...prev, code: "" }));
                  }}
                  className="mr-2 text-pink-200 underline hover:text-pink-100 transition-colors"
                >
                  تغییر ایمیل
                </button>
              </div>
            </div>
          </div>
        )}

        {serverError && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 text-sm">
            {serverError}
          </div>
        )}
        {info && (
          <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-300 text-sm">
            {info}
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          loading={isLoading}
          className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl"
        >
          {step === "EMAIL" ? "ارسال کد تأیید" : "تایید و ورود"}
        </Button>
      </form>
      <div className="w-full flex items-center justify-between my-8">
        <div className="w-full h-[1px] bg-white/30" />
        <p className="px-3 text-white/50 font-morabba font-medium">یا</p>
        <div className="w-full h-[1px] bg-white/30" />
      </div>

      <Button
        onClick={handleGoogleLogin}
        variant="outline"
        className="w-full py-3 bg-white/5 border-white/20 hover:bg-white/10 text-white"
      >
        ورود با گوگل
      </Button>
    </>
  );
}
