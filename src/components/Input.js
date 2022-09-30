import React from "react";

function Input({ label, placeholder }) {
  return (
    <div className="my-4">
      <label className="mb-2 font-[OpenSans-Semi] text-2xl">{label}</label>
      <input
        className="md:w-[28.125rem] w-[80vw] flex items-center rounded-2xl px-4 py-[0.625rem] h-[3rem] border border-[#000000]/0.6 bg-[#FDF9F5] cursor-text"
        placeholder={`Enter ${placeholder}`}
      ></input>
    </div>
  );
}

export default Input;
