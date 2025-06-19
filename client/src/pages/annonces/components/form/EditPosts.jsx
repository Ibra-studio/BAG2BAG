import React, { useEffect, useState } from "react";
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import Input from "@/components/form/Input";
import CountrySelector from "../CountrySelector";
// @ts-ignore
import supabase from "@/services/supabaseClient";
import { showErrorToast, showSuccessToast } from "../../../../utils/toast";
import { useNavigate, useNavigation, useParams } from "react-router";
import { Toaster } from "react-hot-toast";
function EditPosts() {
  const [nbrKilo, setNbrKilo] = useState(0);
  const [prixParKilo, setPrixParKilo] = useState("");
  // @ts-ignore
  const [Arrive, setArrive] = useState("");
  // @ts-ignore
  const [Depart, setDepart] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        let { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("id", id.id);

        setNbrKilo(data[0].nombreKiloDispo);
        setDepart(data[0].paysDepart);
        setDescription(data[0].description);
        setArrive(data[0].paysArrivee);
        setDateDepart(data[0].dateDepart.slice(0, 10));
        setPrixParKilo(data[0].prixParKilo);
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);
  async function handleEditAnnonce(e) {
    e.preventDefault();
    console.log(Depart, Arrive, dateDepart);
    console.log(id.id);
    const { data, error } = await supabase
      .from("posts")
      .update({
        nombreKiloDispo: nbrKilo,
        paysDepart: Depart,
        paysArrivee: Arrive,
        dateDepart: dateDepart,
        prixParKilo: prixParKilo,
        description: description,
      })
      .eq("id", id.id);
    if (error) {
      console.log("Erreur update :", error);
    } else {
      console.log("Update OK :", data);
      showSuccessToast("Votre post a eté mis à jour avec succes !");
    }
    navigate(-1);
  }

  return (
    <>
      <Toaster />
      {!isLoading && (
        <div className="w-full flex justify-center pt-[100px]">
          <form onSubmit={handleEditAnnonce}>
            <div className="bg-white w-[360px] sm:w-[620px] lg:w-[800px] xl:w-[1000px] flex flex-col p-10 gap-4">
              <h4 className="text-center mb-10">Modifiez votre annonce</h4>
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
              <BtnPrimary className="flex justify-center">Modifiez</BtnPrimary>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditPosts;
