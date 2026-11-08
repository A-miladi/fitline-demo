import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import About from "@/screens/about";

export const metadata = createPageMetadata("/about");

export default function AboutPage() {
  return <><PageSeo path="/about" /><About /></>;
}
