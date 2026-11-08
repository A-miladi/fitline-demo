import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import TapingMassage from "@/screens/services/taping-massage";

export const metadata = createPageMetadata("/services/taping-massage");

export default function TapingMassagePage() {
  return <><PageSeo path="/services/taping-massage" /><TapingMassage /></>;
}
