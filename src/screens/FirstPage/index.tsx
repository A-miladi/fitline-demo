"use client";
import Navbar from "@/components/navbar";
import ImageSlider from "@/components/slider";
import Product from "./product";
import Footer from "@/components/footer";

export function HomePage() {
  return (
    <main className="mx-auto">
      <Navbar />
      <ImageSlider />
      <Product />
      <Footer />
    </main>
  );
}
