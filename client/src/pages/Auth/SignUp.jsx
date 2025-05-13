import React, { useState } from "react";
// @ts-ignore
import Input from "@/components/form/Input";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import ProfilePhotoSelector from "@/components/form/ProfilePhotoSelector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState(null);
  function handleSignUp(e) {
    e.preventDefault();

    if (!fullName) {
      setError("veuillez saisir votre Nom complet");
    }
    if (!email) {
      setError("veuillez entrer votre addresse email");
    }
    if (!password) {
      setError("veuillez entrer votre mot de passe");
    }
    setError("");
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
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            type="text"
            label="Nom"
            placeholder=" Entrez votre nom"
          />
          <Input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            type="text"
            label="Prenom"
            placeholder=" Entrez votre prenom"
          />
          <div className="flex  flex-col gap-2">
            <label className="text-[18px]">Numero de telephone</label>
            <PhoneInput
              country={"ma"} // Sénégal par défaut
              onlyCountries={[
                "sn",
                "ci",
                "ml",
                "ng",
                "gh",
                "cm",
                "tg",
                "bj",
                "bf",
                "ma",
                "ml",
              ]}
              value={tel}
              onChange={(value) => setTel(value)}
              inputClass="focus:ring-2 focus:ring-btn-primary"
              inputStyle={{
                width: "100%",
                fontSize: "20px",
                backgroundColor: "#F7F7F7",
                border: "none",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
              dropdownStyle={{}}
              autoFormat={true} // optionnel pour formatage visuel
            />
          </div>
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
