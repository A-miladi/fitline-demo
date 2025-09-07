"use client";
import { useState } from "react";
import Sidebar from "./sideBar";
import Content from "./content";

export type AdminAccess = "APPOINTMENTS" | "SPECIALIST" | "ADMIN";

function AdminPanel() {
  const [currentContent, setCurrentContent] = useState<AdminAccess>("ADMIN");
  return (
    <main className="flex">
      <Content
        content={currentContent}
        setCurrentContent={() => setCurrentContent("ADMIN")}
      />
      <Sidebar
        setCurrentContent={setCurrentContent}
        currentContent={currentContent}
      />
    </main>
  );
}
export default AdminPanel;
