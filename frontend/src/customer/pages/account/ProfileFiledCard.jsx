import React from "react";

const ProfileFiledCard = ({ keys, value }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
      {/* Label */}
      <p className="text-gray-700 font-semibold w-full sm:w-36 text-sm sm:text-base">
        {keys}:
      </p>

      {/* Input / Value */}
      <div className="flex-1">
        <input
          value={value}
          readOnly
          className="
            w-full
            bg-gray-50
            border border-gray-300
            rounded-lg
            px-4 py-2
            text-gray-800 font-medium
            text-sm sm:text-base
            focus:outline-none
            focus:ring-2 focus:ring-teal-400
            cursor-not-allowed
          "
        />
      </div>
    </div>
  );
};

export default ProfileFiledCard;
