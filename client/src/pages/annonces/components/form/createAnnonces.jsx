import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "../../../../components/ui/Navbar";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
import Input from "@/components/form/Input";
import CountrySelector from "../CountrySelector";

function CreateAnnonces() {
  const [showModal, setShowModal] = useState(false);
  const [nbrKilo, setNbrKilo] = useState(0);
  const [prixParKilo, setPrixParKilo] = useState("");
  const [Arrive, setArrive] = useState("");
  const [Depart, setDepart] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [description, setDescription] = useState("");
  function handleCreateAnnonce(e) {
    e.preventDefault();
  }
  return (
    <>
      <Toaster />
      <Navbar setShowModal={setShowModal}>
        <BtnPrimary>S'inscrire / Se connecter</BtnPrimary>
      </Navbar>
      <div className="w-full flex justify-center pt-[100px]">
        <form onSubmit={handleCreateAnnonce}>
          <div className="bg-white w-[1000px] flex flex-col p-10 gap-4">
            <h4 className="text-center mb-10">Creer une annonce</h4>
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

            <BtnPrimary className="flex justify-center">Creer</BtnPrimary>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateAnnonces;
