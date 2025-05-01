import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/User.svg";
import { ReactComponent as DiscIcon } from "../../assets/icons/disconnect-icon.svg";
import BtnPrimary from "./Btnprim";

export default function Navbar() {
  const Isloggin = true;
  return (
    <div>
      <div className="p-5  2xl:mx-[150px] xl:mx-[50px]  md:mx-[40px]  sm:mx-[20px] hidden sm:!flex   gap-[20px] justify-between items-center border-b-solid border-b-[0.3px] border-b-[#000000]">
        <a href="/">
          <Logo />
        </a>
        <div>
          {Isloggin ? (
            <div className="flex gap-2 ">
              <div className="dropdown dropdown-end w-fit h-fit">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar w-[60px] h-[50px]"
                >
                  <div className="w-full rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-6 w-52 p-2 shadow "
                >
                  <li>
                    <a className="text-[20px] text-secondary hover:underline">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="text-[20px] text-secondary hover:underline">
                      Mes annonces
                    </a>
                  </li>
                  <li>
                    <div className="flex justify-between gap-2 items-center">
                      <a className="text-[20px] text-secondary hover:underline">
                        Se deconnecter
                      </a>
                      <DiscIcon className="text-black" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <BtnPrimary>S'inscrire</BtnPrimary>
          )}
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="navbar bg-base-100 flex sm:hidden shadow-sm pt-7 px-[15px]">
        <div className="flex-1">
          <a className="">
            <Logo />
          </a>
        </div>
        {Isloggin ? (
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                <li>
                  <a className="text-[16px] text-secondary">Profile</a>
                </li>
                <li>
                  <a className="text-[16px] text-secondary">Mes annonces</a>
                </li>
                <li>
                  <div className="flex justify-between gap-2 items-center">
                    <a className="text-[16px] text-secondary">Se deconnecter</a>
                    <DiscIcon className="text-black" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <BtnPrimary>
            <UserIcon /> S'inscrire
          </BtnPrimary>
        )}
      </div>
    </div>
  );
}
