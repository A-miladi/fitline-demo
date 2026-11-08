import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import PainTreatment from "@/screens/services/pain-treatment";

export const metadata = createPageMetadata("/services/pain-treatment");

export default function PainTreatmentPage() {
  return <><PageSeo path="/services/pain-treatment" /><PainTreatment /></>;
}
