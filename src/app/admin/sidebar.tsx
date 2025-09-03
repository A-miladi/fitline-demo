"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FiHome,
  FiLayout,
  FiUsers,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  const menuItems = [
    { name: "صفحه اصلی", icon: <FiHome size={22} />, active: true },
    { name: "داشبورد", icon: <FiLayout size={22} /> },
    { name: "متخصصان", icon: <FiUsers size={22} /> },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden absolute top-3.5 right-4 z-50 p-2 rounded-lg bg-gradient-to-r backdrop-blur-md from-primary/30 to-secondary/30 text-white shadow-lg"
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <aside
        className={`
          fixed lg:static top-0 right-0 h-screen 
          bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white 
          flex flex-col justify-between border-r border-white/10 shadow-xl transition-all duration-300 z-40
          ${open ? "w-72" : "w-0 lg:w-20"} 
          overflow-hidden
        `}
      >
        <div className="p-6 text-center font-extrabold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {open ? "⚡ پنل مدیریت" : "⚡"}
        </div>

        <nav className="flex-1 px-2 py-6 space-y-3">
          {menuItems.map((item, i) => (
            <button
              key={i}
              className={`flex md:items-center items-start justify-baseline md:justify-center lg:justify-center gap-4 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                item.active
                  ? "bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              {open && <span className="lg:hidden">{item.name}</span>}
            </button>
          ))}
        </nav>

        <div
          onClick={() => navigate.push("/")}
          className="p-4 border-t border-white/10"
        >
          <button className="flex items-center justify-center lg:justify-center gap-3 w-full px-4 md:py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition">
            <FiLogOut size={20} />
            {open && <span className="lg:hidden">خروج</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
