import React from "react";

import caret from "../assets/images/caret.svg";
import Category from "../components/Category";
import CategoryData from "../data/categories";

function Categories() {
  return (
    <div className="mt-32 w-screen px-16">
      <div className="flex items-center mb-12">
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-[#FDAD13] to-[#F84108] font-[OpenSans-Bold] text-[2.25rem] text-left">
          CATEGORIES
        </p>
        <img src={caret} alt="caret" />
      </div>
      <div className="flex justify-center md:justify-between flex-wrap">
        {CategoryData.map((item, index) => (
          <Category item={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
