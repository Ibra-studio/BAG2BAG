import React, { useEffect, useState } from "react";
// @ts-ignore
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
// @ts-ignore
import { ReactComponent as UserIcon } from "@/assets/icons/User.svg";
// @ts-ignore
import { ReactComponent as DiscIcon } from "@/assets/icons/disconnect-icon.svg";

import { Link, useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";
export default function Navbar({ children, setShowModal }) {
  const [Isloggin, setIsLoggin] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fechUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          setIsLoggin(true);
          const { data, error } = await supabase
            .from("users")
            .select("photo_profil")
            .eq("id", user.id)
            .single();

          if (error) {
            throw new Error("Failed to fetch user data");
          }
          if (data?.photo_profil) {
            setImageUrl(data.photo_profil);
            console.log("l'url de l'image est ->", data.photo_profil);
          }
        } else {
          setIsLoggin(false);
        }
        // ok !
      } else {
        console.log("Aucune session active : utilisateur non connecté");
      }
    }
    fechUser();
  }, []);
  function handleLogout() {
    supabase.auth.signOut();
    setIsLoggin(false);
    navigate("/");
  }
  return (
    <div>
      <div className="p-5  2xl:mx-[150px] xl:mx-[50px]  md:mx-[40px]  sm:mx-[20px] hidden sm:!flex   gap-[20px] justify-between items-center border-b-solid border-b-[0.3px] border-b-[#000000]">
        <Link to="/">
          <Logo />
        </Link>

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
                      src={
                        Isloggin
                          ? imageUrl
                          : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
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
                    <div
                      className="flex justify-between gap-2 items-center"
                      onClick={handleLogout}
                    >
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
            <button
              className="bg-transparent border-none"
              onClick={() => setShowModal((prev) => !prev)}
            >
              {" "}
              {children}
            </button>
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
          <button
            className="bg-transparent border-none"
            onClick={() => setShowModal((prev) => !prev)}
          >
            {" "}
            {children}
          </button>
        )}
      </div>
    </div>
  );
}
