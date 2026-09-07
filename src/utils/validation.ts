export const isValidPhoneNumber = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\s/g, "");

  const mobilePattern = /^0?9[0-9]{9}$/;
  const phonePattern = /^0?[1-8][0-9]{9}$/;

  return mobilePattern.test(cleanPhone) || phonePattern.test(cleanPhone);
};

export const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/[^0-9]/g, "");

  if (numbers.length > 0 && !numbers.startsWith("0")) {
    return `0${numbers}`;
  }

  return numbers;
};

export const getPhoneError = (phone: string): string => {
  if (!phone) {
    return "شماره تماس الزامی است";
  }

  const cleanPhone = phone.replace(/\s/g, "");

  if (cleanPhone.length < 11) {
    return "شماره تماس باید ۱۱ رقم باشد";
  }

  if (!isValidPhoneNumber(phone)) {
    return "لطفاً یک شماره تماس معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)";
  }

  return "";
};
