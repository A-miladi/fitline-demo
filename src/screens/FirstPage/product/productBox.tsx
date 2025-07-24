import React from "react";
import IMG from "../../../../public/images/sport1.png";
import IMG1 from "../../../../public/images/sport2.png";
import IMG2 from "../../../../public/images/massage.png";
import IMG3 from "../../../../public/images/others.png";
import Image from "next/image";

const data = [
  { title: "حرکات اصلاحی", image: IMG1 },
  { title: " بازگشت به ورزشی و توانبخشی آسیب های ورزشی", image: IMG },
  { title: "ماساژ", image: IMG2 },
  { title: "سایر خدمات", image: IMG3 },
];
export default function ProductBox() {
  return (
    <div className="flex justify-between gap-4 items-center w-full">
      {data.map((i, idx) => (
        <div
          key={idx}
          className="flex hover:scale-105 justify-around transition-all duration-300 cursor-pointer overflow-hidden relative mt-8 flex-col items-center h-64 hover:bg-secondary/40 bg-secondary/10 rounded-xl shadow-xl w-1/4"
        >
          <div className="h-[50%]">
            <Image
              src={i.image}
              alt={i.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="w-full text-center text-primary text-sm px-2 font-extrabold h-14 flex items-center justify-center">
            {i.title}
          </p>
        </div>
      ))}
    </div>
  );
}
