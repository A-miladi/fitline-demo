import React from "react";
import Appointments from "../../components/appointments";
import Specialist from "../../components/specialist";
import Users from "../../components/users";

export default function AdminContent() {
  return (
    <section className="flex max-md:overflow-y-scroll max-md:flex-wrap h-full px-4 max-md:py-16 md:px-12 gap-6 w-full items-center justify-center">
      <Appointments />
      <Specialist />
      <Users />
    </section>
  );
}
