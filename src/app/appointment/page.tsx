import Appointment from "@/screens/appointment";
import { Suspense } from "react";

export default function AppointmentPage() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Appointment />
    </Suspense>
  );
}
