import React from "react";
import Button from "./Button";

function Search() {
  return (
    <div className="mx-auto flex mt-16 w-[38.125rem] h-[4rem] items-center justify-between mb-32">
      <input
        className="w-[28.125rem] flex items-center rounded-2xl px-4 py-[1.25rem] h-full border border-[#000000]/0.6 bg-[#FDF9F5]  bg-[url('/src/assets/images/location.svg')]  bg-auto bg-left bg-origin-content bg-no-repeat indent-7 ease-in-out duration-300 focus:bg-none focus:indent-0 cursor-text"
        placeholder="Enter Location"
      ></input>
      <Button text="Search" />
    </div>
  );
}

export default Search;
