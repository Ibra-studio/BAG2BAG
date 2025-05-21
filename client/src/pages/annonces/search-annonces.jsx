import React, { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar";
import { addDays } from "date-fns";
import "../../assets/global.css";
// @ts-ignore
import { ReactComponent as Ellipse } from "../../assets/icons/ellipse.svg";
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
import Modal from "@/components/modal";
// @ts-ignore
import Login from "@/pages/Auth/login";
// @ts-ignore
import SignUp from "@/pages/Auth/signup";

import { Toaster } from "react-hot-toast";
import { useModal } from "../../context/ModalContext";

const data = [
  {
    depart: "Sénégal,Dakar",
    destination: "Maroc,Casablanca",
    prix: 3500,
    dateVoyage: "2025-05-12",
    kiloRestant: 10,
    prenom: "Awa",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Kenitra",
    destination: "Côte d'Ivoire,Abidjan",
    prix: 3000,
    dateVoyage: "2025-05-18",
    kiloRestant: 7,
    prenom: "Karim",
    profession: "ingénieur",
  },
  {
    depart: "Bénin,Cotonou",
    destination: "Maroc,Tanger",
    prix: 4000,
    dateVoyage: "2025-05-09",
    kiloRestant: 12,
    prenom: "Doris",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Rabat",
    destination: "Mali,Bamako",
    prix: 3200,
    dateVoyage: "2025-05-21",
    kiloRestant: 5,
    prenom: "Omar",
    profession: "entrepreneur",
  },
  {
    depart: "Guinée,Conakry",
    destination: "Maroc,Marrakech",
    prix: 2800,
    dateVoyage: "2025-05-07",
    kiloRestant: 9,
    prenom: "Fatou",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Fès",
    destination: "Togo,Lomé",
    prix: 4500,
    dateVoyage: "2025-05-24",
    kiloRestant: 6,
    prenom: "Ismaël",
    profession: "enseignant",
  },
  {
    depart: "Burkina Faso,Ouagadougou",
    destination: "Maroc,Agadir",
    prix: 2700,
    dateVoyage: "2025-05-11",
    kiloRestant: 14,
    prenom: "Yacouba",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Meknès",
    destination: "Cameroun,Yaoundé",
    prix: 2900,
    dateVoyage: "2025-05-15",
    kiloRestant: 8,
    prenom: "Sarah",
    profession: "développeur",
  },
  {
    depart: "Niger,Niamey",
    destination: "Maroc,Tétouan",
    prix: 3500,
    dateVoyage: "2025-05-13",
    kiloRestant: 11,
    prenom: "Ali",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Oujda",
    destination: "Gabon,Libreville",
    prix: 3100,
    dateVoyage: "2025-05-19",
    kiloRestant: 7,
    prenom: "Leila",
    profession: "étudiant",
  },
  {
    depart: "Tchad,N'Djamena",
    destination: "Maroc,Salé",
    prix: 3300,
    dateVoyage: "2025-05-10",
    kiloRestant: 6,
    prenom: "Moustapha",
    profession: "professionnel",
  },
  {
    depart: "Maroc,Settat",
    destination: "Burundi,Bujumbura",
    prix: 4200,
    dateVoyage: "2025-05-23",
    kiloRestant: 10,
    prenom: "Clarisse",
    profession: "étudiant",
  },
  {
    depart: "Soudan,Khartoum",
    destination: "Maroc,Nador",
    prix: 2600,
    dateVoyage: "2025-05-17",
    kiloRestant: 4,
    prenom: "Adam",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Béni Mellal",
    destination: "RD Congo,Kinshasa",
    prix: 3400,
    dateVoyage: "2025-05-20",
    kiloRestant: 13,
    prenom: "Nadine",
    profession: "gestionnaire",
  },
  {
    depart: "Congo,Brazzaville",
    destination: "Maroc,Laâyoune",
    prix: 3700,
    dateVoyage: "2025-05-14",
    kiloRestant: 6,
    prenom: "Jean",
    profession: "étudiant",
  },
  {
    depart: "Maroc,Taza",
    destination: "Guinée-Bissau,Bissau",
    prix: 3900,
    dateVoyage: "2025-05-26",
    kiloRestant: 9,
    prenom: "Mariam",
    profession: "étudiant",
  },
  {
    depart: "Centrafrique,Bangui",
    destination: "Maroc,Ksar El Kebir",
    prix: 4100,
    dateVoyage: "2025-05-16",
    kiloRestant: 8,
    prenom: "Ibrahim",
    profession: "enseignant",
  },
  {
    depart: "Maroc,Safi",
    destination: "Éthiopie,Addis-Abeba",
    prix: 4300,
    dateVoyage: "2025-05-22",
    kiloRestant: 10,
    prenom: "Salma",
    profession: "étudiant",
  },
  {
    depart: "Ghana,Accra",
    destination: "Maroc,Essaouira",
    prix: 3000,
    dateVoyage: "2025-05-08",
    kiloRestant: 15,
    prenom: "Kwame",
    profession: "comptable",
  },
  {
    depart: "Maroc,El Jadida",
    destination: "Nigeria,Lagos",
    prix: 2700,
    dateVoyage: "2025-05-25",
    kiloRestant: 7,
    prenom: "Aminata",
    profession: "étudiant",
  },
];

export default function PostPage() {
  const { showModal, setShowModal, currentPage, setCurrentPage } = useModal();

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
        <Filter />
        <div className="spacer h-10"></div>
        <Postlist />
      </section>
    </>
  );
}

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [Kg, setKg] = useState(0);
  const [depart, setDepart] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState({
    from: new Date(), // Date du moment
    to: addDays(new Date(), 20), // 20 jours après la date du moment
  });
  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!depart) {
      setError("veuillez saisir un pays de depart");
    }
    if (!depart) {
      setError("veuillez saisir un pays de destination");
    }

    setError("");
    setDepart("");
    setDestination("");
    setKg(0);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        // className="w-full flex justify-center items-center " en bas de xl
      >
        <div className="flex flex-col Search-Bar xl:flex-row w-[80%] xl:w- ">
          {" "}
          {/*//en bas de xl w-[80%]*/}
          <div className="flex flex-col bg-white px-[10px] py-[20px] xl:rounded-l-[30px] gap-4 rounded-r-[0px] xl:flex-row xl:gap-0">
            <div className="flex flex-row xl:gap-[3px] gap-[2px] items-center  justify-start border-r-1  xl:justify-center ">
              <Ellipse />
              <input
                type="text"
                placeholder="Depart"
                value={depart}
                onChange={({ target }) => setDepart(target.value)}
                className="focus:outline-none text-[20px] text--roboto " //en bas de xl w-full
              />
            </div>
            <div className="flex flex-row xl:gap-[3px]  gap-[2px] xl:ml-2  items-center   border-r-1 justify-start xl:justify-center ">
              <Ellipse />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={({ target }) => setDestination(target.value)}
                className="focus:outline-none text-[20px] text-roboto " // en bas de xl w-full
              />
            </div>
            <div>
              <DatePicker
                className={"text-roboto "}
                date={date}
                setDate={setDate}
              />
            </div>
            <div
              className="flex flex-col gap-[3px]  xl:ml-2  items-center !justify-between xl:justify-center xl:items-center relative "
              onClick={toggleDropdown}
            >
              <div className="flex flex-row gap-[10px] items-center xl:justify-center  !justify-between text-[20px] text-Secondary">
                <KgIcon />{" "}
                <input
                  className="xl:w-[30px] "
                  type="text"
                  value={Kg}
                  placeholder="kg"
                  // @ts-ignore
                  onChange={(e) => setKg(Number(e.target.value))}
                />{" "}
                kg
              </div>
              {isOpen && (
                <div className="mt-[20px] absolute bottom-[-30px]   bg-white">
                  <input
                    type="range"
                    min={0}
                    max={23}
                    // @ts-ignore
                    onChange={(e) => setKg(e.target.value)}
                    className="bg-green w-[100px]"
                  />
                </div>
              )}
            </div>
          </div>
          <button className="bg-btn-primary flex flex-row gap-[5px] justify-center items-center px-[10px] py-[20px] text-[20px] hover:cursor-pointer hover:bg-btn-primary/80 xl:rounded-l-[0px] rounded-tl-[0px] rounded-tr-[0px]  xl:rounded-r-[30px] rounded-l-[30px] rounded-r-[30px] ">
            <Search /> Rechercher
          </button>
        </div>
      </form>
    </>
  );
}
// @ts-ignore
function LastSearch() {
  return <div></div>;
}
function Filter() {
  return (
    <div className="flex flex-col lg:w-[1000px] w-[80%] gap-5">
      <div className="flex  flex-row justify-start  items-center">
        <p className="text-[20px]">Trier par :</p>
      </div>
      <div className="border-t-1 flex md:flex-row  flex-col items-center  justify-between md:justify-around border-secondary pt-5 ">
        <div className="flex flex-row gap-2 items-center text-[20px]">
          {" "}
          <input
            type="checkbox"
            className="w-[20px] h-[20px] text-green accent-green"
            name="prix"
          />
          <label htmlFor="prix">Prix le plus bas</label>
        </div>
        <div className="flex flex-row gap-2 items-center text-[20px]">
          {" "}
          <input
            type="checkbox"
            className="w-[20px] h-[20px] text-green accent-green"
            name="verified"
          />
          <label htmlFor="verified">Profil verifié </label>
        </div>
        <div className="flex flex-row gap-2 items-center text-[20px]">
          {" "}
          <input
            type="checkbox"
            className="w-[20px] h-[20px] text-green accent-green"
            name="prix"
          />
          <label htmlFor="">Profil étudiant</label>
        </div>
      </div>
    </div>
  );
}

