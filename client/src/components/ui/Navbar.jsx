import React, { useEffect, useState } from "react";
// @ts-ignore
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
// @ts-ignore
import { ReactComponent as UserIcon } from "@/assets/icons/User.svg";
// @ts-ignore
import { ReactComponent as DiscIcon } from "@/assets/icons/disconnect-icon.svg";

import { Link, useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";
import defaultUser from "../../assets/images/default-user.png";
import { set } from "date-fns";
export default function Navbar({ children, setShowModal }) {
  const [Isloggin, setIsLoggin] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState();
  async function fetchUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
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
        }
      } else {
        setIsLoggin(false);
      }
      // ok !
    } else {
      console.log("Aucune session active : utilisateur non connecté");
    }
  }
  useEffect(() => {
    fetchUser();
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    // Ajout : écoute l'événement custom
    const handleProfileUpdate = () => fetchUser();
    window.addEventListener("profile-updated", handleProfileUpdate);

    return () => {
      listener?.subscription.unsubscribe();
      window.removeEventListener("profile-updated", handleProfileUpdate);
    };
  }, []);

  function handleLogout() {
    supabase.auth.signOut();
    setIsLoggin(false);
    navigate("/app");
  }
  return (
    <div>
      <div className="p-5  2xl:mx-[150px] xl:mx-[50px]  md:mx-[40px]  sm:mx-[20px] hidden sm:!flex   gap-[20px] justify-between items-center border-b-solid border-b-[0.3px] border-b-[#000000]">
        <Link to="/app">
          <Logo />
        </Link>

        <div>
          {Isloggin ? (
            <div className="flex gap-2 ">
              <div className="dropdown dropdown-end w-fit h-fit">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar w-[60px] h-[60px]"
                >
                  <div className="w-full rounded-full">
                    <img
                      alt="Profile picture"
                      src={imageUrl ? imageUrl : defaultUser}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-6 w-55 p-2 shadow "
                >
                  <li>
                    <Link
                      to={`/app/myprofile/${user?.id}`}
                      className="text-[20px] text-secondary hover:underline"
                    >
                      {" "}
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/app/myannonces/${user?.id}`}
                      className="text-[20px] text-secondary hover:underline"
                    >
                      {" "}
                      Mes annonces
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/app/annonces/create`}
                      className="text-[20px] text-secondary hover:underline"
                    >
                      {" "}
                      Publier une annonce
                    </Link>
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
            <div onClick={() => setShowModal((prev) => !prev)}>{children}</div>
          )}
        </div>
      </div>
      {/* Mobile navigation */}
      <div
        className={`navbar bg-base-100 flex ${
          Isloggin ? "" : "flex-col"
        } gap-3 sm:hidden shadow-sm pt-7 px-[15px]`}
      >
        <div className="flex-1">
          <Link to="/app">
            <Logo />
          </Link>
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
                    alt="profile picture"
                    src={
                      imageUrl
                        ? imageUrl
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-55 p-2 shadow "
              >
                <li>
                  <Link
                    to={`/app/myprofile/${user?.id}`}
                    className="text-[20px] text-secondary hover:underline"
                  >
                    {" "}
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/app/myannonces/${user?.id}`}
                    className="text-[20px] text-secondary hover:underline"
                  >
                    {" "}
                    Mes annonces
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/app/annonces/create`}
                    className="text-[20px] text-secondary hover:underline"
                  >
                    {" "}
                    Publier une annonce
                  </Link>
                </li>
                <li>
                  <div
                    className="flex justify-between gap-2 items-center"
                    onClick={handleLogout}
                  >
                    <a className="text-[20px] text-secondary">Se deconnecter</a>
                    <DiscIcon className="text-black" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div onClick={() => setShowModal((prev) => !prev)}>{children}</div>
        )}
      </div>
    </div>
  );
}
