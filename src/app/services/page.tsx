import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import Services from "@/screens/services";

export const metadata = createPageMetadata("/services");

export default function ServicesPage() {
  return <><PageSeo path="/services" /><Services /></>;
}
