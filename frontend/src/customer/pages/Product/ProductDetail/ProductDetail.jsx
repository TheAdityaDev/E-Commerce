import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {
  BadgeCheckIcon,
  Heart,
  Minus,
  Plus,
  Shield,
  ShoppingCartIcon,
  Star,
  Trash2,
  Truck,
  WalletCards,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SimilarProduct from "./SimilarProduct";

const images = [
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsFGLAUK1tldqHNb8IKhMMsSTZMa5oIQyeTzNCeS9PK2lDfCPs",
  "https://m.media-amazon.com/images/I/71VDIT0gCxL._SY625_.jpg",
  "https://www.shutterstock.com/image-photo/rome-march-2023-brand-new-600nw-2304690973.jpg",
  "https://m.media-amazon.com/images/I/71mNYql+wmL._SY625_.jpg",
];

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const imgRef = useRef(null);
  const imgRefBox = useRef(null);

  const [showZoom, setShowZoom] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [bgPos, setBgPos] = useState("0% 0%");
  const [pos, setPos] = useState({ x: "0%", y: "0%" });

  const handelCurrentImage = (index) => {
    setCurrentImage(index);
  };

  const handleChangeQuantity = (value) => setQuantity(value + quantity);

  if (quantity <= 0) {
    throw new Error("Quantity must be 1.");
  }

  // magnifier logic can be added here
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowDown") {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length]);

  const favoriteButton = () => {
    const icon = document.getElementById("favoriteIcon");
    alert("Added to wishlist");
    icon.style.fill = icon.style.fill === "red" ? "transparent" : "red";
  };

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setShowCursor(true);
    setPos({ x, y });

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    setBgPos(`${bgX}% ${bgY}%`);
  };


  const handleMouseMoveSquare = (e) => {
    const rect = imgRefBox.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos(`${x}%  ${y}%`);
  };

  return (
    <div className="min-h-screen px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-5 mr-5">
            {images.map((img, index) => (
              <img
                onClick={() => handelCurrentImage(index)}
                src={img}
                key={index}
                style={{
                  border: currentImage === index ? "2px solid teal" : "",
                }}
                ref={imgRefBox}
                onMouseMove={handleMouseMoveSquare}
                alt=""
                className="lg:w-full flex flex-wrap object-cover rounded-md"
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <div className="img-magnifier-container relative inline-block">
              <img
                ref={imgRef}
                src={images[currentImage]}
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
                className="w-96 rounded-md hover:scale-[1.05] transition-all duration-300 ease-in-out"
                alt=""
              />

              {showCursor && (
                <div
                  className="absolute w-10 h-10 pointer-events-none"
                  style={{
                    display: showZoom ? "block" : "none",
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* top-left */}
                  <span className="absolute top-0 left-0 w-2 h-2  border-t-2 border-l-2 border-black" />
                  {/* top-right */}
                  <span className="absolute top-0 right-0 w-2 h-2  border-t-2 border-r-2 border-black" />
                  {/* bottom-left */}
                  <span className="absolute bottom-0 left-0 w-2 h-2  border-b-2 border-l-2 border-black" />
                  {/* bottom-right */}
                  <span className="absolute bottom-0 right-0 w-2 h-2  border-b-2 border-r-2 border-black" />
                </div>
              )}
            </div>

            <div
              className="absolute z-20 top-25 mr-10 right-6 w-1/2 h-150"
              style={{ display: showZoom ? "block" : "none" }}
            >
              {showZoom && (
                <div
                  className="h-full w-full border rounded-md bg-no-repeat"
                  style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "200%",
                    backgroundPosition: bgPos,
                    imageRendering: "auto",
                  }}
                />
              )}
            </div>
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-teal-400">Ram Clothing</h1>
          <p className="text-gray-500 font-semibold">White Shoes</p>
          <div className="flex justify-between items-center py-2 border w-45 px-3 mt-5 rounded-2xl">
            <div className="flex items-center gap-1">
              <span className="text-xl">4</span>
              <Star className="size-6 text-white" style={{ fill: "gold" }} />
            </div>
            <Divider orientation="vertical" className="bg-black" flexItem />
            <span className="text-lg text-gray-600">478 Rating</span>
          </div>
          <div className="space-y-2 mt-5">
            <div className="flex items-end gap-3">
              <span className="font-semibold text-2xl text-teal-500">
                ₹2999
              </span>
              <span className="font-semibold text-gray-500 line-through">
                ₹3500
              </span>
              <span className="font-semibold text-lg text-teal-500">
                35% off
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Include of all taxes. Free Shipping above ₹40 .
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex flex-wrap gap-3 items-center">
              <Shield className="size-6 text-teal-300/10 fill-teal-200" />
              <p className="ml-2">100% Original & Authentic Products.</p>
            </div>
            {/* 2 */}
            <div className="flex flex-wrap gap-3 items-center">
              <BadgeCheckIcon className="size-6 text-white fill-teal-200" />
              <p className="ml-2">100% Original & Authentic Products.</p>
            </div>
            {/* 3 */}
            <div className="flex flex-wrap gap-3 items-center">
              <Truck className="size-6 text-teal-300/10 fill-teal-200" />
              <p className="ml-2">Free Shipping & Returns</p>
            </div>
            {/* 4 */}
            <div className="flex flex-wrap gap-3 items-center">
              <WalletCards className="size-6 text-teal-300" />
              <p className="ml-2">Pay on delivery might be available</p>
            </div>
          </div>
          <div className="mt-7 space-y-2">
            <h1 className="text-teal-500 text-xl">Quantity</h1>
            <div className="flex items-center gap-5 w-35 justify-between">
              <Button
                onClick={() => handleChangeQuantity(-1)}
                className="px-3 text-4xl py-1 rounded-md"
                variant="outlined"
              >
                <Minus className="size-6 text-teal-500" />
              </Button>
              <span className="text-2xl font-semibold transition-transform duration-300 m-3">
                {quantity}
              </span>
              <Button
                onClick={() => handleChangeQuantity(+1)}
                className="px-3 text-4xl py-1 rounded-md"
                variant="outlined"
              >
                <Plus className="size-6 text-teal-500" />
              </Button>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <Button
              startIcon={<ShoppingCartIcon className="size-6 text-teal-500" />}
              variant="outlined"
              fullWidth
              sx={{ py: "1rem" }}
            >
              Add To Cart
            </Button>
            <Button
              onClick={favoriteButton}
              startIcon={
                <Heart id="favoriteIcon" className="size-6 text-red-500" />
              }
              variant="outlined"
              fullWidth
              sx={{ py: "1rem" }}
            >
              WishList
            </Button>
          </div>
          <div className="mt-4">
            <p>
              Step into style and comfort with these Adidas black shoes,
              designed for everyday performance. Crafted with a sleek, modern
              silhouette that pairs effortlessly with any outfit. The breathable
              upper keeps your feet cool, while the cushioned sole ensures
              all-day comfort. Durable construction provides reliable support
              for both casual wear and active use. Perfect for those who value
              versatility, quality, and iconic Adidas style.
            </p>
          </div>
        </section>
      </div>
      <section className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5 gap-3 w-full">
          <SimilarProduct />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
