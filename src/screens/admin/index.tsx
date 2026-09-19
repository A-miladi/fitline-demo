"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import dayjs from "dayjs";
import Navbar from "@/components/navbar";
import useFetch from "@/hooks/useFetch";
import useDelete from "@/hooks/useDelete";
import usePut from "@/hooks/usePut";
import { API_URL } from "@/constants/api";
import { AppointmentCreatePayload } from "@/types";
import AdminStats from "./components/AdminStats";
import AdminLoginForm from "./components/AdminLoginForm";
import AdminAppointmentsTable from "./components/AdminAppointmentsTable";
import AdminEditModal from "./components/AdminEditModal";

const STATIC_USERNAME = "admin";
const STATIC_PASSWORD = "123456";

const mapAppointment = (
  item: any,
): AppointmentCreatePayload => ({
  id: item._id ?? item.id ?? 0,
  full_name: item.fullName ?? item.full_name ?? "—",
  phone: item.phoneNumber ?? item.phone ?? "—",
  date: item.date ?? "—",
  description: item.description ?? "—",
  doctor_id: item.doctorId ?? item.doctor_id ?? "",
});

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const [appointments, setAppointments] = useState<AppointmentCreatePayload[]>(
    [],
  );
  const [searchTerm, setSearchTerm] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<AppointmentCreatePayload | null>(
    null,
  );

  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const isUpdatingRef = useRef(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    data,
    loading,
    error: fetchError,
    refetch,
  } = useFetch<AppointmentCreatePayload[]>(API_URL.Appointments, {
    autoFetch: true,
  });

  const { loading: isDeleting, execute: deleteAppointment } = useDelete<
    unknown,
    number
  >(API_URL.Appointments, {
    onSuccess: () => {
      showToast("success", "نوبت با موفقیت حذف شد");
    },
    onError: (error) => {
      showToast("error", `خطا در حذف: ${error}`);
      refetch();
    },
  });

  const { loading: isSaving, execute: updateAppointment } = usePut<
    AppointmentCreatePayload,
    AppointmentCreatePayload
  >(API_URL.Appointments, {
    onSuccess: (updatedAppointment) => {
      if (isUpdatingRef.current) return;
      isUpdatingRef.current = true;

      // به‌روزرسانی محلی
      setAppointments((current) =>
        current.map((item) =>
          item.id === updatedAppointment.id
            ? mapAppointment(updatedAppointment)
            : item,
        ),
      );
      setEditingId(null);
      setEditForm(null);

      showToast("success", "نوبت با موفقیت ویرایش شد");

      setTimeout(() => {
        isUpdatingRef.current = false;
        refetch();
      }, 1000);
    },
    onError: (error) => {
      isUpdatingRef.current = false;
      showToast("error", `خطا در ویرایش: ${error}`);
    },
  });

  useEffect(() => {
    if (data && !isUpdatingRef.current) {
      setAppointments(data.map(mapAppointment));
    }
  }, [data]);

  // Clear toast on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // Show toast helper
  const showToast = useCallback(
    (type: "success" | "error", message: string) => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }

      setToast({ type, message });

      toastTimeoutRef.current = setTimeout(() => {
        setToast(null);
      }, 3000);
    },
    [],
  );

  // ===== Computed =====
  const { todayCount, weekCount } = useMemo(() => {
    const now = dayjs();
    const todayStr = now.format("YYYY-MM-DD");
    const weekAgo = now.subtract(7, "day").format("YYYY-MM-DD");

    let today = 0;
    let week = 0;

    appointments.forEach((apt) => {
      const aptDate = dayjs(apt.date).format("YYYY-MM-DD");
      if (aptDate === todayStr) today++;
      if (aptDate >= weekAgo && aptDate <= todayStr) week++;
    });

    return { todayCount: today, weekCount: week };
  }, [appointments]);

  const stats = useMemo(
    () => ({
      count: appointments.length,
      latest: appointments[0]?.full_name ?? "--",
    }),
    [appointments],
  );

  const filteredAppointments = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return appointments;

    return appointments.filter((appointment) => {
      const searchText =
        `${appointment.full_name} ${appointment.phone}`.toLowerCase();
      return searchText.includes(normalizedSearch);
    });
  }, [appointments, searchTerm]);

  // ===== Handlers =====
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError("");
      showToast("success", "ورود با موفقیت انجام شد");
    } else {
      setAuthError("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setAppointments([]);
    setSearchTerm("");
    setEditingId(null);
    setEditForm(null);
    showToast("success", "خروج با موفقیت انجام شد");
  };

  // ===== Handle Delete - اصلاح شده =====
  const handleDelete = useCallback(
    async (id: number) => {
      // Confirm deletion
      if (!confirm("آیا از حذف این نوبت اطمینان دارید؟")) {
        return;
      }

      if (isUpdatingRef.current || isDeleting) {
        return;
      }

      isUpdatingRef.current = true;

      try {
        // حذف از دیتابیس
        await deleteAppointment(id);

        // حذف از state محلی (Optimistic Update)
        setAppointments((current) => current.filter((item) => item.id !== id));

        showToast("success", "نوبت با موفقیت حذف شد");

        // بعد از ۱ ثانیه refetch برای هماهنگی با سرور
        setTimeout(() => {
          isUpdatingRef.current = false;
          refetch();
        }, 1000);
      } catch (error) {
        isUpdatingRef.current = false;
        showToast("error", "خطا در حذف نوبت");
        // در صورت خطا، دوباره fetch کن
        refetch();
      }
    },
    [deleteAppointment, refetch, showToast, isDeleting],
  );

  // ===== Handle Edit =====
  const handleEdit = useCallback((appointment: AppointmentCreatePayload) => {
    setEditingId(appointment.id);
    setEditForm({ ...appointment });
  }, []);

  // ===== Handle Save Edit =====
  const handleSaveEdit = useCallback(
    (updatedAppointment: AppointmentCreatePayload) => {
      if (isUpdatingRef.current || isSaving) {
        return;
      }

      const payload: AppointmentCreatePayload = {
        id: updatedAppointment.id,
        full_name: updatedAppointment.full_name,
        phone: updatedAppointment.phone,
        date: updatedAppointment.date,
        description: updatedAppointment.description,
        doctor_id: updatedAppointment.doctor_id,
      };

      updateAppointment(payload, `/${updatedAppointment.id}`);
    },
    [updateAppointment, isSaving],
  );

  // ===== Handle Cancel Edit =====
  const handleCancelEdit = useCallback(() => {
    setEditingId(null);
    setEditForm(null);
    // ❌ حذف refetch از اینجا
    // refetch();
  }, []);

  // ===== Handle Refresh =====
  const handleRefresh = useCallback(() => {
    if (!isUpdatingRef.current) {
      refetch();
    }
  }, [refetch]);

  // Show loading state
  if (loading && !data) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-gray-600">در حال بارگذاری نوبت‌ها...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,250,252,1))]"
      dir="rtl"
    >
      <Navbar />

      {toast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div
            className={`rounded-2xl border px-6 py-4 text-center shadow-lg backdrop-blur-sm ${
              toast.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      <section className="py-10 lg:py-16 px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <AdminStats
            count={stats.count}
            latest={stats.latest}
            isAuthenticated={isAuthenticated}
            todayCount={todayCount}
            weekCount={weekCount}
          />

          {!isAuthenticated ? (
            <AdminLoginForm
              username={username}
              password={password}
              error={authError}
              onUsernameChange={setUsername}
              onPasswordChange={setPassword}
              onSubmit={handleLogin}
            />
          ) : (
            <>
              <AdminAppointmentsTable
                appointments={filteredAppointments}
                loading={loading}
                error={fetchError}
                searchTerm={searchTerm}
                isDeleting={isDeleting || isUpdatingRef.current}
                onSearchChange={setSearchTerm}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onLogout={handleLogout}
              />

              {editingId && editForm && (
                <AdminEditModal
                  appointment={editForm}
                  isSaving={isSaving || isUpdatingRef.current}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
