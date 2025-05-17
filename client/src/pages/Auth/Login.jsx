import React, { useState } from "react";
import "@/assets/global.css";
// @ts-ignore
import Input from "@/components/form/Input";
import BtnPrimary from "../../components/ui/Btnprim";
import supabase from "../../services/supabaseClient";
import { useNavigate } from "react-router";

import { showSuccessToast } from "../../utils/toast";
export default function Login({ navigateTo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
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
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (data) {
      console.log("succes");
    }
    setError("");
    showSuccessToast("Connexion réussie 🎉");

    navigate(navigateTo);
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
            isRequired={true}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Mot de passe"}
            type="password"
            placeholder="Mininum 8 charactères"
            isRequired={true}
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
