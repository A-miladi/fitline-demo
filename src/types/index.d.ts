import { StaticImageData } from "next/image";
declare module "*.css";
export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  style?: string;
  rotate?: boolean;
}
export type ProjectCategory = "construction" | "reconstruction" | "way";

export type ProjectData = {
  id: number;
  description: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  master?: string;
  section: number;
  s;
  image?: StaticImageData;
};
export interface DropdownOption {
  value: string;
  label: string;
}

export interface AppointmentFormData {
  name: string;
  lastName: string;
  phone: string;
  email?: string;
  age: number;
  gender: string;
  services: string;
  date: string;
  time: string;
  description: string;
}

export interface Appointment {
  id: string;
  name: string;
  lastName: string;
  email?: string;
  mobile: string;
  gender: string;
  age: number;
  services: string;
  date: string;
  time: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppointmentCreatePayload {
  date: string;
  description: string;
  doctor_id: number;
  full_name: string;
  id: number;
  phone: string;
}

export interface AdminLoginData {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  id: string;
  email: string;
  username: string;
  role: string;
  token: string;
}

export interface ContactInfo {
  phone: string[];
  address: string;
  workingHours: {
    regular: string;
    thursday: string;
    friday: string;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
