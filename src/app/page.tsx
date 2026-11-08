import { createPageMetadata } from "@/lib/seo";
import PageSeo from "@/components/seo/PageSeo";
import Home from "@/screens/home";
import React from "react";

export const metadata = createPageMetadata("/");

export default function HomePage() {
  return <><PageSeo path="/" /><Home /></>;
}
