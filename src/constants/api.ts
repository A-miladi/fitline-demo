export const API_URL = {
  Auth: {
    AdminLogin: "/auth/admin/login",
    Send_Email: "/auth/register-user-send-email",
    OTP: "/auth/register-user-step-Two",
    GOOGLE: "http://localhost:4123/auth/google/login",
  },
  Appointments: {
    Create: "/appointments/create",
    GetAll: "/appointments/all",
    GetOne: (id: string) => `/appointments/${id}`,
  },
};
