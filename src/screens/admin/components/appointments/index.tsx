import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function Appointments() {
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
    <div
      dir="rtl"
      className="p-5 text-black md:h-2/3 md:w-1/3 w-full flex flex-col rounded-2xl bg-white/20 border border-black/10 backdrop-blur-md shadow-lg transition"
    >
      <h2 className="font-semibold text-lg mb-3 flex w-full items-center justify-center gap-2 border-b pb-4 border-b-black/20">
        <FiCalendar size={20} />
        نوبت‌های امروز
      </h2>

      <div className="h-full w-full">
        <div className="max-h-64 md:max-h-[85%] w-full md:h-full flex flex-col gap-2 overflow-y-scroll">
          {appointments.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between bg-white/10 rounded-lg p-3 text-sm shadow-lg"
            >
              <span className="font-medium w-1/3">{item.name}</span>

              <span className="text-xs w-1/3 border-x border-black/30 flex items-center justify-center">
                ساعت {item.time}
              </span>
              <span
                className={`text-xs w-1/3 flex items-center justify-end ${
                  item.type === "حضوری" ? "text-green-400" : "text-blue-400"
                }`}
              >
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 w-full text-white cursor-pointer bg-gradient-to-r from-primary to-secondary h-12 md:h-14 rounded-lg font-medium">
        مشاهده همه موارد
      </button>
    </div>
  );
}
