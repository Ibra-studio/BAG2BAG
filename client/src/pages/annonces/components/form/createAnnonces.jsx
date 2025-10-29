// @ts-ignore
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import Input from "@/components/form/Input";
import CountrySelector from "../CountrySelector";
// @ts-ignore
import supabase from "@/services/supabaseClient";
import { showErrorToast, showSuccessToast } from "../../../../utils/toast";
import { useNavigate } from "react-router-dom";

function CreateAnnonces() {
  // @ts-ignore

  const [nbrKilo, setNbrKilo] = useState(0);
  const [prixParKilo, setPrixParKilo] = useState("");
  // @ts-ignore
  const [Arrive, setArrive] = useState("");
  // @ts-ignore
  const [Depart, setDepart] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  async function handleCreateAnnonce(e) {
    e.preventDefault();
    if (nbrKilo === 0) {
      setMessage("le nombre de kilo doit être supérieure à 0");
      return;
    }
    if (!dateDepart) {
      setMessage(" veuillez saisir la date de depart");
      return;
    }
    if (!Depart) {
      setMessage(" veuillez saisir les champs de depart");
      return;
    }
    if (!Arrive) {
      setMessage(" veuillez saisir les champs de d'arrivée");
      return;
    }
    let userId;
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        userId = user.id;
      }
    } catch (error) {
      console.log(error.message);
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          nombreKiloDispo: nbrKilo,
          prixParKilo: prixParKilo,
          paysArrivee: Arrive,
          paysDepart: Depart,
          dateDepart: dateDepart,
          idUser: userId,
          description: description,
        },
      ])
      .select();
    if (data) {
      showSuccessToast("Post crée avec succès 🎉");
      navigate(`/myannonces/${userId}`);
    }
    if (error) {
      showErrorToast("erreur pour creer le post");
      setMessage("");
    }
    //TODO:faire les error handling
  }
  return (
    <>
      <Toaster />

      <div className="w-full flex justify-center pt-[100px]">
        <form onSubmit={handleCreateAnnonce}>
          <div className="bg-white w-[360px] sm:w-[620px] lg:w-[800px] xl:w-[1000px] flex flex-col p-10 gap-4">
            <h4 className="text-center mb-10">Créez une annonce</h4>
            <Input
              value={nbrKilo}
              onChange={({ target }) => setNbrKilo(target.value)}
              type={"text"}
              label="Nombre de kilos disponible"
              placeholder="Entrez le nombre de kilo"
              isRequired={true}
            />
            <Input
              value={prixParKilo}
              onChange={({ target }) => setPrixParKilo(target.value)}
              type={"text"}
              label="Prix par kilo"
              placeholder="Entrez le prix d'1 kg Ex:4000 fcfa "
              isRequired={true}
            />
            <CountrySelector setFullLabel={setDepart} label="de depart" />
            <CountrySelector setFullLabel={setArrive} label="d'arrivée" />
            <div className="flex flex-col gap-2">
              <label className="text-[20px]">Date depart</label>
              <input
                type="date"
                value={dateDepart}
                onChange={({ target }) => setDateDepart(target.value)}
                className="bg-[#F7F7F7] p-3 focus:outline-none focus:ring-2 focus:ring-btn-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[20px]">Specificitées</label>
              <textarea
                rows={10}
                cols={50}
                value={description}
                onChange={({ target }) => setDescription(target.value)}
                placeholder="Entrez les specificitées de votre annoncence Ex: je ne veux pas prendre de verres "
                className="bg-[#F7F7F7] text-[20px] p-5"
              ></textarea>
            </div>
            {message && <p className="text-red-500 ">{message}</p>}
            <BtnPrimary className="flex justify-center">Creer</BtnPrimary>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateAnnonces;
