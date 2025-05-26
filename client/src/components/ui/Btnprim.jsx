import React from "react";
export default function BtnPrimary({
  children,
  className = "",
  IsDisabled = false,
}) {
  return (
    <button
      className={` ${className} rounded-[30px]  bg-btn-primary text-black border-solid border-black border-[1px] flex flex-row gap-[10px] px-[15px] py-[12px] font-[--roboto] text-[18px] hover:bg-btn-primary-hover hover:cursor-pointer disabled:bg-[#F7F7F7] `}
      disabled={IsDisabled}
    >
      {children}
    </button>
  );
}
