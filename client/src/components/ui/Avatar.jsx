import React from "react";
// @ts-ignore
import { ReactComponent as VerifiedIcon } from "../../assets/icons/verifiedIcon.svg";
export default function Avatar({ children, isVerified }) {
  return (
    // <div className="rounded-[50%] w-[50px] h-[50px] border-btn-primary border-3 relative">
    //   <img
    //     src="https://cdn.blablacar.com/user-profile-picture/aZrhfcciQB6CJt3fcs8pTQ/thumbnail_144x144.jpeg"
    //     alt="profil"
    //     className="rounded-[50%] w-full h-full object-cover"
    //   ></img>
    //   {verified && (
    //     <div className="w-[12px] h-[12px] rounded-[50%] absolute bottom-0 right-0">
    //       <VerifiedIcon />
    //     </div>
    //   )}
    // </div>
    <div className="avatar relative">
      <div className="ring-green ring-offset-green w-14 rounded-full ring-1 ring-offset-2">
        {children}
      </div>
      {isVerified && (
        <div className="w-[25px] h-[25px] rounded-[50%] absolute bottom-0 right-[-3px]">
          <VerifiedIcon />
        </div>
      )}
    </div>
  );
}
