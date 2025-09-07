"use client";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import {
  FiHome,
  FiLayout,
  FiUsers,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { AdminAccess } from "..";

interface ISidebarProps {
  setCurrentContent: (content: AdminAccess) => void;
  currentContent: AdminAccess;
}

const menuItems = [
  {
    key: "ADMIN",
    label: "صفحه اصلی",
    icon: <FiHome size={22} />,
  },
  {
    key: "APPOINTMENTS",
    label: "داشبورد",
    icon: <FiLayout size={22} />,
  },
  {
    key: "SPECIALIST",
    label: "متخصصان",
    icon: <FiUsers size={22} />,
  },
];

const Sidebar: FC<ISidebarProps> = ({ setCurrentContent, currentContent }) => {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

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
          bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] text-white 
          flex flex-col justify-between border-r border-white/10 shadow-xl transition-all duration-300 z-40
          ${open ? "w-72" : "w-0 lg:w-20"} 
          overflow-hidden
        `}
      >
        <div className="p-6 text-center font-extrabold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {open ? "⚡ پنل مدیریت" : "⚡"}
        </div>

        <nav className="flex-1 px-2 py-6 space-y-3">
          {menuItems.map(({ key, label, icon }) => {
            const isActive = currentContent === key;
            return (
              <button
                key={key}
                onClick={() => setCurrentContent(key as AdminAccess)}
                className={`relative cursor-pointer group flex items-center justify-center gap-4 w-full px-4 py-3 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-md"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {icon}
                {open && <span className="lg:hidden">{label}</span>}

                {!open && (
                  <span
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap
                    px-3 py-1 rounded-lg bg-gray-900 text-white text-sm shadow-lg opacity-0 group-hover:opacity-100
                    pointer-events-none transition"
                  >
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div
          onClick={() => navigate.push("/")}
          className="p-3 border-t border-white/10"
        >
          <button className="flex cursor-pointer items-center justify-center lg:justify-center gap-3 w-full px-4 md:py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition">
            <FiLogOut size={20} />
            {open && <span className="lg:hidden">خروج</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
