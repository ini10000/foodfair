import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Inputs from "../data/inputs";

function Recommendation() {
  return (
    <div className="w-[95vw] my-[200px]">
      <div className="flex flex-wrap w-screen px-16 md:px-32 text-left mb-[90px] items-center">
        <p className="font-[OpenSans] text-2xl ">
          Couldn't find your favourite vendor?{" "}
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-[#FDAD13] to-[#F84108] font-[OpenSans-Bold] text-[2.25rem]">
          RECOMMEND VENDOR
        </p>
      </div>

      <div className="px-4 md:px-32 text-left flex flex-wrap md:justify-between justify-center w-screen">
        {Inputs.map((item, index) => (
          <Input label={item.label} placeholder={item.placeholder} />
        ))}
        <div className="mt-[3.375rem] w-full flex justify-center items-center">
          <Button text="Recommend Vendor" />
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
