"use client";
import { useState, useCallback, useMemo, memo } from "react";
import dayjs, { Dayjs } from "dayjs";
import jalaliday from "jalaliday";
import ArrowDown from "../../../public/icon/ArrowDown";
import toPersianDigits from "@/utils/toPersianDigits";

dayjs.extend(jalaliday);
dayjs.locale("fa");

interface CalendarPickerProps {
  selectedDate?: string;
  selectedTime?: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

// ساعات کاری: ۸ تا ۱۳ و ۱۵ تا ۲۰
const WORKING_HOURS = {
  morning: { start: 8, end: 13 },
  afternoon: { start: 15, end: 20 },
};

// تولید ساعات کاری
const generateWorkingTimes = (): string[] => {
  const times: string[] = [];

  // ساعات صبح: ۸ تا ۱۲:۵۹
  for (
    let hour = WORKING_HOURS.morning.start;
    hour < WORKING_HOURS.morning.end;
    hour++
  ) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  // ساعات عصر: ۱۵ تا ۱۹:۵۹
  for (
    let hour = WORKING_HOURS.afternoon.start;
    hour < WORKING_HOURS.afternoon.end;
    hour++
  ) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  return times;
};

const TIMES = generateWorkingTimes();
const WEEK_DAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

// کامپوننت دکمه روز با memo
const DayButton = memo(
  ({
    date,
    dateStr,
    isSelected,
    isDisabled,
    onSelect,
  }: {
    date: Dayjs;
    dateStr: string;
    isSelected: boolean;
    isDisabled: boolean;
    onSelect: (date: string) => void;
  }) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("DayButton clicked:", dateStr); // لاگ برای دیباگ
        if (!isDisabled) {
          onSelect(dateStr);
        }
      },
      [dateStr, isDisabled, onSelect],
    );

    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${
          isSelected
            ? "bg-gradient-to-tr from-primary to-secondary shadow-lg shadow-black/30 text-white"
            : isDisabled
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100 text-gray-700 hover:scale-105"
        }`}
      >
        {date.calendar("jalali").date()}
      </button>
    );
  },
);

DayButton.displayName = "DayButton";

// کامپوننت دکمه ساعت با memo
const TimeButton = memo(
  ({
    time,
    isSelected,
    isDisabled,
    onSelect,
  }: {
    time: string;
    isSelected: boolean;
    isDisabled: boolean;
    onSelect: (time: string) => void;
  }) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("TimeButton clicked:", time); // لاگ برای دیباگ
        if (!isDisabled) {
          onSelect(time);
        }
      },
      [time, isDisabled, onSelect],
    );

    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className={`p-2 bg-neutral-50 font-bold text-neutral-500 cursor-pointer rounded-lg transition-all duration-200 ${
          isSelected
            ? "bg-gradient-to-tr from-primary to-secondary text-white shadow-md"
            : isDisabled
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "hover:bg-gray-200 hover:scale-105"
        }`}
      >
        {toPersianDigits(time)}
      </button>
    );
  },
);

TimeButton.displayName = "TimeButton";

export default function CalendarPicker({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    dayjs().calendar("jalali"),
  );

  // محاسبه تاریخ امروز و یک ماه آینده
  const today = useMemo(() => dayjs().calendar("jalali"), []);
  const maxDate = useMemo(() => today.add(1, "month"), [today]);

  // تغییر ماه با useCallback
  const handlePrevMonth = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentMonth((prev) => prev.subtract(1, "month"));
    },
    [],
  );

  const handleNextMonth = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentMonth((prev) => prev.add(1, "month"));
    },
    [],
  );

  // تولید روزهای ماه
  const daysInMonth = useMemo(() => {
    return Array.from({ length: currentMonth.daysInMonth() }, (_, i) =>
      currentMonth.date(i + 1),
    );
  }, [currentMonth]);

  const startOfMonth = useMemo(() => {
    return currentMonth.startOf("month").day();
  }, [currentMonth]);

  // بررسی اینکه آیا روز قابل انتخاب است
  const isDaySelectable = useCallback(
    (date: Dayjs) => {
      const dateStr = date.calendar("jalali").format("YYYY/MM/DD");
      const todayStr = today.format("YYYY/MM/DD");
      const maxDateStr = maxDate.format("YYYY/MM/DD");

      return dateStr >= todayStr && dateStr <= maxDateStr;
    },
    [today, maxDate],
  );

  // هندل کردن انتخاب تاریخ
  const handleDateSelect = useCallback(
    (dateStr: string) => {
      console.log("Date selected:", dateStr); // لاگ برای دیباگ
      const date = dayjs(dateStr, "YYYY/MM/DD").calendar("jalali");
      if (isDaySelectable(date)) {
        onDateSelect(dateStr);
      }
    },
    [isDaySelectable, onDateSelect],
  );

  const handleTimeSelect = useCallback(
    (time: string) => {
      onTimeSelect(time);
    },
    [onTimeSelect],
  );

  return (
    <div
      className="p-4 rounded-xl bg-white shadow-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="px-2 py-1 text-sm bg-neutral-100 rounded hover:bg-neutral-200 transition-colors"
        >
          <ArrowDown color="black" className="rotate-[270deg]" />
        </button>
        <span className="font-bold">
          {toPersianDigits(currentMonth.calendar("jalali").format("MMMM YYYY"))}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="px-2 py-1 text-sm bg-neutral-100 rounded hover:bg-neutral-200 transition-colors"
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
          const isDisabled = !isDaySelectable(d);

          return (
            <DayButton
              key={dateStr}
              date={d}
              dateStr={dateStr}
              isSelected={isSelected}
              isDisabled={isDisabled}
              onSelect={handleDateSelect}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t pt-6 border-neutral-200">
        {TIMES.map((time) => {
          const isSelected = selectedTime === time;
          // اگر تاریخ انتخاب نشده باشد، ساعت‌ها غیرفعال هستند
          const isDisabled = !selectedDate;

          return (
            <TimeButton
              key={time}
              time={time}
              isSelected={isSelected}
              isDisabled={isDisabled}
              onSelect={handleTimeSelect}
            />
          );
        })}
      </div>

      <div className="mt-4 text-xs text-gray-400 border-t pt-3 border-neutral-100">
        <span>ساعات کاری: ۸:۰۰ تا ۱۳:۰۰ و ۱۵:۰۰ تا ۲۰:۰۰</span>
        <span className="mr-2">|</span>
        <span>قابل انتخاب تا یک ماه آینده</span>
      </div>

      {selectedDate && (
        <div className="mt-2 text-xs text-primary">
          تاریخ انتخاب شده: {toPersianDigits(selectedDate)}
        </div>
      )}
    </div>
  );
}
