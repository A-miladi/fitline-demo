import assert from "node:assert/strict";
import test from "node:test";
import {
  gregorianToJalali,
  jalaliToGregorian,
  isJalaliLeapYear,
  getJalaliDaysInMonth,
  getJalaliDayOfWeek,
  isJalaliDateInRange,
} from "../src/utils/toPersianDigits.ts";

test("converts known Nowruz dates in both directions", () => {
  for (const [gy, gm, gd, jy, jm, jd] of [
    [2024, 3, 20, 1403, 1, 1],
    [2025, 3, 21, 1404, 1, 1],
    [2026, 11, 8, 1405, 8, 17],
  ]) {
    assert.deepEqual(gregorianToJalali(gy, gm, gd), { jy, jm, jd });
    assert.deepEqual(jalaliToGregorian(jy, jm, jd), { gy, gm, gd });
  }
});

test("preserves dates across leap days and year boundaries", () => {
  for (let offset = 0; offset < 1100; offset++) {
    const date = new Date(2023, 0, 1 + offset);
    const gy = date.getFullYear(), gm = date.getMonth() + 1, gd = date.getDate();
    const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);
    assert.deepEqual(jalaliToGregorian(jy, jm, jd), { gy, gm, gd });
    const parts = new Intl.DateTimeFormat("en-US-u-ca-persian", {
      year: "numeric", month: "numeric", day: "numeric",
    }).formatToParts(date);
    const get = (type) => Number(parts.find((part) => part.type === type).value);
    assert.deepEqual({ jy, jm, jd }, { jy: get("year"), jm: get("month"), jd: get("day") });
  }
});

test("handles Esfand length in leap and common years", () => {
  assert.equal(isJalaliLeapYear(1399), true);
  assert.equal(isJalaliLeapYear(1403), true);
  assert.equal(isJalaliLeapYear(1404), false);
  assert.equal(getJalaliDaysInMonth(1403, 12), 30);
  assert.equal(getJalaliDaysInMonth(1404, 12), 29);
});

test("aligns weekday columns with Saturday as the first day", () => {
  assert.equal(getJalaliDayOfWeek(1404, 1, 1), 6); // Friday
  assert.equal(getJalaliDayOfWeek(1404, 1, 2), 0); // Saturday
  assert.equal(getJalaliDayOfWeek(1405, 8, 17), 1); // Sunday
});

test("includes range boundaries across a Jalali year change", () => {
  const min = { year: 1403, month: 12, day: 29 };
  const max = { year: 1404, month: 1, day: 2 };
  assert.equal(isJalaliDateInRange(1403, 12, 29, min, max), true);
  assert.equal(isJalaliDateInRange(1404, 1, 2, min, max), true);
  assert.equal(isJalaliDateInRange(1404, 1, 3, min, max), false);
});
