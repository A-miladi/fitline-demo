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
  const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

  let gy2 = gm > 2 ? gy + 1 : gy;
  let days =
    355666 +
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400);

  for (let i = 0; i < gm - 1; i++) {
    days += gDaysInMonth[i];
  }
  days += gd;

  let jy = -1595 + 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let jm, jd;
  if (days < 186) {
    jm = 1 + Math.floor(days / 31);
    jd = 1 + (days % 31);
  } else {
    days -= 186;
    jm = 7 + Math.floor(days / 30);
    jd = 1 + (days % 30);
  }

  return { jy, jm, jd };
}

export function jalaliToGregorian(jy: number, jm: number, jd: number) {
  const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let jy2 = jm > 2 ? jy + 1 : jy;
  let days =
    -355668 +
    365 * jy +
    Math.floor((jy2 + 3) / 4) -
    Math.floor((jy2 + 99) / 100) +
    Math.floor((jy2 + 399) / 400);

  for (let i = 0; i < jm - 1; i++) {
    days += jDaysInMonth[i];
  }
  days += jd;

  let gy = 621 + 33 * Math.floor(days / 12053);
  days %= 12053;
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    gy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let gm, gd;
  if ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0) {
    gDaysInMonth[1] = 29;
  } else {
    gDaysInMonth[1] = 28;
  }

  for (gm = 0; gm < 12 && days >= gDaysInMonth[gm]; gm++) {
    days -= gDaysInMonth[gm];
  }
  gd = days + 1;

  return { gy, gm: gm + 1, gd };
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
  const breaks = [
    -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097,
    2192, 2262, 2324, 2394, 2456, 3178,
  ];
  let leap = -14;
  let jp = breaks[0];
  let jump = 0;

  for (let i = 1; i < breaks.length; i++) {
    const jm = breaks[i];
    jump = jm - jp;
    if (year < jm) break;
    leap = leap + jump / 33 * 8 + (jump % 33) / 4;
    jp = jm;
  }
  const n = year - jp;
  leap = leap + n / 33 * 8 + (n % 33 + 3) / 4;
  if (jump % 33 === 4 && jump - n === 4) leap++;
  return (leap % 33) === 4 || (leap % 33) === 1;
}

export function getJalaliDayOfWeek(year: number, month: number, day: number): number {
  const { gy, gm, gd } = jalaliToGregorian(year, month, day);
  const jsDate = new Date(gy, gm - 1, gd);
  return jsDate.getDay();
}