import dayjs from "dayjs";
import jalaliday from "jalaliday/dayjs";

dayjs.extend(jalaliday);

const persianDateFormatter = new Intl.DateTimeFormat("en-US-u-ca-persian", {
  year: "numeric", month: "numeric", day: "numeric",
});

export default function toPersianDigits(value: string) {
  const charCodeZero = "۰".charCodeAt(0);
  return String(value).replace(/[0-9]/g, (w) =>
    String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
  );
}

export const toPersianNumber = (value: string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return value.replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
};

export function gregorianToJalali(gy: number, gm: number, gd: number) {
  const parts = persianDateFormatter.formatToParts(new Date(gy, gm - 1, gd));
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((value) => value.type === type)?.value);
  return { jy: part("year"), jm: part("month"), jd: part("day") };
}

export function jalaliToGregorian(jy: number, jm: number, jd: number) {
  const date = dayjs(`${jy}-${String(jm).padStart(2, "0")}-${String(jd).padStart(2, "0")}`, {
    jalali: true,
  }).calendar("gregory");
  return { gy: date.year(), gm: date.month() + 1, gd: date.date() };
}

export function formatGregorianToJalali(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const gy = date.getFullYear();
    const gm = date.getMonth() + 1;
    const gd = date.getDate();

    const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);

    return `${jy}/${jm.toString().padStart(2, "0")}/${jd.toString().padStart(2, "0")}`;
  } catch {
    return dateString;
  }
}

export function formatGregorianToJalaliLong(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const gy = date.getFullYear();
    const gm = date.getMonth() + 1;
    const gd = date.getDate();

    const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);

    const persianMonths = [
      "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
      "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];

    return `${jd} ${persianMonths[jm - 1]} ${jy}`;
  } catch {
    return dateString;
  }
}

export function formatDateWithPersianDigits(dateString: string): string {
  const jalali = formatGregorianToJalali(dateString);
  return toPersianDigits(jalali);
}

export function formatDateTimeWithPersianDigits(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const time = date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const jalaliDate = formatGregorianToJalaliLong(dateString);
    return `${jalaliDate} - ${toPersianDigits(time)}`;
  } catch {
    return dateString;
  }
}

export function getJalaliToday(): { year: number; month: number; day: number } {
  const now = new Date();
  const gy = now.getFullYear();
  const gm = now.getMonth() + 1;
  const gd = now.getDate();
  const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);
  return { year: jy, month: jm, day: jd };
}

export function getJalaliMaxDate(monthsAhead: number = 1): { year: number; month: number; day: number } {
  const now = new Date();
  now.setMonth(now.getMonth() + monthsAhead);
  const gy = now.getFullYear();
  const gm = now.getMonth() + 1;
  const gd = now.getDate();
  const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);
  return { year: jy, month: jm, day: jd };
}

export function isJalaliDateInRange(
  year: number,
  month: number,
  day: number,
  minDate: { year: number; month: number; day: number },
  maxDate: { year: number; month: number; day: number }
): boolean {
  const current = year * 10000 + month * 100 + day;
  const min = minDate.year * 10000 + minDate.month * 100 + minDate.day;
  const max = maxDate.year * 10000 + maxDate.month * 100 + maxDate.day;
  return current >= min && current <= max;
}

export function getJalaliDaysInMonth(year: number, month: number): number {
  const daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  if (month === 12 && isJalaliLeapYear(year)) {
    return 30;
  }
  return daysInMonth[month - 1];
}

export function isJalaliLeapYear(year: number): boolean {
  const start = jalaliToGregorian(year, 1, 1);
  const next = jalaliToGregorian(year + 1, 1, 1);
  return (Date.UTC(next.gy, next.gm - 1, next.gd) -
    Date.UTC(start.gy, start.gm - 1, start.gd)) / 86400000 === 366;
}

export function getJalaliDayOfWeek(year: number, month: number, day: number): number {
  const { gy, gm, gd } = jalaliToGregorian(year, month, day);
  const jsDate = new Date(gy, gm - 1, gd);
  return (jsDate.getDay() + 1) % 7;
}
