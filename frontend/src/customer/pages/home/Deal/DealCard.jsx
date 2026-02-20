import { Heart, Star, ShoppingCart, Share2 } from "lucide-react";

const DealCard = ({ deal }) => {
  const shareProduct = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: deal.name,
          url: window.location.href,
        });
      }
    } catch (error) {
      console.log("Sharing failed:", error);
    }
  };

  return (
    <div className="shrink-0 px-3">
      <div
        className="
        relative w-[280px] h-[420px]
        rounded-3xl overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-500
        group
      "
      >
        {/* DISCOUNT */}
        <span className="absolute z-10 m-3 px-3 py-1 text-xs font-semibold text-white border border-dashed rounded-lg backdrop-blur-sm bg-white/10">
          {deal.discount}% OFF
        </span>

        {/* IMAGE */}
        <img
          src={deal.image}
          alt={deal.name}
          loading="lazy"
          className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* HOVER ICONS */}
        <div
          className="
          absolute top-5 right-5 z-20
          flex flex-col gap-3
          opacity-0 translate-x-6
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
        "
        >
          <IconButton
            icon={<Heart size={18} />}
            hover="hover:bg-red-500 hover:text-white"
          />
          <IconButton
            icon={<Star size={18} />}
            hover="hover:bg-yellow-400 hover:text-black"
          />
          <IconButton
            icon={<ShoppingCart size={18} />}
            hover="hover:bg-green-500 hover:text-white"
          />
          <IconButton
            icon={<Share2 size={18} />}
            onClick={shareProduct}
            hover="hover:bg-blue-500 hover:text-white"
          />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 w-full p-6 text-white">
          <h3 className="text-lg font-semibold">{deal.name}</h3>

          <button
            className="
            mt-4 w-full
            bg-blue-600 py-2 rounded-xl font-semibold
            transition-all duration-300
            hover:bg-blue-700 hover:scale-105 active:scale-95
          "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

/* ICON BUTTON */
const IconButton = ({ icon, onClick, hover }) => (
  <button
    onClick={onClick}
    className={`
      bg-white/90 backdrop-blur-md
      p-3 rounded-full text-black
      transition-all duration-300
      hover:scale-110 shadow-md
      ${hover}
    `}
  >
    {icon}
  </button>
);

export default DealCard;
