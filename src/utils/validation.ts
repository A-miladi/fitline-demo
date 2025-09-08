export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^09\d{9}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;
  return nameRegex.test(name);
};
