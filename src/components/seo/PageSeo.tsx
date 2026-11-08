import { pageStructuredData } from "@/lib/seo";
import JsonLd from "./JsonLd";

export default function PageSeo({ path }: { path: string }) {
  return <JsonLd data={pageStructuredData(path)} />;
}
