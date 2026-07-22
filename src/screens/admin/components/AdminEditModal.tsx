"use client";

import Button from "@/components/ui/Button";
import { AppointmentCreatePayload } from "@/types";
import { useState } from "react";

interface AdminEditModalProps {
  appointment: AppointmentCreatePayload;
  isSaving: boolean;
  onSave: (appointment: AppointmentCreatePayload) => void;
  onCancel: () => void;
}

export default function AdminEditModal({
  appointment,
  isSaving,
  onSave,
  onCancel,
}: AdminEditModalProps) {
  const [form, setForm] = useState<AppointmentCreatePayload>(appointment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 p-4 backdrop-blur-lg">
      <div className="w-full max-w-2xl rounded-[32px] border border-neutral-300 bg-white p-6 shadow-lg shadow-black/5">
        {/* هدر مودال */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">ویرایش نوبت</h3>
            <p className="mt-1 text-sm text-gray-500">
              تغییر اطلاعات این نوبت در پنل مدیریت
            </p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-full border border-gray-300 px-3 py-2 text-lg text-gray-700 transition hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        {/* فرم ویرایش */}
        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              نام و نام خانوادگی
            </label>
            <input
              value={form.full_name}
              onChange={(e) => setForm({ ...form, full_name: e.target.value })}
              className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              شماره تماس
            </label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              تاریخ
            </label>
            <input
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              توضیحات
            </label>
            <input
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-3 md:col-span-2">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </Button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
