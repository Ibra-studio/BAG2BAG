import React, { useEffect, useState } from "react";
import BtnPrimary from "../../../components/ui/Btnprim";
import Input from "@/components/form/Input";
import supabase from "../../../services/supabaseClient";
import { GetCurrentUser } from "@/utils/GetCurrentUser";
import { ReactComponent as Plane } from "@/assets/icons/AvionIcon.svg";
import { useSearchParams } from "react-router-dom";
function Alerte() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();

  const paysDepart = searchParams.get("depart");
  const paysArrivee = searchParams.get("destination");
  useEffect(() => {
    GetCurrentUser().then((u) => {
      setUser(u);
      setEmail(u.email);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex gap-4 flex-col">
      <div className=" bg-white py-2 rounded-[30px] ">
        <div className="flex flex-row   gap-4 ">
          <div className="flex flex-col  items-center  gap-0">
            <div className="rounded-[50%] border-[2px] border-black w-[15px] h-[15px] "></div>
            <div className="w-[2px]  h-[100px] bg-black  relative">
              <Plane className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
            </div>

            <div className="rounded-[100%] border-[2px] border-black w-[15px] h-[15px] "></div>
          </div>
          <div className="flex flex-col  justify-between items-center gap-[15px] ">
            <p className="text-[16px]">{paysDepart}</p>
            <p className="text-[16px]">{paysArrivee}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-8 flex-col">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={"Email"}
          type="email"
          placeholder="E-mail"
          isRequired={true}
        />
        <BtnPrimary
          className="flex items-center justify-center"
          IsDisabled={!email}
        >
          {" "}
          Creer une alerte
        </BtnPrimary>
      </form>
    </div>
  );
}

export default Alerte;
