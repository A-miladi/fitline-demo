"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import Image1 from "../../public/images/image.jpg";
import Image2 from "../../public/images/image2.jpg";

const slides = [
    {
      image: Image1,
      alt: "Beautiful landscape",
    },
    {
      image: Image2,
      alt: "Mountain scenery",
    },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeSlide = useCallback((offset: number) => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setFading(true);
    transitionTimer.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + offset + slides.length) % slides.length);
      setFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide(1);
    }, 3000);

    return () => {
      clearInterval(timer);
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, [changeSlide]);

  const handleNext = () => {
    changeSlide(1);
  };

  const handlePrev = () => {
    changeSlide(-1);
  };

  const goToSlide = (index: number) => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setFading(true);
    transitionTimer.current = setTimeout(() => {
      setCurrentSlide(index);
      setFading(false);
    }, 100);
  };

  return (
    <div className="relative md:my-12 md:rounded-2xl shadow-xl shadow-[rgba(1,1,1,0.2)] max-w-[1225px] mx-auto h-[45vh] overflow-hidden">
      {/* Slides with fade effect */}
      <div className="relative w-full h-full ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentSlide
                ? fading
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          >
            <Image
              loading="lazy"
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Optional text overlay */}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-primary"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
