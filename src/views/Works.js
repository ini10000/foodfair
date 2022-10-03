import React from "react";

import signup from "../assets/images/signup.svg";
import pickup from "../assets/images/pickup.svg";
import customers from "../assets/images/customers.svg";

function Works() {
  return (
    <div className="bg-[#FFF6EB] mt-[128px] pt-16 pb-32 w-screen px-[10.5rem]">
      <p className="text-[2.5rem] text-center font-[OpenSans-Bold] mb-8">
        HOW IT WORKS
      </p>
      <div className="flex justify-center lg:justify-between items-center flex-wrap">
        <div className="w-[14.6875rem] my-[1rem] flex flex-col justify-between items-center">
          <img src={signup} alt="signup" />
          <p className="font-[OpenSans-Semi] my-[2.25rem] text-2xl text-[#212429]">
            Sign Up as a Vendor or Customer
          </p>
        </div>
        <div className="w-[14.6875rem] my-[1rem] flex flex-col justify-between items-center">
          <img src={pickup} alt="pickup" />
          <p className="font-[OpenSans-Semi] my-[2.25rem] text-2xl text-[#212429]">
            Set your Location for delivery or Pick-up
          </p>
        </div>
        <div className="w-[14.6875rem] my-[1rem] flex flex-col justify-between items-center">
          <img src={customers} alt="customers" />
          <p className="font-[OpenSans-Semi] my-[2.25rem] text-2xl text-[#212429]">
            Find Customers or Vendors near you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
