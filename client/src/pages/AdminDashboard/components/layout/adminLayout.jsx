import React, { useEffect, useState } from "react";

// import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
// import { registerLicense } from "@syncfusion/ej2-base";
import supabase from "../../../../services/supabaseClient";
// registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);
// console.log(import.meta.env.VITE_SYNCFUSION_KEY);
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import { Outlet } from "react-router";
import NavItems from "./NavItems";
import { Calendar, Users, FileText } from "lucide-react";
const menuItems = [
  {
    title: "Dashboard",
    url: "/admin-dashboard",
    icon: Calendar,
  },
  {
    title: "Tous les Utilisateurs",
    url: "/admin-dashboard/users",
    icon: Users,
  },
  {
    title: "Tous les Posts",
    url: "/admin-dashboard/posts",
    icon: FileText,
  },
];

function AdminLayout() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fecthUser() {
      try {
        setIsLoading(true);
        let { data: users, error } = await supabase.from("users").select("*");
        setUsers(users);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      } finally {
        setIsLoading(false);
      }
    }
    fecthUser();
  }, []);

  return (
    <div>
      {isLoading && (
        <span className="loading loading-spinner loading-xl"></span>
      )}
      {!isLoading && users && (
        <div className="grid grid-cols-[300px_4fr] grid-rows-[1fr] min-h-screen">
          <div className="w-full h-full max-w-[300px]  bg-white hidden md:!flex pt-25 px-5  flex-col gap-20 ">
            <Logo />
            <div className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <NavItems
                  key={item.title}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
          <aside>
            <Outlet />
          </aside>
        </div>
      )}
    </div>
  );
}

export default AdminLayout;
