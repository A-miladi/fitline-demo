"use client";
import { useState, useCallback } from "react";
import usePost from "@/hooks/usePost";
import { AdminLoginData, AdminLoginResponse } from "@/types";
import { API_URL } from "@/constants/api";
import { validateEmail } from "@/utils/validation";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

export default function AdminLoginForm() {
  const [formData, setFormData] = useState<AdminLoginData>({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [serverError, setServerError] = useState<string | null>(null);

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};

    if (!formData.email) {
      errors.email = "ایمیل الزامی است";
    } else if (!validateEmail(formData.email)) {
      errors.email = "فرمت ایمیل نامعتبر است";
    }

    if (!formData.password) {
      errors.password = "پسوورد الزامی است";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback(
    (field: keyof AdminLoginData, value: string) => {
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

  const { loading, execute } = usePost<AdminLoginResponse, AdminLoginData>(
    API_URL.Auth.AdminLogin,
    {
      onSuccess: (data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("admin", JSON.stringify(data));
          window.location.href = "/admin";
        } else {
          setServerError("خطا در دریافت توکن");
        }
      },
      onError: (error) => {
        setServerError(error || "خطایی رخ داده است. دوباره تلاش کنید.");
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    await execute(formData);
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 font-morabba">
          ورود ادمین
        </h2>
        <p className="text-blue-200 text-sm">
          لطفا اطلاعات خود را وارد کنید
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField
          id="email"
          label="ایمیل"
          type="email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          placeholder="admin@fitline.com"
          autoComplete="username"
          error={validationErrors.email}
          disabled={loading}
          onBlur={() => validateForm()}
        />

        <FormField
          id="password"
          label="پسوورد"
          type="password"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
          placeholder="پسوورد خود را وارد کنید"
          autoComplete="current-password"
          error={validationErrors.password}
          disabled={loading}
          onBlur={() => validateForm()}
        />

        {serverError && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 text-sm">
            {serverError}
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl"
        >
          ورود به پنل ادمین
        </Button>
      </form>
    </>
  );
}

