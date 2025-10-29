import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../services/supabaseClient";
import MyannoncesRow from "./components/MyannoncesRow"; // Assuming you have a row component for displaying each annonce
function Myannonces() {
  const id = useParams();
  const [isloading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
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
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    async function fetchPosts() {
      try {
        let { data, error } = await supabase
          .from("posts")
          .select("paysArrivee,paysDepart,dateDepart,id")
          .eq("idUser", id.id);
        setPosts(data);
        // Handle the fetched posts data as needed
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching posts data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
    fetchPosts();
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
          <div className="flex flex-col gap-5">
            <div>
              <h3> Vos annonces</h3>
              <hr className="border-3" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                      Trajet
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                      Date de depart
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-500 uppercase tracking-wide text-lg">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <MyannoncesRow key={index} post={post} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {!isloading && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-2xl font-semibold text-gray-700">
            Vos posts crées s'afficheront ici
          </h2>
        </div>
      )}
    </div>
  );
}

export default Myannonces;
