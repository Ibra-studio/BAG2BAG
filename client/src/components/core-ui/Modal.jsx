import React from "react";
// @ts-ignore
import { ReactComponent as CloseIcon } from "@/assets/icons/closeIcon.svg";
export default function Modal({
  children,
  setShowModal,
  title,
  currentPage,
  setCurrentPage,
  blur = "4px",
  classname,
}) {
  function handleToggleModal() {
    setShowModal((prev) => !prev);
    setCurrentPage("login");
  }
  return (
    <div
      className={`${classname}fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-${blur}`}
      onClick={handleToggleModal}
    >
      <div
        className="bg-white  p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-center mb-[15px]">{title}</h4>

        <button
          onClick={handleToggleModal}
          className="absolute top-2 right-3 text-gray-500 text-2xl hover:text-gray-700 cursor-pointer"
        >
          <CloseIcon />
        </button>
        {children}
        <button
          className="text-center"
          onClick={() =>
            setCurrentPage((prev) => (prev === "login" ? "signup" : "login"))
          }
        >
          {currentPage === "login" ? (
            <p className="">
              {" "}
              Nouveau membre ?
              <span className=" text-green underline cursor-pointer">
                {" "}
                Inscrivez-vous ici
              </span>
            </p>
          ) : (
            <p>
              Dejà membre ?
              <span className=" text-green underline cursor-pointer">
                {" "}
                Connectez-vous ici
              </span>
            </p>
          )}
        </button>
      </div>
    </div>
  );
}
