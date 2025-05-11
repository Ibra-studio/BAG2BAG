import React, { useState } from "react";
import "@/assets/global.css";
// @ts-ignore
import Input from "@/components/form/Input";
import BtnPrimary from "../../components/ui/Btnprim";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //handle login form submit
  async function handlelogin(e) {
    e.preventDefault();

    if (!email) {
      setError("Veuillez entrer votre email ou nom d'utilisateur");
      return;
    }
    if (!password) {
      setError("Veuillez entrer votre mot de passe");
      return;
    }
    setError("");
  }
  return (
    <div>
      <form onSubmit={handlelogin}>
        <div className="flex flex-col gap-5 mb-5">
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email "}
            type="email"
            placeholder="Entrez votre email "
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Mot de passe"}
            type="password"
            placeholder="Mininum 8 charactères"
          />

          {error && <p className="text-red-500 ">{error}</p>}
          <BtnPrimary className="text-[20px]  flex justify-center">
            Se connecter
          </BtnPrimary>
        </div>
      </form>
    </div>
  );
}
