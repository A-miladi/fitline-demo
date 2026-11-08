import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import TreatmentProcess from "@/screens/treatment-process";

export const metadata = createPageMetadata("/treatment-process");

export default function TreatmentProcessPage() {
  return <><PageSeo path="/treatment-process" /><TreatmentProcess /></>;
}
