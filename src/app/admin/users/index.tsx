import React from "react";
import { FiUsers } from "react-icons/fi";

export default function Users() {
  const users = [
    { id: 1, name: "علی رضایی", date: "۱۴۰۴/۰۶/۱۰", time: "۱۰:۳۰" },
    { id: 2, name: "سارا احمدی", date: "۱۴۰۴/۰۶/۱۱", time: "۱۲:۰۰" },
    { id: 3, name: "مهدی محمدی", date: "۱۴۰۴/۰۶/۱۲", time: "۱۵:۴۵" },
    { id: 4, name: "نگین کریمی", date: "۱۴۰۴/۰۶/۱۳", time: "۰۹:۰۰" },
    { id: 5, name: "محمد عباسی", date: "۱۴۰۴/۰۶/۱۴", time: "۱۱:۱۵" },
  ];

  return (
    <div className="p-5 flex flex-col rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition">
      <h2 className="font-semibold text-lg mb-3 flex w-full items-center justify-center gap-2 border-b pb-4 border-b-white/20">
        <FiUsers size={20} />
        تمام نوبت‌ها
      </h2>

      <div className="h-full w-full">
        <div className="max-h-64 md:max-h-[85%] w-full flex flex-col gap-2 overflow-y-scroll pl-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center bg-white/10 rounded-lg p-3 text-sm shadow"
            >
              <span className="font-medium">{user.name}</span>
              <span className="text-xs text-gray-300">
                {user.date} - {user.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-4 w-full cursor-pointer bg-gradient-to-r from-primary to-secondary h-14 rounded-lg font-medium">
        مشاهده همه موارد
      </button>
    </div>
  );
}
