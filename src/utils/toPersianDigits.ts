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
