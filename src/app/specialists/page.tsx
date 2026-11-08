import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import Specialists from "@/screens/specialists";

export const metadata = createPageMetadata("/specialists");

export default function SpecialistsPage() {
  return <><PageSeo path="/specialists" /><Specialists /></>;
}
