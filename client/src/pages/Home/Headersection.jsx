import React from "react";
import { ReactComponent as Img } from "../../assets/icons/header-image2.svg";
import { ReactComponent as Img2 } from "../../assets/icons/header-image3.svg";
import { ReactComponent as Img3 } from "../../assets/icons/hero-image4.svg";
import { ReactComponent as Img4 } from "../../assets/icons/hero-imageMobile.svg";
import { ReactComponent as Icon } from "../../assets/icons/header-icon.svg";
import { ReactComponent as IconLiv } from "../../assets/icons/icon-livraison.svg";
import { ReactComponent as IconSearh } from "../../assets/icons/icon-search.svg";
import "../../assets/global.css";
import BtnPrimary from "../../components/ui/Btnprim";
import BtnSecondary from "../../components/ui/Btnsec";
export default function HeaderSection() {
  return (
    <section className="flex flex-col gap-[50px] items-center justify-center pt-[100px] md:pt-40 header-section ">
      <div className="flex flex-col gap-[50px]  px-[15px]   header-text  text-center ">
        <div className="relative">
          <h1 className="text-center  md:text-[65px] sm:text-[55px] text-[45px]">
            Rentabilisez vos kilos <br className="hidden md:!inline" /> restants
            en voyageant
          </h1>
          <Icon className="absolute top-[-30px] right-[-5px] md:right-[-15px] lg:right-[-30px]  hidden lg:inline " />
        </div>
        <p className="sm:text-[25px] text-[16px] font-[--roboto]">
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
      <div className="relative flex justify-center px-[15px] items-center header-image w-full">
        <div className=" absolute w-[100%] h-[50%] bg-[#368f8b] rounded-[100%] blur-[400px] z-[-1] mt-15"></div>
        <div className="h-full w-full flex justify-center items-center  ">
          {" "}
          <Img className="hidden xl:!block" />
          <Img2 className="hidden lg:!block xl:!hidden" />
          <Img3 className="hidden sm:max-lg:!block " />
          <Img4 className="block sm:!hidden" />
        </div>
      </div>
    </section>
  );
}
