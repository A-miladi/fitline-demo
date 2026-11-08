import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import ElderlyExercise from "@/screens/services/ElderlyExercise";

export const metadata = createPageMetadata("/services/elderly-exercise");

export default function ElderlyExercisePage() {
  return <><PageSeo path="/services/elderly-exercise" /><ElderlyExercise /></>;
}
