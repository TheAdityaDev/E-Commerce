import { IconButton } from "@mui/material";
import { Heart, Star, ShoppingCart, Share } from "lucide-react";

const HomeCategoryCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer w-full sm:w-[130px] lg:w-[250px] ">
      <div className="w-full relative aspect-square border-2 border-gray-400 p-2 border-dashed rounded-xl overflow-hidden group-hover:bottom-0">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=600&auto=format&fit=crop&q=60"
          alt="Headphone"
        />

        {/* Bottom Overlay */}
        <div
          className="
    absolute left-1/2 -translate-x-1/2
    w-[85%] rounded-md
    bg-gray-600/60 backdrop-blur-sm
    h-14 flex items-center justify-center
    transition-all duration-300

    bottom-5               /* Always visible on mobile */
    sm:-bottom-30          /* Hidden on bigger screens */
    sm:group-hover:bottom-4
  "
        >
          <div className="flex gap-2">
            <IconButton className="text-white hover:bg-red-500 hover:text-white">
              <Share size={18} />
            </IconButton>

            <IconButton className="text-white hover:bg-yellow-400 hover:text-indigo-800">
              <Star size={18} />
            </IconButton>

            <IconButton className="text-white hover:bg-green-500 hover:text-white">
              <ShoppingCart size={18} />
            </IconButton>
          </div>
        </div>
      </div>

      <h1 className="text-sm sm:text-base lg:text-xl font-semibold text-center">
        Headphone
      </h1>
    </div>
  );
};

export default HomeCategoryCard;
