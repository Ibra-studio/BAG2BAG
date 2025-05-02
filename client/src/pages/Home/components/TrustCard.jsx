import React from "react";
import "./trustCard.css";

export default function TrustCard({ titre, description, Icon }) {
  return (
    <div className="TrustCard_container flex  flex-col  lg:w-[45%] gap-[20px] w-full  md:gap-[42px]  2xl:flex-row justify-center items-center ">
      <div className="TrustCard_content">
        <h5 className=" text-[20px] sm:text-[25px] lg:text-[26px]">{titre}</h5>
        <p className="text-secondary text-[16px] sm:text-[20px] lg:text-[22px] ">
          {description}
        </p>
      </div>
      <div className="TrustCard_image">
        <Icon />
      </div>
    </div>
  );
}
