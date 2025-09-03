import React from "react";
import Sidebar from "./sidebar";
import { FiBell } from "react-icons/fi";
import BackgroundEffects from "@/components/BackgroundEffects";
import Users from "./users";
import Specialist from "./specialist";
import Appointments from "./appointments";

export default function AdminPage() {
  return (
    <section
      className="min-h-screen flex bg-gradient-to-tr from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"
      dir="rtl"
    >
      <BackgroundEffects />
      <Sidebar />

      <main className="flex-1 flex flex-col text-white lg:ml-0">
        <header className="h-16 backdrop-blur-md shadow-lg flex items-center justify-between px-6 sm:px-8">
          <div className="md:hidden flex px-5" />
          <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            داشبورد
          </h1>

          <button className="relative p-2 rounded-full hover:bg-white/10 transition">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
        </header>

        <div className="flex-1 p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <Users />
          <Specialist />
          <Appointments />
        </div>
      </main>
    </section>
  );
}
