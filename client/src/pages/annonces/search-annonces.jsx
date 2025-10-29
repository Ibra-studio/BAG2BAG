import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useModal } from "../../context/ModalContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import defaultUser from "@/assets/images/default-user.png";
import Navbar from "../../components/ui/Navbar";
import { addDays, set } from "date-fns";
import "../../assets/global.css";
// @ts-ignore
import { ReactComponent as Ellipse } from "../../assets/icons/Ellipse.svg";
// @ts-ignore
import { ReactComponent as KgIcon } from "../../assets/icons/kgIcon.svg";
// @ts-ignore
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
// @ts-ignore
import { ReactComponent as Plane } from "../../assets/icons/AvionIcon.svg";
import Avatar from "../../components/ui/Avatar";
import DatePicker from "./components/Datepicker";

// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import Modal from "@/components/Modal";
// @ts-ignore
import Login from "@/pages/Auth/login";
// @ts-ignore
import SignUp from "@/pages/Auth/signup";

import supabase from "../../services/supabaseClient";
import { showErrorToast } from "../../utils/toast";
import PostSkeleton from "./components/PostSkeleton";
import Alerte from "./components/Alerte";
import { useRef } from "react";

// const data = [
//   {
//     depart: "Sénégal,Dakar",
//     destination: "Maroc,Casablanca",
//     prix: 3500,
//     dateVoyage: "2025-05-12",
//     kiloRestant: 10,
//     prenom: "Awa",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Kenitra",
//     destination: "Côte d'Ivoire,Abidjan",
//     prix: 3000,
//     dateVoyage: "2025-05-18",
//     kiloRestant: 7,
//     prenom: "Karim",
//     profession: "ingénieur",
//   },
//   {
//     depart: "Bénin,Cotonou",
//     destination: "Maroc,Tanger",
//     prix: 4000,
//     dateVoyage: "2025-05-09",
//     kiloRestant: 12,
//     prenom: "Doris",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Rabat",
//     destination: "Mali,Bamako",
//     prix: 3200,
//     dateVoyage: "2025-05-21",
//     kiloRestant: 5,
//     prenom: "Omar",
//     profession: "entrepreneur",
//   },
//   {
//     depart: "Guinée,Conakry",
//     destination: "Maroc,Marrakech",
//     prix: 2800,
//     dateVoyage: "2025-05-07",
//     kiloRestant: 9,
//     prenom: "Fatou",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Fès",
//     destination: "Togo,Lomé",
//     prix: 4500,
//     dateVoyage: "2025-05-24",
//     kiloRestant: 6,
//     prenom: "Ismaël",
//     profession: "enseignant",
//   },
//   {
//     depart: "Burkina Faso,Ouagadougou",
//     destination: "Maroc,Agadir",
//     prix: 2700,
//     dateVoyage: "2025-05-11",
//     kiloRestant: 14,
//     prenom: "Yacouba",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Meknès",
//     destination: "Cameroun,Yaoundé",
//     prix: 2900,
//     dateVoyage: "2025-05-15",
//     kiloRestant: 8,
//     prenom: "Sarah",
//     profession: "développeur",
//   },
//   {
//     depart: "Niger,Niamey",
//     destination: "Maroc,Tétouan",
//     prix: 3500,
//     dateVoyage: "2025-05-13",
//     kiloRestant: 11,
//     prenom: "Ali",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Oujda",
//     destination: "Gabon,Libreville",
//     prix: 3100,
//     dateVoyage: "2025-05-19",
//     kiloRestant: 7,
//     prenom: "Leila",
//     profession: "étudiant",
//   },
//   {
//     depart: "Tchad,N'Djamena",
//     destination: "Maroc,Salé",
//     prix: 3300,
//     dateVoyage: "2025-05-10",
//     kiloRestant: 6,
//     prenom: "Moustapha",
//     profession: "professionnel",
//   },
//   {
//     depart: "Maroc,Settat",
//     destination: "Burundi,Bujumbura",
//     prix: 4200,
//     dateVoyage: "2025-05-23",
//     kiloRestant: 10,
//     prenom: "Clarisse",
//     profession: "étudiant",
//   },
//   {
//     depart: "Soudan,Khartoum",
//     destination: "Maroc,Nador",
//     prix: 2600,
//     dateVoyage: "2025-05-17",
//     kiloRestant: 4,
//     prenom: "Adam",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Béni Mellal",
//     destination: "RD Congo,Kinshasa",
//     prix: 3400,
//     dateVoyage: "2025-05-20",
//     kiloRestant: 13,
//     prenom: "Nadine",
//     profession: "gestionnaire",
//   },
//   {
//     depart: "Congo,Brazzaville",
//     destination: "Maroc,Laâyoune",
//     prix: 3700,
//     dateVoyage: "2025-05-14",
//     kiloRestant: 6,
//     prenom: "Jean",
//     profession: "étudiant",
//   },
//   {
//     depart: "Maroc,Taza",
//     destination: "Guinée-Bissau,Bissau",
//     prix: 3900,
//     dateVoyage: "2025-05-26",
//     kiloRestant: 9,
//     prenom: "Mariam",
//     profession: "étudiant",
//   },
//   {
//     depart: "Centrafrique,Bangui",
//     destination: "Maroc,Ksar El Kebir",
//     prix: 4100,
//     dateVoyage: "2025-05-16",
//     kiloRestant: 8,
//     prenom: "Ibrahim",
//     profession: "enseignant",
//   },
//   {
//     depart: "Maroc,Safi",
//     destination: "Éthiopie,Addis-Abeba",
//     prix: 4300,
//     dateVoyage: "2025-05-22",
//     kiloRestant: 10,
//     prenom: "Salma",
//     profession: "étudiant",
//   },
//   {
//     depart: "Ghana,Accra",
//     destination: "Maroc,Essaouira",
//     prix: 3000,
//     dateVoyage: "2025-05-08",
//     kiloRestant: 15,
//     prenom: "Kwame",
//     profession: "comptable",
//   },
//   {
//     depart: "Maroc,El Jadida",
//     destination: "Nigeria,Lagos",
//     prix: 2700,
//     dateVoyage: "2025-05-25",
//     kiloRestant: 7,
//     prenom: "Aminata",
//     profession: "étudiant",
//   },
// ];

