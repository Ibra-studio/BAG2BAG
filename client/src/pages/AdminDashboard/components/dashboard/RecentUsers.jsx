import { useEffect, useState } from "react";
import { getUsers } from "../../../../services/apiUsers";
import defaultUser from "@/assets/images/default-user.png";
export default function RecentUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([]); // This will hold the fetched user data

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const data = await getUsers();

        setUserData(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);
  const recentUser = [...userData]
    .sort((a, b) => a.dateDinscription - b.dateDinscription)
    .slice(0, 3);

  console.log(recentUser);
  return (
    <div className="rounded-lg  bg-white text-black border-0 shadow-sm p-6">
      {!isLoading && (
        <>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Derniers Utilisateurs Inscrits
            </h4>
          </div>
          <div className="space-y-4 pt-6">
            {recentUser.map((user, index) => (
              <div key={index} className="flex items-center gap-3 ">
                <div className="w-15 rounded-full ">
                  <img
                    alt="Profile picture"
                    className="rounded-full w-full h-full object-cover"
                    src={user.photo_profil ? user.photo_profil : defaultUser}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-[25px] font-medium text-gray-900">
                    {user.prenom} {user.nom}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.dateDinscription.slice(0, 10)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
