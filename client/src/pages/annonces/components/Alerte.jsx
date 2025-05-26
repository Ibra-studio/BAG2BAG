import React, { useEffect, useState } from "react";
import BtnPrimary from "../../../components/ui/Btnprim";
import Input from "@/components/form/Input";
import supabase from "../../../services/supabaseClient";
import { GetCurrentUser } from "@/utils/GetCurrentUser";

function Alerte() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

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
    <div className="">
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
