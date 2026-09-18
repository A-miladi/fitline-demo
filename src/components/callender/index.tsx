"use client";
import { useState, useCallback, useMemo, memo } from "react";
import ArrowDown from "../../../public/icon/ArrowDown";
import toPersianDigits, { 
  getJalaliToday, 
  getJalaliMaxDate, 
  isJalaliDateInRange,
  getJalaliDaysInMonth,
  getJalaliDayOfWeek
} from "@/utils/toPersianDigits";

interface CalendarPickerProps {
  selectedDate?: string;
  selectedTime?: string;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
}

const WORKING_HOURS = {
  morning: { start: 8, end: 13 },
  afternoon: { start: 15, end: 20 },
};

const generateWorkingTimes = (): string[] => {
  const times: string[] = [];

  for (
    let hour = WORKING_HOURS.morning.start;
    hour < WORKING_HOURS.morning.end;
    hour++
  ) {
    times.push(`${hour.toString().padStart(2, "0")}:00`);
  }

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
const PERSIAN_MONTHS = [
  "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
  "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
];

interface JalaliDate {
  year: number;
  month: number;
  day: number;
}

const DayButton = memo(
  ({
    dateStr,
    dayNumber,
    isSelected,
    isDisabled,
    onSelect,
  }: {
    dateStr: string;
    dayNumber: number;
    isSelected: boolean;
    isDisabled: boolean;
    onSelect: (date: string) => void;
  }) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
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
        {toPersianDigits(dayNumber.toString())}
      </button>
    );
  },
);

DayButton.displayName = "DayButton";

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
  const [currentMonth, setCurrentMonth] = useState<JalaliDate>(() => getJalaliToday());

  const today = useMemo(() => getJalaliToday(), []);
  const maxDate = useMemo(() => getJalaliMaxDate(1), []);

  const handlePrevMonth = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentMonth((prev) => {
        let year = prev.year;
        let month = prev.month - 1;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
        return { year, month, day: 1 };
      });
    },
    [],
  );

  const handleNextMonth = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setCurrentMonth((prev) => {
        let year = prev.year;
        let month = prev.month + 1;
        if (month > 12) {
          month = 1;
          year += 1;
        }
        return { year, month, day: 1 };
      });
    },
    [],
  );

  const daysInMonthCount = useMemo(() => {
    return getJalaliDaysInMonth(currentMonth.year, currentMonth.month);
  }, [currentMonth.year, currentMonth.month]);

  const startOfMonthDay = useMemo(() => {
    return getJalaliDayOfWeek(currentMonth.year, currentMonth.month, 1);
  }, [currentMonth.year, currentMonth.month]);

  const isDaySelectable = useCallback(
    (year: number, month: number, day: number) => {
      return isJalaliDateInRange(year, month, day, today, maxDate);
    },
    [today, maxDate],
  );

  const daysInMonth = useMemo(() => {
    return Array.from({ length: daysInMonthCount }, (_, i) => {
      const day = i + 1;
      const dateStr = `${currentMonth.year}/${currentMonth.month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;
      return { dateStr, day };
    });
  }, [currentMonth.year, currentMonth.month, daysInMonthCount]);

  const handleDateSelect = useCallback(
    (dateStr: string) => {
      const [year, month, day] = dateStr.split("/").map(Number);
      if (isDaySelectable(year, month, day)) {
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
          {PERSIAN_MONTHS[currentMonth.month - 1]} {toPersianDigits(currentMonth.year.toString())}
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
        {Array.from({ length: startOfMonthDay }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {daysInMonth.map(({ dateStr, day }) => {
          const isSelected = selectedDate === dateStr;
          const isDisabled = !isDaySelectable(currentMonth.year, currentMonth.month, day);

          return (
            <DayButton
              key={dateStr}
              dateStr={dateStr}
              dayNumber={day}
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