import React, { useRef, useEffect } from "react";

const Grid = () => {
  const images = [
    "https://images.cbazaar.com/images/light-teal-silk-thread-hand-work-classic-sherwani-for-men-shmsc2809-u.jpg",
    "https://weaverstory.com/cdn/shop/articles/1_815a1a73-68b8-49af-997c-cc2c8066417a.png?v=1704353375",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-xfDsugBgHUwVQvWOTcHVLsHcHJy7txJxw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH51e6CvvcMKYS1fwVYCsSZYWfLaZvu9-fg&s",
    "https://suvidhafashion.com/cdn/shop/files/BN71691-23995.jpg?v=1701166932&width=500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4fit_3P4Bx32Q7FhUU4yXGWJPd4dblYH6Q&s",
  ];

  const mobileImage = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm95YWwlMjBlbmZpZWxkfGVufDB8fDB8fHww"
  ];

  const scrollRef = useRef(null);

  // Auto-scroll for mobile & tablet
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const itemWidth = container.firstChild.offsetWidth + 16; // image width + gap
    const maxScroll = container.scrollWidth - container.clientWidth;

    const interval = setInterval(() => {
      scrollAmount += itemWidth;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* --- Laptop / Desktop Grid: EXACT ORIGINAL --- */}
      <div className="hidden lg:grid gap-4 grid-cols-12 auto-rows-auto">
        {/* 1 */}
        <div className="col-span-3 row-span-12 text-white rounded-md overflow-hidden">
          <img
            src={images[0]}
            srcSet={`${mobileImage[0]} 480w, ${images[0]} 1024w`}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
        {/* 2 */}
        <div className="col-span-4 row-span-6 text-white rounded-md overflow-hidden">
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
        {/* 3 */}
        <div className="col-span-2 row-span-6 text-white rounded-md overflow-hidden">
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
        {/* 4 */}
        <div className="col-span-3 row-span-12 text-white rounded-md overflow-hidden">
          <img
            src={images[3]}
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
        {/* 5 */}
        <div className="col-span-2 row-span-6 text-white rounded-md overflow-hidden">
          <img
            src={images[4]}
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
        {/* 6 */}
        <div className="col-span-4 row-span-6 text-white rounded-md overflow-hidden">
          <img
            src={images[5]}
            alt=""
            className="w-full h-full object-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* --- Mobile & Tablet Horizontal Scroll --- */}
      <div
        ref={scrollRef}
        className="flex lg:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-2 py-3"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full sm:w-[90vw] aspect-[16/9] rounded-md overflow-hidden snap-start"
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-md hover:scale-[1.05] transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
