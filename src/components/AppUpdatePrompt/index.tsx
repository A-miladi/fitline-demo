"use client";

import { useEffect, useRef, useState } from "react";
import { observeAppUpdates } from "@/utils/pwaUpdates";

export default function AppUpdatePrompt() {
  const [available, setAvailable] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(false);
  const updater = useRef<ReturnType<typeof observeAppUpdates> | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    let disposed = false;
    let registration: ServiceWorkerRegistration | undefined;
    const check = () => {
      if (navigator.onLine && document.visibilityState === "visible") {
        void registration?.update().catch(() => {
          // Keep the current app usable offline; retry on the next check.
        });
      }
    };

    void navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then((result) => {
        if (disposed) return;
        registration = result;
        updater.current = observeAppUpdates(result, navigator.serviceWorker, {
          onReady: () => setAvailable(true),
          onReload: () => window.location.reload(),
        });
        check();
      })
      .catch(() => {
        // A subsequent visit can retry registration if the device is offline.
      });

    const interval = setInterval(check, 60_000);
    window.addEventListener("focus", check);
    window.addEventListener("online", check);
    document.addEventListener("visibilitychange", check);
    return () => {
      disposed = true;
      clearInterval(interval);
      if (timeout.current) clearTimeout(timeout.current);
      updater.current?.dispose();
      updater.current = null;
      window.removeEventListener("focus", check);
      window.removeEventListener("online", check);
      document.removeEventListener("visibilitychange", check);
    };
  }, []);

  const applyUpdate = () => {
    if (updating) return;
    setError(false);
    setUpdating(true);
    try {
      if (!updater.current?.activate()) throw new Error("Update is no longer waiting");
      timeout.current = setTimeout(() => {
        setUpdating(false);
        setError(true);
      }, 15_000);
    } catch {
      setUpdating(false);
      setError(true);
    }
  };

  if (!available) return null;

  return (
    <aside
      role="status"
      aria-live="polite"
      aria-label="به‌روزرسانی برنامه"
      dir="rtl"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-lg rounded-2xl border border-primary/20 bg-white p-5 shadow-2xl shadow-primary/20 sm:bottom-6"
    >
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">↻</span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-gray-900">نسخه جدید راه تناسب آماده است</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            برای دریافت آخرین تغییرات، برنامه را به‌روزرسانی کنید. ابتدا اطلاعات فرم‌های باز را ذخیره کنید.
          </p>
          {error && <p className="mt-2 text-sm text-red-600">به‌روزرسانی کامل نشد. دوباره تلاش کنید یا برنامه را ببندید و باز کنید.</p>}
          <button
            type="button"
            onClick={applyUpdate}
            disabled={updating}
            className="mt-3 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-60"
          >
            {updating ? "در حال به‌روزرسانی…" : error ? "تلاش دوباره" : "به‌روزرسانی برنامه"}
          </button>
        </div>
      </div>
    </aside>
  );
}
