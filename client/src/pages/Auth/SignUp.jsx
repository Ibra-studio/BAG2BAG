import React, { useState } from "react";
// @ts-ignore
import Input from "@/components/form/Input";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import ProfilePhotoSelector from "@/components/form/ProfilePhotoSelector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// @ts-ignore
import supabase from "@/services/supabaseClient";
// @ts-ignore
import { uploadProfileImage } from "@/utils/uploadProfileImage";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    if (!nom) {
      setMessage("veuillez saisir votre Nom ");
    }
    if (!email) {
      setMessage("veuillez entrer votre addresse email");
    }
    if (!password) {
      setMessage("veuillez entrer votre mot de passe");
    }

    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setMessage(error.message);
      return;
    }
    if (data.user) {
      const userId = data.user.id;
      console.log("ID de l'utilisateur →", userId);

      // let imageUrl = null;

      // if (image) {
      //   try {
      //     imageUrl = await uploadProfileImage(image, userId);
      //     console.log("URL de l'image de profil →", imageUrl);
      //   } catch (error) {
      //     setMessage("Erreur lors de l'upload de l'image.");
      //     console.error(error);
      //     return;
      //   }
      // }

      const { error: insertError } = await supabase.from("users").insert([
        {
          id: userId,
          nom: nom,
          prenom: prenom,
          email: email,
          numero_tel: tel,
        },
      ]);

      if (insertError) {
        console.log(insertError);
        setMessage("Erreur lors de l'insertion dans la table users");
      }
    }
    navigate("/annonces");
  }
  return (
    <div className="">
      <form onSubmit={(e) => handleSignUp(e)}>
        <div className="flex flex-col gap-5 mb-5">
          <p className="text-[15px] text-center text-Secondary">
            C'est la première chose que les autres verront de toi. Choisis une
            image claire .
          </p>
          <ProfilePhotoSelector image={image} setImage={setImage} />
          <Input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            type="text"
            label="Nom"
            placeholder=" Entrez votre nom"
            isRequired={true}
          />
          <Input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            type="text"
            label="Prenom"
            placeholder=" Entrez votre prenom"
            isRequired={true}
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
                "ne",
                "mr",
                "cg",
                "cd",
                "gn",
                "gw",
                "sd",
                "td",
                "mg",
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

          {message && <p className="text-red-500 ">{message}</p>}
          <BtnPrimary className="text-[20px]  flex justify-center">
            S'inscrire
          </BtnPrimary>
        </div>
      </form>
    </div>
  );
}
