import React from "react";

// @ts-ignore
import { ReactComponent as Img } from "@/assets/icons/header-image2.svg";

// @ts-ignore
import { ReactComponent as Img2 } from "@/assets/icons/header-image3.svg";

// @ts-ignore
import { ReactComponent as Img3 } from "@/assets/icons/hero-image4.svg";

// @ts-ignore
import { ReactComponent as Img4 } from "@/assets/icons/hero-imageMobile.svg";

// @ts-ignore
import { ReactComponent as Icon } from "@/assets/icons/header-icon.svg";

// @ts-ignore
import { ReactComponent as IconLiv } from "@/assets/icons/icon-livraison.svg";

// @ts-ignore
import { ReactComponent as IconSearh } from "@/assets/icons/icon-search.svg";
import "@/assets/global.css";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import BtnSecondary from "@/components/ui/Btnsec";
import Modal from "../../../components/modal";
import Login from "../../Auth/login";
export default function HeaderSection({ showModal, setShowModal }) {
  return (
    <section className="flex flex-col gap-[50px] items-center justify-center pt-[100px] md:pt-40 header-section ">
      <div className="flex flex-col gap-[50px]  px-[15px]   header-text  text-center  ">
        <div className="relative ">
          <h1 className="text-center  md:text-[65px] sm:text-[55px] text-[45px]">
            Rentabilisez vos kilos <br className="hidden md:!inline" /> restants
            en voyageant
          </h1>
          <Icon className="absolute top-[-30px] right-[-5px] md:right-[-15px] lg:right-[-30px]  motion-preset-wobble hidden lg:!block " />
        </div>
        <p className="sm:text-[25px] text-[16px] font-[--roboto] motion-scale-in-[1.5] motion-opacity-in-[0%]">
          Gagnez de l'argent en partageant votre espace bagages inutilisé{" "}
          <br className="hidden md:!inline" /> avec des personnes qui cherchent
          à envoyer des colis
        </p>
        <div className="flex flex-col lg:flex-row gap-[20px] justify-center items-center">
          <BtnPrimary>
            <IconLiv />
            Transporter un colis
          </BtnPrimary>
          <BtnSecondary>
            <IconSearh />
            Voir les annonces
          </BtnSecondary>
        </div>
      </div>
      {showModal && (
        <Modal title={"Connectez-vous"} setShowModal={setShowModal}>
          <Login />
        </Modal>
      )}
      <div className="relative flex justify-center px-[15px] items-center header-image w-full">
        <div className=" absolute w-[100%] h-[50%] bg-[#368f8b] rounded-[100%] blur-[400px] z-[-1] mt-15"></div>
        <div className="h-full w-full flex justify-center items-center  ">
          {" "}
          <Img className="hidden xl:!block motion-preset-slide-right motion-duration-1500" />
          <Img2 className="hidden lg:!block xl:!hidden" />
          <Img3 className="hidden sm:max-lg:!block " />
          <Img4 className="block sm:!hidden" />
        </div>
      </div>
    </section>
  );
}
