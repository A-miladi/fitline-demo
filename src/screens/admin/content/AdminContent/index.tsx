import React from "react";
import Appointments from "../../components/appointments";
import Specialist from "../../components/specialist";
import Users from "../../components/users";

export default function AdminContent() {
  return (
    <section className="md:flex overflow-y-scroll h-full px-4 max-md:pt-16 max-md:pb-32 max-md:space-y-4 md:px-12 gap-6 w-full items-center justify-center">
      <Appointments />
      <Specialist />
      <Users />
    </section>
  );
}
