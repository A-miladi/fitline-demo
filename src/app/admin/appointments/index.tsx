import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function Appointments() {
  // Mock data
  const appointments = [
    { id: 1, name: "علی رضایی", time: "۱۰:۳۰", type: "حضوری" },
    { id: 2, name: "سارا احمدی", time: "۱۲:۰۰", type: "آنلاین" },
    { id: 3, name: "مهدی محمدی", time: "۱۴:۱۵", type: "حضوری" },
    { id: 4, name: "نگین کریمی", time: "۱۶:۴۵", type: "آنلاین" },
    { id: 5, name: "علی رضایی", time: "۱۰:۳۰", type: "حضوری" },
    { id: 6, name: "سارا احمدی", time: "۱۲:۰۰", type: "آنلاین" },
    { id: 7, name: "مهدی محمدی", time: "۱۴:۱۵", type: "حضوری" },
    { id: 8, name: "نگین کریمی", time: "۱۶:۴۵", type: "آنلاین" },
  ];

  return (
    <div className="p-5 flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition">
      <h2 className="font-semibold text-lg mb-3 flex w-full items-center justify-center gap-2 border-b pb-4 border-b-white/20">
        <FiCalendar size={20} />
        نوبت‌های امروز
      </h2>

      <div className="h-full w-full">
        <div className="max-h-64 md:max-h-[85%] w-full flex flex-col gap-2 overflow-y-scroll pl-2">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="flex items-center justify-between bg-white/10 rounded-lg p-3 text-sm shadow"
            >
              <span className="font-medium">{appt.name}</span>

              <div className="flex gap-4 text-center">
                <span className="text-xs text-gray-300 flex items-center justify-center">
                  ساعت {appt.time}
                </span>
                <span
                  className={`text-xs w-20 flex items-center justify-center ${
                    appt.type === "حضوری" ? "text-green-400" : "text-blue-400"
                  }`}
                >
                  {appt.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 w-full cursor-pointer bg-gradient-to-r from-primary to-secondary h-14 rounded-lg font-medium">
        مشاهده همه موارد
      </button>
    </div>
  );
}
