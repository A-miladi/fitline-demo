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
