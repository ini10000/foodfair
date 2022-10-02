import React from "react";

import landing from "../assets/images/landing.svg";
import Button from "../components/Button";

function Hero() {
  return (
    <div className="max-w-screen mt-[2.8125rem]">
      <p className="w-8/12 mx-auto font-[OpenSans-Bold] text-[3.5rem]  text-[#212429] leading-[4.75rem]">
        The meeting place for all
        <span className="text-[#FF8A00]"> FOOD VENDORS </span>&
        <span className="text-[#FF8A00]"> FOODIES</span>
      </p>
      <div className="mx-auto flex mt-16 max-w-screen w-[75%] md:w-[38.125rem] h-[4rem] items-center justify-between mb-32">
        <input
          className="w-[28.125rem] flex items-center rounded-2xl px-4 py-[1.25rem] h-[3.0625rem]  border border-[#000000]/0.6 bg-[#FDF9F5]  bg-[url('/src/assets/images/location.svg')]  bg-auto bg-left bg-origin-content bg-no-repeat indent-7 ease-in-out duration-300 focus:bg-none focus:indent-0 cursor-text"
          placeholder="Enter Location"
        ></input>
        <Button text="Search" />
      </div>
      <div className="flex items-center justify-center mx-auto">
        <img src={landing} alt="landing" className="w-[90vw]" />
      </div>
    </div>
  );
}

export default Hero;
