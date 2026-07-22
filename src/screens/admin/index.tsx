"use client";

import { useEffect, useMemo, useState } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/Button";
import useFetch from "@/hooks/useFetch";
import useDelete from "@/hooks/useDelete";
import usePut from "@/hooks/usePut";
import { API_URL } from "@/constants/api";

type AppointmentApiItem = {
  id?: number;
  full_name?: string;
  phone: string;
  date: string;
  description: string;
  doctor_id?: number;
  created_at?: string;
};

type Appointment = {
  id: number;
  fullName: string;
  phoneNumber: string;
  date: string;
  description: string;
  doctorId?: number;
  createdAt?: string;
};

const STATIC_USERNAME = "admin";
const STATIC_PASSWORD = "123456";

const mapAppointment = (item: AppointmentApiItem): Appointment => ({
  id: item.id ?? 0,
  fullName: item.full_name || "—",
  phoneNumber: item.phone || "—",
  date: item.date || "—",
  description: item.description || "—",
  doctorId: item.doctor_id,
  createdAt: item.created_at,
});

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Appointment | null>(null);

  const {
    data,
    loading,
    error: fetchError,
    refetch,
  } = useFetch<AppointmentApiItem[]>(API_URL.Appointments);
  const { loading: isDeleting, execute: deleteAppointment } = useDelete<
    unknown,
    number
  >(API_URL.Appointments);
  const { loading: isSaving, execute: updateAppointment } = usePut<
    AppointmentApiItem,
    AppointmentApiItem
  >(API_URL.Appointments, {
    onSuccess: (updatedAppointment) => {
      setAppointments((current) =>
        current.map((item) =>
          item.id === updatedAppointment.id
            ? mapAppointment(updatedAppointment)
            : item,
        ),
      );
      setEditingId(null);
      setEditForm(null);
      refetch();
    },
  });

  useEffect(() => {
    if (data) {
      setAppointments(data.map(mapAppointment));
    }
  }, [data]);

  const stats = useMemo(
    () => ({
      count: appointments.length,
      latest: appointments[0]?.fullName ?? "--",
    }),
    [appointments],
  );

  const filteredAppointments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return appointments;
    }

    return appointments.filter((appointment) => {
      const searchText =
        `${appointment.fullName} ${appointment.phoneNumber}`.toLowerCase();
      return searchText.includes(normalizedSearch);
    });
  }, [appointments, searchTerm]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("نام کاربری یا رمز عبور اشتباه است.");
  };

  const handleDelete = (id: number) => {
    deleteAppointment(id);
    refetch();
  };

  const handleEdit = (appointment: Appointment) => {
    setEditingId(appointment.id);
    setEditForm({ ...appointment });
    refetch();
  };

  const handleSaveEdit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!editForm) {
      return;
    }

    const payload: AppointmentApiItem = {
      full_name: editForm.fullName,
      phone: editForm.phoneNumber,
      date: editForm.date,
      description: editForm.description,
      doctor_id: editForm.doctorId,
    };

    updateAppointment(payload, `/${editForm.id}`);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
    refetch();
  };

  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,250,252,1))]"
      dir="rtl"
    >
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/40 bg-gradient-to-br from-[#583f99] via-[#5b46a7] to-[#32bcce] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_40%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              پنل ادمین راه تناسب
            </div>
            <h1 className="mb-4 font-morabba text-4xl font-bold leading-tight md:text-5xl">
              مدیریت حرفه‌ای نوبت‌های مراجعه‌کنندگان
            </h1>
            <p className="text-lg leading-8 text-white/85">
              یک تجربه مدیریتی شفاف و مدرن برای مشاهده، ویرایش و حذف نوبت‌ها در
              یک نگاه.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/20 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M7 3v4m10-4v4M6 11h2m4 0h2m4 0h2M6 15h2m4 0h2m4 0h2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white/70">امروز</p>
                <p className="text-lg font-semibold">
                  {stats.count} نوبت ثبت‌شده
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 7h10M7 12h10M7 17h7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">تعداد نوبت‌ها</p>
              <p className="mt-2 text-2xl font-bold text-primary">
                {stats.count}
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 20s-6-4.35-6-10a4 4 0 1 1 8 0 4 4 0 1 1 8 0c0 5.65-6 10-6 10Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">آخرین ثبت‌کننده</p>
              <p className="mt-2 text-lg font-bold text-gray-900">
                {stats.latest}
              </p>
            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m7 12 3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">وضعیت دسترسی</p>
              <p className="mt-2 text-lg font-bold text-emerald-700">
                {isAuthenticated ? "ورود شده" : "نیاز به ورود"}
              </p>
            </div>
          </div>

          {!isAuthenticated ? (
            <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_-28px_rgba(88,63,153,0.35)]">
              <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <svg
                      className="h-7 w-7 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 3a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V7a4 4 0 0 1 4-4Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M9 11v4m3-4v4m3-4v4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900">
                    دسترسی مدیریتی
                  </h2>
                  <p className="max-w-md text-base leading-8 text-gray-600">
                    برای مشاهده و مدیریت نوبت‌ها، ابتدا با نام کاربری و رمز عبور
                    ادمین وارد شوید.
                  </p>
                </div>

                <div className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">
                    ورود به پنل ادمین
                  </h3>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        نام کاربری
                      </label>
                      <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        placeholder="admin"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        رمز عبور
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        placeholder="123456"
                      />
                    </div>

                    {error ? (
                      <p className="text-sm text-red-500">{error}</p>
                    ) : null}

                    <Button type="submit">ورود</Button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.22)]">
                <div className="flex flex-col gap-4 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white p-8 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      لیست نوبت‌ها
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      در این بخش می‌توانید نوبت‌ها را ویرایش یا حذف کنید.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    خروج
                  </button>
                </div>

                <div className="border-b border-gray-100 bg-slate-50/70 p-4">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    جستجو در جدول
                  </label>
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-right outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="جستجو با نام و نام خانوادگی یا شماره تماس"
                  />
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className=" text-gray-700">
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          شناسه
                        </th>
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          نام و نام خانوادگی
                        </th>
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          شماره تماس
                        </th>
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          تاریخ
                        </th>
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          توضیحات
                        </th>
                        <th className="px-2 py-3 bg-gradient-to-l via-slate-100">
                          عملیات
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-4 py-8 text-center text-gray-500"
                          >
                            در حال بارگذاری نوبت‌ها...
                          </td>
                        </tr>
                      ) : fetchError ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-4 py-8 text-center text-red-500"
                          >
                            {fetchError}
                          </td>
                        </tr>
                      ) : filteredAppointments.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-4 py-8 text-center text-gray-500"
                          >
                            هیچ نوبتی یافت نشد.
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((appointment) => (
                          <tr
                            key={appointment.id}
                            className="border-t border-gray-100 hover:bg-gray-50"
                          >
                            <td className="max-w-[90px] px-2 py-3 text-center text-gray-700">
                              <div className="truncate">{appointment.id}</div>
                            </td>
                            <td className="max-w-[180px] px-2 py-3 text-center font-medium text-gray-900">
                              <div className="truncate">
                                {appointment.fullName}
                              </div>
                            </td>
                            <td className="max-w-[140px] px-2 py-3 text-center text-gray-700">
                              <div className="truncate">
                                {appointment.phoneNumber}
                              </div>
                            </td>
                            <td className="max-w-[140px] px-2 py-3 text-center text-gray-700">
                              <div className="truncate">{appointment.date}</div>
                            </td>
                            <td className="max-w-[220px] px-2 py-3 text-center text-gray-700">
                              <div className="truncate">
                                {appointment.description}
                              </div>
                            </td>
                            <td className="px-2 py-3">
                              <div className="flex justify-center gap-2">
                                <button
                                  onClick={() => handleEdit(appointment)}
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
                                  aria-label="ویرایش"
                                >
                                  <FiEdit3 size={16} />
                                </button>
                                <button
                                  onClick={() => handleDelete(appointment.id)}
                                  disabled={isDeleting}
                                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-red-500 text-white transition hover:bg-red-600 disabled:opacity-50"
                                  aria-label="حذف"
                                >
                                  <FiTrash2 size={16} />
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

              {editingId && editForm ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-lg p-4">
                  <div className="w-full max-w-2xl rounded-[32px] bg-white p-6 shadow-lg shadow-black/5 border border-neutral-300">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          ویرایش نوبت
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          تغییر اطلاعات این نوبت در پنل مدیریت
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="rounded-full border border-gray-300 px-3 py-2 text-lg text-gray-700 transition hover:bg-gray-100"
                      >
                        ×
                      </button>
                    </div>

                    <form
                      onSubmit={handleSaveEdit}
                      className="grid gap-4 md:grid-cols-2"
                    >
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          نام و نام خانوادگی
                        </label>
                        <input
                          value={editForm.fullName}
                          onChange={(event) =>
                            setEditForm((current) =>
                              current
                                ? { ...current, fullName: event.target.value }
                                : current,
                            )
                          }
                          className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          شماره تماس
                        </label>
                        <input
                          value={editForm.phoneNumber}
                          onChange={(event) =>
                            setEditForm((current) =>
                              current
                                ? {
                                    ...current,
                                    phoneNumber: event.target.value,
                                  }
                                : current,
                            )
                          }
                          className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          تاریخ
                        </label>
                        <input
                          value={editForm.date}
                          onChange={(event) =>
                            setEditForm((current) =>
                              current
                                ? { ...current, date: event.target.value }
                                : current,
                            )
                          }
                          className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          توضیحات
                        </label>
                        <input
                          value={editForm.description}
                          onChange={(event) =>
                            setEditForm((current) =>
                              current
                                ? {
                                    ...current,
                                    description: event.target.value,
                                  }
                                : current,
                            )
                          }
                          className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
                        />
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-3">
                        <Button type="submit">ذخیره تغییرات</Button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="rounded-xl border w-full border-gray-300 px-4 py-3 text-sm font-medium text-gray-700"
                        >
                          انصراف
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
