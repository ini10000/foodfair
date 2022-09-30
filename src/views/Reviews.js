import React from "react";

import left from "../assets/images/left.svg";
import review from "../assets/images/review.svg";
import right from "../assets/images/right.svg";

function Reviews() {
  return (
    <div className="mt-[200px]">
      <p className="text-transparent bg-clip-text bg-gradient-to-l from-[#FDAD13] to-[#F84108] font-[OpenSans-Bold] text-[2.25rem]">
        CUSTOMER REVIEW
      </p>
      <div className="flex items-center justify-between">
        <img src={left} alt="left" className="cursor-pointer" />
        <img src={review} alt="left" />
        <img
          src={right}
          alt="left"
          className="absolute right-[5px] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Reviews;
