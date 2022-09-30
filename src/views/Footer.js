import React from "react";

import socials from "../assets/images/socials.svg";
import Button from "../components/Button";

function Footer() {
  return (
    <div className="bg-[url('/src/assets/images/footerBG.svg')] bg-no-repeat bg-cover w-screen bg-blend-soft-light bg-[#06080E] p-16 pb-[2.625rem] flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="font-[OpenSans-Bold] text-2xl text-white">
            Subscribe to Our Newsletter
          </p>
          <div className="mx-auto flex mt-8 h-[3.75rem] lg:w-[34rem] items-center w-full">
            <input
              className="md:w-[28.125rem] flex items-center rounded-2xl mr-4 px-4 py-[1.25rem] h-full border border-[#000000]/0.6 bg-[#FDF9F5] cursor-text"
              placeholder="Enter Email Address"
            ></input>
            <div className="hidden md:block">
              <Button text="Subscribe" />
            </div>
          </div>
        </div>
        <div>
          <img src={socials} alt="icons" className="cursor-pointer" />
        </div>
      </div>
      <p className="font-[OpenSans-Bold] text-[1rem] text-white">
        © 2022 Meals. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
