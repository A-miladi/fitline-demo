import Navbar from "@/components/navbar";
import ImageSlider from "@/components/slider";
import Product from "./product";

export function HomePage() {
  return (
    <div className="mx-auto">
      <Navbar />
      <ImageSlider />
      <Product />
    </div>
  );
}
