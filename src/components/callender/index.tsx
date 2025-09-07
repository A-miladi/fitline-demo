"use client";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import ArrowDown from "../../../public/icon/ArrowDown";
import toPersianDigits from "@/utils/toPersianDigits";

dayjs.extend(jalaliday);
dayjs.locale("fa");

interface CalendarPickerProps {
  selectedDate?: string; // تاریخ انتخاب‌شده (جلالی)
  selectedTime?: string; // ساعت انتخاب‌شده
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const TIMES = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const WEEK_DAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

export default function CalendarPicker({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    dayjs().calendar("jalali")
  );

  const daysInMonth = Array.from(
    { length: currentMonth.daysInMonth() },
    (_, i) => currentMonth.date(i + 1)
  );

  const startOfMonth = currentMonth.startOf("month").day();

  return (
    <div className="p-4 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          className="px-2 py-1 text-sm bg-neutral-100 rounded"
        >
          <ArrowDown color="black" className="rotate-[270deg]" />
        </button>
        <span className="font-bold">
          {toPersianDigits(currentMonth.calendar("jalali").format("MMMM YYYY"))}
        </span>
        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          className="px-2 py-1 text-sm bg-neutral-100 rounded"
        >
          <ArrowDown color="black" className="rotate-90" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-500 font-medium mb-2">
        {WEEK_DAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center mb-4">
        {Array.from({ length: startOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {daysInMonth.map((d) => {
          const dateStr = d.calendar("jalali").format("YYYY/MM/DD");
          const isSelected = selectedDate === dateStr;
          return (
            <button
              key={dateStr}
              onClick={() => onDateSelect(dateStr)}
              className={`p-2 rounded-lg cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-black/30 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {d.calendar("jalali").date()}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t pt-6 border-neutral-200">
        {TIMES.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`p-2 bg-neutral-50 font-bold text-neutral-500 cursor-pointer rounded-lg ${
              selectedTime === time
                ? "bg-gradient-to-tr from-primary to-secondary text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {toPersianDigits(time)}
          </button>
        ))}
      </div>
    </div>
  );
}
