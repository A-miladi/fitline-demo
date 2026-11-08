import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import Appointment from "@/screens/appointment";

export const metadata = createPageMetadata("/appointment");

export default function AppointmentPage() {
  return (
    <>
      <PageSeo path="/appointment" />
      <Appointment />
    </>
  );
}
