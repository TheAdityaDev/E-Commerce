import React from "react";
import ElectronicCategory from "./ElectronicCategory/electronicCategory";
import Gird from "./Gird/Gird";
import Deal from "./Deal/Deal";
import HomeCategory from "./HomeCategory/HomeCategory";
import { Heart, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { AddShoppingCartOutlined, Search } from "@mui/icons-material";
import BottomBar from "../../Navbar/BottomBar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-16 relative">
      {/* Electronic Category */}
      <ElectronicCategory />

      {/* Grid Section */}
      <section className="px-4 sm:px-6 lg:px-20">
        <Gird />
      </section>

      {/* Deals Section */}
      <section className="px-4 sm:px-6 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Today's Deal
        </h1>
        <Deal />
      </section>

      {/* Shop By Category */}
      <section className="px-4 sm:px-6 lg:px-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Shop By Category
        </h1>
        <HomeCategory />
      </section>

      {/* Become Seller Banner */}
      <section className="relative px-4 sm:px-6 lg:px-20">
        <div className="relative bg-gray-50 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            className="w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover"
            src="/src/assets/undraw_growth-curve_kzjb.svg"
            alt="Sell your product"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 space-y-4 ">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
              Sell Your Product
            </h1>

            <p className="text-sm sm:text-lg lg:text-2xl font-medium">
              With{" "}
              <span className="logo text-xl sm:text-3xl lg:text-5xl">
                Easy.
              </span>
            </p>

            <button
              onClick={() => navigate("/become-seller")}
              className="mt-2 flex items-center gap-3 px-5 py-3 border-2 border-green-500 border-dotted rounded-full hover:bg-green-200 transition duration-300"
            >
              <User size={22} />
              <span className="text-sm sm:text-base font-medium">
                Become Seller
              </span>
            </button>
          </div>
        </div>
      </section>

      <BottomBar />
    </div>
  );
};

export default Home;
