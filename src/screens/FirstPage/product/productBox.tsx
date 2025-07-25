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
    <div className="flex max-md:flex-col justify-between md:gap-4 items-center w-full">
      {data.map((i, idx) => (
        <div
          key={idx}
          className="flex hover:-translate-y-1.5 justify-around transition-all duration-300 cursor-pointer overflow-hidden relative mt-4 md:mt-8 flex-col items-center h-72 hover:bg-secondary/20 bg-gradient-to-b from-secondary/20 to-neutral-50 border-t-2 border-secondary/40 rounded-xl shadow-xl w-full md:w-1/4"
        >
          <div className="h-1/2 flex w-1/2">
            <Image
              src={i.image}
              alt={i.title}
              className="h-full md:w-full md:object-cover"
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