export default function PostPage() {
  const { showModal, setShowModal, currentPage, setCurrentPage } = useModal();
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterVerified, setFilterVerified] = useState(false);
  const [filterStudent, setFilterStudent] = useState(false);

  return (
    <>
      <Toaster />
      {showModal &&
        (currentPage === "login" ? (
          <Modal
            title={"Connectez-vous"}
            setShowModal={setShowModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            <Login />
          </Modal>
        ) : currentPage === "alerte" ? (
          <Modal
            title={
              "Saisissez votre adresse e-mail pour qu'on vous tienne au courant"
            }
            setShowModal={setShowModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            className=""
          >
            <Alerte />
          </Modal>
        ) : (
          <Modal
            title={"Inscrivez-vous"}
            setShowModal={setShowModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            <SignUp />
          </Modal>
        ))}
      <section className="flex justify-center items-center flex-col pt-[100px]  w-[100%]">
        <SearchBar />
        <div className="spacer h-33"></div>
        <Filter
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterVerified={filterVerified}
          setFilterVerified={setFilterVerified}
          filterStudent={filterStudent}
          setFilterStudent={setFilterStudent}
        />
        <div className="spacer h-10"></div>
        <Postlist
          filterPrice={filterPrice}
          filterVerified={filterVerified}
          filterStudent={filterStudent}
        />
      </section>
    </>
  );
}

function SearchBar() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [Kg, setKg] = useState(() => Number(searchParams.get("kg")) || 0);
  const [depart, setDepart] = useState(() => searchParams.get("depart") || "");
  const [destination, setDestination] = useState(
    () => searchParams.get("destination") || ""
  );
  const [suggestionsTrajet, setSuggestionsTrajet] = useState([]);
  const [isOpenSuggestionsDepart, setIsOpenSuggestionsDepart] = useState(false);
  const [isOpenSuggestionsDestination, setIsOpenSuggestionsDestination] =
    useState(false);
  const [error, setError] = useState("");
  const [date, setDate] = useState({
    from: new Date(), // Date du moment
    to: addDays(new Date(), 20), // 20 jours après la date du moment
  });
  const prevValues = useRef({ depart: "", destination: "" });
  const navigate = useNavigate();
  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }
  function handlesuggestionDepart(e) {
    setDepart(e.target.innerText);
    setIsOpenSuggestionsDepart(false);
  }
  function handlesuggestionDestination(e) {
    setDestination(e.target.innerText);
    setIsOpenSuggestionsDestination(false);
  }
  useEffect(() => {
    const prevDepart = prevValues.current.depart;
    const prevDestination = prevValues.current.destination;

    // Mettre à jour les valeurs précédentes
    prevValues.current = { depart, destination };
    // Vérifier si les valeurs ont changé
    let searhValue;
    if (depart !== prevDepart) {
      searhValue = depart;
    } else if (destination !== prevDestination) {
      searhValue = destination;
    }
    async function fetchCountriesCities() {
      try {
        if (depart) {
          let { data: countries, error } = await supabase
            .from("countries")
            .select("id, name, flag, cities (id, name)")
            .ilike("name", `%${searhValue}%`);

          const formattedData = countries?.map((country) =>
            country.cities.map((city) => ({
              label: `${country.name} - ${city.name}`,
            }))
          );
          console.log(formattedData);
          if (formattedData && formattedData.length > 0) {
            setSuggestionsTrajet(formattedData);
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
      }
    }
    fetchCountriesCities();
  }, [depart, destination]);
  function handleSubmit(e) {
    e.preventDefault();
    if (Kg == 0) {
      showErrorToast("le nombre de kilo doit être superieur à 0");
      return;
    }
    const params = new URLSearchParams();
    params.set("kg", Kg);
    params.set("depart", depart);
    params.set("destination", destination);
    params.set("dateFrom", date.from);
    params.set("dateTo", date.to);
    console.log(date);
    navigate(`/annonces?${params.toString()}`);
    setError("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        // className="w-full flex justify-center items-center " en bas de xl
      >
        <div className=" w-[380px]  sm:w-[500px] md:w-[700px] flex flex-col Search-Bar xl:flex-row xl:w-[80%] relative ">
          {" "}
          {/*//en bas de xl w-[80%]*/}
          <div className="flex flex-col bg-white px-[10px] py-[5px] xl:rounded-l-[30px] gap-4 rounded-r-[0px] xl:flex-row xl:gap-0 ">
            <div className="flex flex-row xl:gap-[3px] gap-[5px] items-center px-2 py-3  xl:py-0 justify-start border-r-1  xl:justify-center  hover:bg-[#DEDEDE] xl:rounded-l-[30px] rounded-r-[30px] ">
              <Ellipse />
              <input
                type="text"
                placeholder="Depart"
                value={depart}
                required
                onChange={({ target }) => {
                  setDepart(target.value);
                  setIsOpenSuggestionsDepart(true);
                }}
                className="focus:outline-none text-[20px] text--roboto  " //en bas de xl w-full
              />
            </div>

            <div className="flex flex-row xl:gap-[3px]  gap-[5px]  py-3 xl:py-0 xl:ml-2  items-center  px-2 border-r-1 justify-start xl:justify-center  hover:bg-[#DEDEDE] xl:rounded-l-[30px] rounded-r-[30px] ">
              <Ellipse />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                required
                onChange={({ target }) => {
                  setDestination(target.value);
                  setIsOpenSuggestionsDestination(true);
                }}
                className="focus:outline-none text-[20px] text-roboto " // en bas de xl w-full
              />
            </div>
            <div className="hover:bg-[#DEDEDE] xl:rounded-l-[30px]  py-3 xl:py-0 px-2 xl:px-0 rounded-r-[30px] flex items-center justify-center">
              <DatePicker
                className={"text-roboto "}
                date={date}
                setDate={setDate}
              />
            </div>
            <div className="flex flex-col gap-[3px]  xl:ml-2  xl:justify-center xl:items-center relative ">
              <div
                className="flex flex-row h-full py-3 xl:py-0  gap-[10px] items-center xl:justify-center px-3 !justify-between text-[20px] text-Secondary hover:bg-[#DEDEDE] xl:rounded-l-[30px] rounded-r-[30px] "
                onClick={toggleDropdown}
              >
                <KgIcon />{" "}
                <input
                  className="xl:w-[23px] focus:border-none focus:outline-none"
                  type="text"
                  value={Kg}
                  placeholder="kg"
                  required
                  readOnly
                  // @ts-ignore
                  onChange={(e) => setKg(Number(e.target.value))}
                />{" "}
                kg
              </div>
              {isOpen && (
                <div className=" w-[300px] h-full gap-4 absolute bottom-[-70px] flex p-4 justify-between rounded-[30px] bg-white motion-preset-slide-right-lg items-center">
                  <p>Nombre de kilo</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-full w-[25px]  h-[25px] border-2 border-black p-[2px] flex items-center justify-center"
                      onClick={() => setKg((c) => (c == 0 ? 0 : c - 1))}
                    >
                      ➖
                    </button>
                    {Kg}
                    <button
                      type="button"
                      className="rounded-full w-[25px]  h-[25px] border-2 border-btn-primary p-[2px] flex items-center justify-center "
                      onClick={() => setKg((c) => c + 1)}
                    >
                      ➕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="bg-btn-primary flex flex-row gap-[5px] justify-center items-center px-[10px] py-[20px] text-[20px] hover:cursor-pointer hover:bg-btn-primary/80 xl:rounded-l-[0px] rounded-tl-[0px] rounded-tr-[0px]  xl:rounded-r-[30px] rounded-l-[30px] rounded-r-[30px] ">
            <Search /> Rechercher
          </button>
        </div>
        {suggestionsTrajet &&
          isOpenSuggestionsDepart &&
          !isOpenSuggestionsDestination && (
            <div className="bg-white w-[300px] absolute">
              <ul className="flex flex-col gap-3 p-4 mt-2">
                {suggestionsTrajet[0]?.map((trajet, index) => (
                  <li
                    key={index}
                    className="list-none hover:bg-btn-primary"
                    onClick={handlesuggestionDepart}
                  >
                    {trajet.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        {suggestionsTrajet &&
          !isOpenSuggestionsDepart &&
          isOpenSuggestionsDestination && (
            <div className="bg-white w-[300px] absolute right-300">
              <ul className="flex flex-col gap-3 p-4 mt-2">
                {suggestionsTrajet[0]?.map((trajet, index) => (
                  <li
                    key={index}
                    className="list-none hover:bg-btn-primary"
                    onClick={handlesuggestionDestination}
                  >
                    {trajet.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </form>
    </>
  );
}
// @ts-ignore
function LastSearch() {
  return <div></div>;
}
function Filter({
  filterPrice,
  setFilterPrice,
  filterVerified,
  setFilterVerified,
  filterStudent,
  setFilterStudent,
}) {
  // useEffect(() => {
  //   async function filterPost() {
  //     try {
  //       const { data, error } = await supabase
  //         .from("posts")
  //         .select(
  //           "* , users (id, nom , prenom , photo_profil ,isVerified , profession )"
  //         )
  //         .ilike("paysDepart", `%${depart}%`)
  //         .ilike("paysArrivee", `%${destination}%`)
  //         .gte("dateDepart", dateFrom)
  //         .lte("dateDepart", dateTo)
  //         .gte("nombreKiloDispo", kilo)
  //         .eq("isVerified", filterVerified);
  //     } catch (error) {}
  //   }
  //   filterPost();
  // }, [filterVerified, filterPrice, filterStudent]);
  return (
    <div className="flex flex-col lg:w-[1000px] w-[80%] gap-5">
      <div className="flex  flex-row justify-start  items-center">
        <p className="text-[20px]">Trier par :</p>
      </div>
      <div>
        <div className="border-t-1 flex md:flex-row  flex-col items-start  justify-center  md:justify-around border-secondary pt-5 ">
          <div className="flex flex-row gap-2 items-center text-[20px]">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] text-green accent-green"
              name="prix"
              checked={filterPrice}
              onChange={() => setFilterPrice((v) => !v)}
            />
            <label htmlFor="prix">Prix le plus bas</label>
          </div>
          <div className="flex flex-row gap-2 items-center text-[20px]">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] text-green accent-green"
              name="verified"
              checked={filterVerified}
              onChange={() => setFilterVerified((v) => !v)}
            />
            <label htmlFor="verified">Profil verifié </label>
          </div>
          <div className="flex flex-row gap-2 items-center text-[20px]">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] text-green accent-green"
              name="etudiant"
              checked={filterStudent}
              onChange={() => setFilterStudent((v) => !v)}
            />
            <label htmlFor="etudiant">Profil étudiant</label>
          </div>
        </div>
      </div>
    </div>
  );
}

function Postlist({ filterPrice, filterVerified, filterStudent }) {
  const [searchParams] = useSearchParams();
  const [Message, setMessage] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const { showModal, setShowModal, setCurrentPage } = useModal();

  function handleCreateAlerte() {
    setCurrentPage("alerte");
    setShowModal(true);
  }
  useEffect(() => {
    if (searchParams.has("depart") && searchParams.has("destination")) {
      setMessage(false);
      const kilo = searchParams.get("kg");
      const depart = searchParams.get("depart");
      const destination = searchParams.get("destination");
      const dateFrom = new Date(searchParams.get("dateFrom")).toISOString();
      const dateTo = new Date(searchParams.get("dateTo")).toISOString();

      getPost({
        kilo,
        depart,
        destination,
        dateFrom,
        dateTo,
        filterPrice,
        filterVerified,
        filterStudent,
      });
    }
    // eslint-disable-next-line
  }, [searchParams.toString(), filterPrice, filterVerified, filterStudent]);

  async function getPost({
    kilo,
    depart,
    destination,
    dateFrom,
    dateTo,
    filterPrice,
    filterVerified,
    filterStudent,
  }) {
    try {
      setIsLoading(true);
      setHasSearched(true);
      let query = supabase
        .from("posts")
        .select(
          " * ,dateDepart, users (id, nom , prenom , photo_profil ,isVerified , profession )"
        )
        .ilike("paysDepart", `%${depart}%`)
        .ilike("paysArrivee", `%${destination}%`)
        .gte("dateDepart", dateFrom)
        .lte("dateDepart", dateTo)
        .gte("nombreKiloDispo", kilo);

      if (filterPrice) {
        query = query.order("prixParKilo", { ascending: true });
      }
      if (filterVerified) {
        // Assuming 'users.isVerified' is the correct path for Supabase join filter
        query = query.eq("users.isVerified", true);
      }
      if (filterStudent) {
        // Assuming 'users.profession' is the correct path for Supabase join filter
        query = query.eq("users.profession", "etudiant");
      }

      const { data, error } = await query;

      if (error) {
        console.error("Erreur Supabase :", error);
        showErrorToast(
          "Erreur lors de la récupération des annonces: " + error.message
        );
        setPost([]);
        setMessage(true); // Or handle error state appropriately
        return;
      }

      let filteredData = data;
      if (filterVerified) {
        filteredData = filteredData.filter(
          (item) => item.users && item.users.isVerified === true
        );
      }
      if (filterStudent) {
        filteredData = filteredData.filter(
          (item) => item.users && item.users.profession === "etudiant"
        );
      }

      if (filteredData?.length === 0) {
        setMessage(true);
      } else {
        setMessage(false);
      }
      setPost(filteredData);
      console.log("Résultats :", filteredData);
    } catch (error) {
      console.error("Erreur générale :", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full flex flex-col gap-[20px] items-center justify-center">
      {isloading && <PostSkeleton card={4} />}
      {!isloading && !hasSearched && !searchParams.has("depart") && (
        <div className="w-full h-full flex justify-center items-cente mb-5 px-3 text-center">
          <p>Faites une recherche pour voir les annonces disponibles.</p>
        </div>
      )}
      {!isloading &&
        hasSearched && // Ensure search has been performed
        !Message &&
        post && // Ensure post is not null
        post.map((item, index) => <Post key={index} item={item} />)}

      {Message &&
        hasSearched && ( // Ensure search has been performed
          <div className=" w-full h-full flex  flex-col gap-5 justify-center items-center">
            <h2 className="text-[24px] text-center">
              {" "}
              Il n'y a pas encore de trajet disponible pour ces critères.{" "}
            </h2>
            <div onClick={handleCreateAlerte}>
              <BtnPrimary> Créer une alerte</BtnPrimary>
            </div>
          </div>
        )}
    </div>
  );
}
function Post({ item }) {
  const { users } = item;
  return (
    <Link to={`${item.id}`}>
      <div className="xl:w-[1000px] w-[380px]  sm:w-[500px]  md:w-[700px]  h-[196] bg-white flex flex-col justify-between  gap-[50px] rounded-[30px] p-[30px] shadow-sm  border-black border-2 hover:border-green hover:border-2 hover:shadow-0">
        <div className="flex justify-between items-center ">
          <div className="flex md:flex-col flex-row md:gap-0 gap-3">
            <div className="flex md:flex-row  flex-col items-center  gap-0">
              <div className="rounded-[50%] border-[1.5px] border-black w-[15px] h-[15px] "></div>
              <div className="md:!w-[300px] w-[1.5px] h-[100px]  md:h-[1.5px] bg-black  relative">
                <Plane className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 md:rotate-0" />
              </div>
              <div className="rounded-[100%] border-[1.5px] border-black w-[15px] h-[15px] "></div>
            </div>
            <div className="flex md:flex-row  flex-col justify-between items-center gap-[15px] ">
              <p className="text-[16px]"> {item.paysDepart}</p>
              <p className="text-[16px]"> {item.paysArrivee}</p>
            </div>
          </div>
          <div>
            <h5>
              <span className="text-green font-bold text-[20px]">
                {item.prixParKilo}FCFA/kg
              </span>
            </h5>
          </div>
        </div>
        <div className="border-t-1 border-black flex   flex-col-reverse  md:flex-row justify-between  items-center pt-[20px]">
          <div className="w-full md:w-auto  flex justify-center pt-6 md:pt-0  flex-row  items-center md:justify-center gap-5">
            <Avatar isVerified={users.isVerified}>
              <img
                src={users.photo_profil ? users.photo_profil : defaultUser}
              />
            </Avatar>
            <div className="flex flex-col gap-[1px]">
              <p>{users.prenom + " " + users.nom}</p>
              <p className="text-secondary">{users.profession}</p>
            </div>
          </div>
          <div className=" w-full md:w-auto  flex flex-col items-center sm:flex-row sm:justify-between xl:flex-row md:flex-col gap-5">
            <p>
              {" "}
              Date du voyage :{" "}
              <span className="text-green font-bold text-[20px]">
                {item.dateDepart.slice(0, 10)}
              </span>
            </p>
            <p>
              {" "}
              Kilos restants{" "}
              <span className="text-green font-bold text-[20px]">
                {item.nombreKiloDispo} kg
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
