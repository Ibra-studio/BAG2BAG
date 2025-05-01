import React from "react";

export default function BtnDiscovery({ text }) {
  return (
    <div className=" px-[10px] py-[5px] md:px-[15px] md:py-[10px] rounded-[30px]  border-secondary border-solid border-4 ">
      <p className="text-[10px] md:text-[16px]">{text}</p>
    </div>
  );
}
