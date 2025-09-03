import { StaticImageData } from "next/image";

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
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  serviceType: string;
  preferredDay: string;
  preferredTime: string;
  description: string;
  previousTreatment: string;
  contactPreference: string;
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
