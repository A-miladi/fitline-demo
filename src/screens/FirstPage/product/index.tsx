import React from "react";
import ProductBox from "./productBox";

export default function Product() {
  return (
    <div className="flex items-center justify-center flex-col max-w-[1225px] w-full mx-auto">
      <h2 className="text-primary text-3xl font-morabba font-extrabold text-right w-full border-r-4 border-secondary pr-4">
        خدمات مجموعه
      </h2>
      <p className="w-full py-2 text-neutral-400">
        می‌توانید در خانه بمانید، توسط فیزیوتراپ‌های متخصص ما، آنلاین معاینه
        شوید و برنامه تمرینی درمانی و اصلاحی بگیرید
      </p>
      <ProductBox />
    </div>
  );
}