function Postlist() {
  return (
    <div className="w-full flex flex-col gap-[20px] items-center justify-center">
      {data.map((item, index) => (
        <Post key={index} item={item} />
      ))}
    </div>
  );
}

function Post({ item }) {
  return (
    <div className="xl:w-[1000px] w-[90%]  h-[196] bg-white flex flex-col justify-between  gap-[50px] rounded-[30px] p-[30px] shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex md:flex-col flex-row md:gap-0 gap-3">
          <div className="flex md:flex-row  flex-col items-center  gap-0">
            <div className="rounded-[50%] border-[1.5px] border-black w-[15px] h-[15px] "></div>
            <div className="md:!w-[300px] w-[1.5px] h-[100px]  md:h-[1.5px] bg-black  relative">
              <Plane className=" absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="rounded-[100%] border-[1.5px] border-black w-[15px] h-[15px] "></div>
          </div>
          <div className="flex md:flex-row  flex-col justify-between items-center gap-[15px] ">
            <p className="text-[16px]"> {item.depart}</p>
            <p className="text-[16px]"> {item.destination}</p>
          </div>
        </div>
        <div>
          <h5>
            <span className="text-green font-bold text-[20px]">
              {item.prix}FCFA/kg
            </span>
          </h5>
        </div>
      </div>
      <div className="border-t-1 border-black flex justify-between  items-center pt-[20px]">
        <div className="flex flex-row  items-center justify-center gap-5">
          <Avatar />
          <div className="flex flex-col gap-[1px]">
            <p>{item.prenom}</p>
            <p className="text-secondary">{item.profession}</p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-5">
          <p>
            {" "}
            Date du voyage :{" "}
            <span className="text-green font-bold text-[20px]">
              {item.dateVoyage}
            </span>
          </p>
          <p>
            {" "}
            Kilos restants{" "}
            <span className="text-green font-bold text-[20px]">
              {item.kiloRestant} kg
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
