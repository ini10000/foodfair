import React from "react";

function Button({ text, width }) {
  return (
    <div
      className={`cursor-pointer border rounded-2xl h-[3.0625rem]  border-[#FF8A00] px-8 py-4 items-center justify-center flex bg-[#FF8A00]`}
    >
      <p className="font-[OpenSans-Bold] text-2xl text-[#FFFFFF]">{text}</p>
    </div>
  );
}

export default Button;
