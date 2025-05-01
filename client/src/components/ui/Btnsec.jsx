import React from "react";
export default function BtnSecondary({ children }) {
  return (
    <button
      className={`rounded-[30px] bg-black text-white border-solid border-black border-[1px] flex flex-row gap-[10px] px-[15px] py-[12px] font-[--roboto] text-[18px] hover:bg-btn-secondary-hover hover:cursor-pointer`}
    >
      {children}
    </button>
  );
}
