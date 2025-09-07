import React from "react";
import { FiUserCheck } from "react-icons/fi";

export default function Specialist() {
  const specialists = [
    {
      id: 1,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال سابقه",
    },
    {
      id: 2,
      name: "دکتر سارا احمدی",
      field: "چشم‌پزشکی",
      experience: "۷ سال سابقه",
    },
    {
      id: 3,
      name: "دکتر مهدی محمدی",
      field: "ارتوپدی",
      experience: "۱۲ سال سابقه",
    },
    {
      id: 4,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال سابقه",
    },
    {
      id: 5,
      name: "دکتر محمد عباسی",
      field: "دندانپزشکی",
      experience: "۸ سال سابقه",
    },
    {
      id: 6,
      name: "دکتر علی رضایی",
      field: "قلب و عروق",
      experience: "۱۰ سال سابقه",
    },
    {
      id: 7,
      name: "دکتر سارا احمدی",
      field: "چشم‌پزشکی",
      experience: "۷ سال سابقه",
    },
    {
      id: 8,
      name: "دکتر مهدی محمدی",
      field: "ارتوپدی",
      experience: "۱۲ سال سابقه",
    },
    {
      id: 9,
      name: "دکتر نگین کریمی",
      field: "پوست و زیبایی",
      experience: "۹ سال سابقه",
    },
    {
      id: 10,
      name: "دکتر محمد عباسی",
      field: "دندانپزشکی",
      experience: "۸ سال سابقه",
    },
  ];

  return (
    <div className="p-5 md:h-2/3 md:w-1/3 w-full text-black flex flex-col rounded-2xl bg-white/5 border border-black/10 backdrop-blur-md shadow-lg transition">
      <h2 className="font-semibold text-lg mb-3 flex w-full items-center justify-center gap-2 border-b pb-4 border-b-black/20">
        <FiUserCheck size={20} />
        متخصصان ثبت شده
      </h2>

      <div className="h-full w-full" dir="rtl">
        <div className="max-h-64 md:max-h-[85%] w-full flex flex-col gap-2 overflow-y-scroll">
          {specialists.map((doctor) => (
            <div
              key={doctor.id}
              className="flex w-full items-center justify-between bg-white/10 rounded-lg p-3 text-sm shadow"
            >
              <span className="font-medium w-1/3 flex items-center">
                {doctor.name}
              </span>

              <span className="text-xs w-1/3 border-x border-black/30 flex items-center justify-center text-black">
                {doctor.field}
              </span>
              <span className="text-xs w-1/3 flex items-center justify-end text-gray-400">
                {doctor.experience}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 text-white w-full cursor-pointer bg-gradient-to-r from-primary to-secondary h-12 md:h-14 rounded-lg font-medium">
        مشاهده همه موارد
      </button>
    </div>
  );
}
