import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import supabase from "../../services/supabaseClient";
function Myannonces() {
  const id = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log(" fectching");
    async function fetchUser() {
      try {
        setIsLoading(true);
        let { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", id.id);
        console.log(data[0]);
        setUser(data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);
  return (
    <div className=" 2xl:mx-[150px] xl:mx-[50px]  md:mx-[40px]  sm:mx-[20px] pt-20">
      {isloading && (
        <div className="w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      {!isloading && (
        <div className="flex flex-col gap-40">
          <div>
            {" "}
            <h1 className=" md:text-[65px] sm:text-[55px] text-[45px]">
              Bienvenue {user.prenom} {user.nom}{" "}
            </h1>
          </div>
          <div>
            <div>
              <h3> Vos annonces</h3>
              <hr className="border-3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myannonces;
