import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import SportsRehabilitation from "@/screens/services/sports-rehabilitation";

export const metadata = createPageMetadata("/services/sports-rehabilitation");

export default function SportsRehabilitationPage() {
  return <><PageSeo path="/services/sports-rehabilitation" /><SportsRehabilitation /></>;
}
