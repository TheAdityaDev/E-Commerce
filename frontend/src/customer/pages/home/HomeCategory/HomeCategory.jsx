import React from "react";
import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategory = () => {
  return (
    <div className="m-10 flex mb-5 justify-center gap-4 flex-wrap">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
        <HomeCategoryCard key={i} />
      ))}
    </div>
  );
};

export default HomeCategory;
