import React, { useEffect, useState } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { registerLicense } from "@syncfusion/ej2-base";
import supabase from "../../services/supabaseClient";

registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);
console.log(import.meta.env.VITE_SYNCFUSION_KEY);
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
function DashboardAdmin() {
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
        <div>
          <aside className="w-full  h-[100dvh] max-w-[270px] hidden lg:!block">
            <SidebarComponent width={270} enableGestures={false}>
              <div className="bg-white flex flex-col gap-10  w-full h-full p-5 pt-30">
                <Logo />
              </div>
            </SidebarComponent>
          </aside>
        </div>
        // <GridComponent dataSource={users}>
        //   <ColumnsDirective>
        //     <ColumnDirective field="Nom" width="100" textAlign="Right" />
        //     <ColumnDirective field="prenom" width="200" />
        //     <ColumnDirective
        //       field="numero_tel"
        //       width="150"
        //       textAlign="Center"
        //     />
        //     <ColumnDirective field="email" width="350" textAlign="Right" />
        //     <ColumnDirective
        //       field="IsVerified"
        //       width="100"
        //       textAlign="Center"
        //     />
        //   </ColumnsDirective>
        // </GridComponent>
      )}
    </div>
  );
}

export default DashboardAdmin;
