import React, { useState } from "react";
// @ts-ignore
import Input from "@/components/form/Input";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import ProfilePhotoSelector from "@/components/form/ProfilePhotoSelector";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState(null);
  function handleSignUp(e) {
    e.preventDefault();
  }
  return (
    <div className="">
      <form onSubmit={handleSignUp}>
        <div className="flex flex-col gap-5 mb-5">
          <p className="text-[15px] text-center text-Secondary">
            C’est la première chose que les autres verront de toi. Choisis une
            image claire .
          </p>
          <ProfilePhotoSelector image={image} setImage={setImage} />
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Nom complet"
            placeholder=" Entrez votre nom complet"
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email / nom d'utilisateur"}
            type="email"
            placeholder="Entrez votre email ou nom d'utilisateur"
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
            S'inscrire
          </BtnPrimary>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
