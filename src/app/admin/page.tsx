import React from "react";
import Sidebar from "./sidebar";
import { FiBell } from "react-icons/fi";

export default function AdminPage() {
  return (
    <section
      className="min-h-screen flex bg-gradient-to-tr from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"
      dir="rtl"
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col text-white lg:ml-0">
        {/* Header */}
        <header className="h-20 bg-black/30 backdrop-blur-lg border-b border-white/10 flex items-center justify-between px-6 sm:px-8">
          <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            داشبورد
          </h1>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 rounded-full hover:bg-white/10 transition">
              <FiBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-primary shadow-md"
            />
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/10 shadow-lg transition">
            <h2 className="font-semibold text-lg mb-3">👥 کاربران فعال</h2>
            <p className="text-gray-300">۱,۲۰۰ نفر</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg transition">
            <h2 className="font-semibold text-lg mb-3">🔧 متخصصان ثبت‌شده</h2>
            <p>۲۵۰ نفر</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 shadow-lg transition">
            <h2 className="font-semibold text-lg mb-3">💰 فروش امروز</h2>
            <p className="text-gray-300">۳,۵۰۰,۰۰۰ تومان</p>
          </div>
        </div>
      </main>
    </section>
  );
}
