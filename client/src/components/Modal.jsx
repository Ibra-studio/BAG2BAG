import React from "react";
// @ts-ignore
import { ReactComponent as CloseIcon } from "@/assets/icons/closeIcon.svg";
export default function Modal({ children, setShowModal, title }) {
  return (
    // <div className="w-full h-[100dvh] bg-black/50 fixed flex justify-center items-center ">
    //   <div className="relative bg-white p-5">
    //     <div className="flex justify-between items-center">
    //       <div></div>
    //       <h3>{title}</h3>
    //       <button
    //         className="bg-transparent border-none"
    //         onClick={() => setShowModal((prev) => !prev)}
    //       >
    //         <CloseIcon />
    //       </button>
    //     </div>
    //   </div>
    //   {children}
    // </div>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-center mb-[15px]">{title}</h4>

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-700 cursor-pointer"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
}
