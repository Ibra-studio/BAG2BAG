import React, { useEffect, useState } from "react";
// @ts-ignore
import Input from "@/components/form/Input";
import BtnPrimary from "../../components/ui/Btnprim";
// @ts-ignore
import ProfilePhotoSelector from "@/components/form/ProfilePhotoSelector";
import PhoneInput from "react-phone-input-2";

import { GetCurrentUser } from "../../utils/GetCurrentUser";
import { useParams } from "react-router";
import supabase from "../../services/supabaseClient";
import { uploadProfileImage } from "@/utils/uploadProfileImage";
import { Toaster } from "react-hot-toast";
import { showSuccessToast } from "../../utils/toast";
function Profile() {
  const id = useParams();
  console.log(id);

  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const [image, setImage] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(" fectching");
    async function fetchUser() {
      try {
        setIsLoading(true);
        let { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", id.id);

        setUser(data);
        setNom(data[0].nom);
        setPrenom(data[0].prenom);
        setEmail(data[0].email);
        setTel(data[0].numero_tel);
        setImage(data[0].photo_profil);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();

    let imageUrl = null;

    if (image instanceof File) {
      try {
        imageUrl = await uploadProfileImage(image, id.id);
        console.log("URL de l'image de profil →", imageUrl);

        window.dispatchEvent(new Event("profile-updated")); //evenement pour provoquer le refecth de la navabar pour afficher la nouvelle photo de profil
      } catch (error) {
        console.error(error);
        return;
      }
    } else if (typeof image === "string" && image) {
      // Si image est déjà une URL (ancienne image), on la garde
      imageUrl = image;
    }
    const { data, error } = await supabase
      .from("users")
      .update({
        nom: nom,
        prenom: prenom,
        email: email,
        numero_tel: tel,
        photo_profil: imageUrl,
      })
      .eq("id", id.id);

    if (error) {
      console.log("Erreur update :", error);
    } else {
      console.log("Update OK :", data);
      showSuccessToast("Votre profil a été mise à jour avec succès !");
    }
  }

  return (
    <div className="w-full flex  items-center justify-center pt-[100px]">
      <Toaster />
      {isloading && (
        <div className="w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      {!isloading && user && (
        <form onSubmit={(e) => handleUpdate(e)}>
          <div className="flex flex-col gap-5 mb-30 w-[360px] sm:w-[620px] lg:w-[800px] xl:w-[1000px] bg-white p-5 rounded-[30px] ">
            <p className="text-[15px] text-center text-Secondary">
              {image
                ? "Modifier votre photo de profil"
                : "Svp ajouter une photo de profil , pour que les autres utilisateurs puissent vous reconnaitre"}
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

            <BtnPrimary className="text-[20px]  flex justify-center">
              Sauvegarder
            </BtnPrimary>
          </div>
        </form>
      )}
    </div>
  );
}
export default Profile;
