import React from "react";
import { electronics } from "../../../json/items";
import ElectronicCategoryCard from "./electronicCategoryCard";
const ElectronicCategory = () => {
  return (
    <div
      className="flex text-nowrap  justify-between py-5 items-center  overflow-x-auto
    whitespace-nowrap gap-10 lg:px-20 border-b sm:flex-wrap p-8
    sm:overflow-visible"
    >
      {electronics.map((item, i) => {
        return <ElectronicCategoryCard key={i} item={item} />;
      })}
    </div>
  );
};

export default ElectronicCategory;
