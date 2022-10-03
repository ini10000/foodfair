import React from "react";
import arrow from "../assets/images/arrow.svg";

function Category({ item }) {
  const { image, title, details } = item;
  return (
    <div className="w-[17rem] m-2 shadow-lg border rounded-2xl">
      <img src={image} alt="restaurant" />
      <div className="text-left px-4">
        <p className="font-[OpenSans-Bold] text-[2rem] mt-8 mb-2">{title}</p>
        <p className="font-[OpenSans] text-[1rem] mb-[2.25rem]">{details}</p>
        <div className="flex w-full justify-end mb-8 cursor-pointer">
          <p className="font-[OpenSans-Bold] text-[1rem] mr-2">View More</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Category;
