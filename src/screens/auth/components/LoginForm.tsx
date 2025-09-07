"use client";
import { useState } from "react";
import usePost from "@/hooks/usePost";
import {
  CodeResponse,
  EmailResponse,
  LoginFormProps,
  Step,
} from "@/types/auth";
import { API_URL } from "@/constants/api";

export default function LoginForm({ toggleMode }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("EMAIL");
  const [code, setCode] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const { loading: emailLoading, execute: sendEmail } = usePost<
    EmailResponse,
    { email: string }
  >(API_URL.Auth.Send_Email, {
    onSuccess: (data) => {
      if (data.success) {
        setStep("CODE");
        setInfo("کد به ایمیل شما ارسال شد.");
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
    { code: number }
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
    await sendEmail({ email });
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setInfo(null);
    await verifyCode({ code: +code });
  };

  const handleGoogleLogin = () => {
    window.location.href = API_URL.Auth.GOOGLE;
  };

  const resendCode = async () => {
    setServerError(null);
    setInfo(null);
    await sendEmail({ email });
  };

  const isLoading = emailLoading || codeLoading;

  return (
    <>
      <div className="text-center mb-4 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 font-morabba">
          ورود/ثبت‌نام با ایمیل
        </h2>
        <p className="text-blue-200 text-xs md:text-sm">
          {step === "EMAIL"
            ? "ایمیل خود را وارد کنید"
            : "کد ارسال شده به ایمیل را وارد کنید"}
        </p>
      </div>

      <form
        onSubmit={step === "EMAIL" ? handleEmailSubmit : handleCodeSubmit}
        className="space-y-6"
      >
        {step === "EMAIL" ? (
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-100 font-iransans"
            >
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
              autoFocus
              autoComplete="username"
              disabled={isLoading}
            />
          </div>
        ) : (
          <div className="space-y-2">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-blue-100 font-iransans"
            >
              کد تأیید
            </label>
            <input
              type="text"
              id="code"
              inputMode="numeric"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              required
              pattern="\d+"
              maxLength={6}
              autoFocus
              placeholder="کد ۶ رقمی"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 font-iransans"
              autoComplete="one-time-code"
              disabled={isLoading}
            />
            <button
              type="button"
              className="text-xs text-blue-200 underline mt-1"
              onClick={resendCode}
              disabled={isLoading}
            >
              ارسال مجدد کد
            </button>
            <div className="text-xs text-blue-100 mt-2 text-left">
              ایمیل:{" "}
              <span dir="ltr" className="font-mono">
                {email}
              </span>
              <button
                type="button"
                onClick={() => {
                  setStep("EMAIL");
                  setCode("");
                }}
                className="ml-2 text-pink-200 underline"
              >
                تغییر ایمیل
              </button>
            </div>
          </div>
        )}

        {serverError && (
          <div className="text-red-300 font-iransans text-sm">
            {serverError}
          </div>
        )}
        {info && (
          <div className="text-green-300 font-iransans text-sm">{info}</div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed font-morabba"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="rounded-full h-5 w-5 border-b-2 border-white ml-2 animate-spin"></div>
                {step === "EMAIL" ? "در حال ارسال..." : "در حال ورود..."}
              </div>
            ) : (
              <span>
                {step === "EMAIL" ? "ارسال کد به ایمیل" : "ورود/تایید"}
              </span>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 bg-white/10 border border-white/20 hover:bg-white/20 rounded-xl text-white font-bold transition-all duration-300 font-iransans"
        >
          ورود با گوگل
        </button>
      </div>
    </>
  );
}
