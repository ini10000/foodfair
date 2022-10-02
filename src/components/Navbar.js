import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import Button from "./Button";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="min-h-[9.5rem] relative navbar navbar-expand-lg bg-[#FDF9F5] translate-y-0 shadow-lg flex flex-wrap justify-between items-center top-0 z-[11px] w-screen backdrop-blur-[10px] transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)] px-4 md:px-16 pt-[3.75rem] pb-[1.875rem]">
      <div className="container-fluid flex-wrap w-full flex flex-row items-center justify-between z-[12px] ">
        <img src={logo} alt="logo" className="h-[2.625rem] w-[11.25rem]" />
        <button
          class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-target="#navbarSupportedContent1"
          onClick={() => setShow(!show)}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#000000"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          className={`collapse navbar-collapse flex-col lg:flex-row lg:items-center justify-between ${
            show === true && "show py-2 flex-col items-start"
          }`}
          id="navbarSupportedContent1"
        >
          <ul className="flex text-left items-start flex-col lg:flex-row font-[OpenSans-Semi] text-lg text-[#212429]">
            <li className="px-2 py-2 cursor-pointer text-transparent bg-clip-text bg-gradient-to-l from-[#FDAD13] to-[#F84108] justify-center">
              <p>Why FoodFair?</p>
              <div className="w-20 mx-auto mt-[0.625rem] h-[1px]  bg-gradient-to-l from-[#FDAD13] to-[#F84108]" />
            </li>
            <li className="px-2 py-2 cursor-pointer">Become a Vendor</li>
            <li className="px-2 py-2 cursor-pointer">FAQ</li>
            <li className="px-2 py-2 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>
        <div
          className={`collapse navbar-collapse flex-col lg:flex-row lg:items-center justify-between ${
            show === true && "show py-2 flex-col items-start"
          }`}
          id="navbarSupportedContent1"
        >
          <div className="flex flex-row">
            <div className="border border-[#06080E] rounded-2xl h-[3.0625rem] w-[6.5rem] px-8 py-4 mr-6 items-center justify-center flex">
              <p className="font-[OpenSans-Bold] text-2xl ">Login</p>
            </div>
            <Button text={"Sign Up"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
