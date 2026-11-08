import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

export const TOKEN = "TOKEN";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || API_BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      localStorage.removeItem(TOKEN);
      // Axios interceptors run outside React's navigation context.
      window.location.replace(new URL("/admin", window.location.origin));
    }
    return Promise.reject(error);
  },
);

export default API;
