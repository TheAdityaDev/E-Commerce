import React, { useState, useEffect } from "react";
import DealCard from "./DealCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dealsData = [
  {
    image:
      "https://suvidhafashion.com/cdn/shop/files/BN71691-23995.jpg?v=1701166932&width=500",
    name: "Fashion Deal 1",
    discount: "20",
  },
  {
    image:
      "https://images.unsplash.com/photo-1717730798581-0061672774e9?w=600",
    name: "Fashion Deal 2",
    discount: "20",
  },
  {
    image:
      "https://images.unsplash.com/photo-1698108223397-3d222e80d7ea?w=600",
    name: "Fashion Deal 3",
    discount: "30",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600",
    name: "Fashion Deal 4",
    discount: "20",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628917749170-f6747418ffce?w=600",
    name: "Fashion Deal 5",
    discount: "20",
  },
  {
    image:
      "https://suvidhafashion.com/cdn/shop/files/BN71691-23995.jpg?v=1701166932&width=500",
    name: "Fashion Deal 6",
    discount: "20",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    name: "Fashion Deal 7",
    discount: "15",
  },
];

const Deal = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // mobile
      } else {
        setVisibleCards(4); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = dealsData.length - visibleCards;

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative w-full py-10">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10
        bg-black/40 text-white p-3 rounded-full
        hover:scale-110 transition disabled:opacity-30"
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10
        bg-black/40 text-white p-3 rounded-full
        hover:scale-110 transition disabled:opacity-30"
      >
        <ChevronRight size={28} />
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {dealsData.map((deal, i) => (
            <div
              key={i}
              className="flex justify-center shrink-0"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <DealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300
            ${i === index ? "w-8 bg-blue-600" : "w-2 bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Deal;
