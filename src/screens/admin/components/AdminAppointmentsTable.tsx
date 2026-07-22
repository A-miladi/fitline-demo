// components/admin/AdminAppointmentsTable.tsx
"use client";

import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { AppointmentCreatePayload } from "@/types";

interface AdminAppointmentsTableProps {
  appointments: AppointmentCreatePayload[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  isDeleting: boolean;
  onSearchChange: (value: string) => void;
  onEdit: (appointment: AppointmentCreatePayload) => void;
  onDelete: (id: number) => void;
  onLogout: () => void;
}

export default function AdminAppointmentsTable({
  appointments,
  loading,
  error,
  searchTerm,
  isDeleting,
  onSearchChange,
  onEdit,
  onDelete,
  onLogout,
}: AdminAppointmentsTableProps) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.22)]">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">لیست نوبت‌ها</h2>
          <p className="mt-1 text-sm text-gray-500">
            در این بخش می‌توانید نوبت‌ها را ویرایش یا حذف کنید.
          </p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          <FaSignOutAlt className="h-4 w-4" />
          خروج
        </button>
      </div>

      {/* Search */}
      <div className="border-b border-gray-100 bg-slate-50/70 p-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          جستجو در جدول
        </label>
        <div className="relative">
          <input
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 pr-12 text-right outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="جستجو با نام و نام خانوادگی یا شماره تماس"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="text-gray-700">
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                شناسه
              </th>
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                نام و نام خانوادگی
              </th>
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                شماره تماس
              </th>
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                تاریخ
              </th>
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                توضیحات
              </th>
              <th className="bg-gradient-to-l via-slate-100 px-2 py-3">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  در حال بارگذاری نوبت‌ها...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : appointments.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  هیچ نوبتی یافت نشد.
                </td>
              </tr>
            ) : (
              appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="max-w-[90px] px-2 py-3 text-center text-gray-700">
                    <div className="truncate">{appointment.id}</div>
                  </td>
                  <td className="max-w-[180px] px-2 py-3 text-center font-medium text-gray-900">
                    <div className="truncate">{appointment.full_name}</div>
                  </td>
                  <td className="max-w-[140px] px-2 py-3 text-center text-gray-700">
                    <div className="truncate">{appointment.phone}</div>
                  </td>
                  <td className="max-w-[140px] px-2 py-3 text-center text-gray-700">
                    <div className="truncate">{appointment.date}</div>
                  </td>
                  <td className="max-w-[220px] px-2 py-3 text-center text-gray-700">
                    <div className="truncate">{appointment.description}</div>
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => onEdit(appointment)}
                        className="flex h-10 w-10 cursor-pointer hover:shadow-lg items-center justify-center rounded-xl text-white transition hover:bg-green-700/5"
                        aria-label="ویرایش"
                      >
                        <FiEdit3 size={20} color="green" />
                      </button>
                      <button
                        onClick={() => onDelete(appointment.id)}
                        disabled={isDeleting}
                        className="flex h-10 w-10 cursor-pointer hover:shadow-lg items-center justify-center rounded-xl text-white transition hover:bg-red-600/5 disabled:opacity-50"
                        aria-label="حذف"
                      >
                        <FiTrash2 size={20} color="red" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
