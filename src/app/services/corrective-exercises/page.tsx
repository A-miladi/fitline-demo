import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import CorrectiveExercises from "@/screens/services/corrective-exercises";

export const metadata = createPageMetadata("/services/corrective-exercises");

export default function CorrectiveExercisesPage() {
  return <><PageSeo path="/services/corrective-exercises" /><CorrectiveExercises /></>;
}
