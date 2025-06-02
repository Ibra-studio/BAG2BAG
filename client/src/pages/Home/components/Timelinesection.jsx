import "../../../assets/global.css";
// import "./timelinesection.css";
import React from "react";
import TrustCardList from "./TrustCard";
// @ts-ignore
import { ReactComponent as Iconship } from "@/assets/icons/icon-ship.svg";
// @ts-ignore
import { ReactComponent as Iconsheap } from "@/assets/icons/icon-sheap.svg";
// @ts-ignore
import { ReactComponent as Iconsecurity } from "@/assets/icons/security-icon.svg";
// @ts-ignore
import { ReactComponent as Check } from "@/assets/icons/check.svg";
// @ts-ignore
import BtnDiscovery from "@/components/ui/BtnDiscovery";
// @ts-ignore
const data = [
  {
    id: 1,
    titre: "Envoyez et recevez des colis jusqu’à 70 % moins cher",
    description:
      "Recherchez une annonce sur notre site et économisez sur vos envois",
    Icon: Iconship,
  },
  {
    id: 2,
    titre: "Gardez l’esprit tranquille pour confier votre colis",
    description:
      "Tous nos membres doivent vérifier leur identité avant le départ, c'est simple et rapide.",
    Icon: Iconsecurity,
  },
  {
    id: 3,
    titre: "Une valise de 23kg = 80 000 FCFA en moyenne.",
    description:
      "Un voyage de prevu ? Cotransportez un colis,et gagnez un peu d’argent",
    Icon: Iconsheap,
  },
];
//hi i'm a comment
// I WANT TO ADD TIMILINE ANIMATION TO THE COMPONENT

export default function Timelinesection() {
  return (
    <section className="flex flex-col gap-[100px] lg:gap-[150px] pt-[100px] timeline-section">
      <div className="flex flex-col px-[15px] gap-5 items-center timeline-header">
        <BtnDiscovery text="Decouvrez BAG2BAG" />
        <h2 className="text-center   md:text-[55px] sm:text-[45px]    text-[30px] intersect-once  intersect:motion-preset-slide-up motion-delay-500">
          Nous mettons en relation <br className="hidden sm:!inline" />
          voyageurs & expediteurs <br className="hidden sm:!inline" />
          pour transporter <span className="bg-green px-2">des colis</span>
        </h2>
      </div>
      <div className="flex-col justify-center items-center hidden lg:!flex  w-[100%] timeline">
        <div className="flex flex-row  px-[30px]  2xl:px-[2.8125rem] gap-[0.625rem]  w-[100%]  timeline-container ">
          <TrustCardList
            titre={data[0].titre}
            description={data[0].description}
            Icon={data[0].Icon}
            className="intersect-once  intersect:motion-preset-slide-right motion-delay-500"
          />
          <div className="flex flex-col w-[5%] items-center progress-bar">
            <div className="flex items-center justify-center h-[50px] w-[3.125rem] bg-[#368f8b] rounded-[100%] border-[0.125rem] border-solid border-black  timeline-circle">
              <Check />
            </div>
            <div className="w-[3px] bg-black  h-[100%]  2xl:h-[25rem]    timeline-line"></div>
          </div>
          <div className="w-[45%] spacer"></div>
        </div>
        <div className=" flex flex-row 2xl:px-[2.8125rem] w-[97%]  gap-[0.625rem] timeline-container">
          <div className=" w-[45%] spacer"></div>
          <div className=" flex flex-col w-[5%] items-center progress-bar">
            <div className=" flex items-center justify-center h-[50px] w-[50px] bg-[#368f8b] rounded-[100%] border-[2px] border-solid border-black timeline-circle">
              <Check />
            </div>
            <div className="w-[3px] bg-black  h-[100%] 2xl:h-[25ren] timeline-line"></div>
          </div>
          <TrustCardList
            titre={data[1].titre}
            description={data[1].description}
            Icon={data[1].Icon}
            className="intersect-once  intersect:motion-preset-slide-left motion-delay-600"
          />
        </div>
        <div className="flex flex-row  px-[30px] 2xl:px-[45px] gap-[0.625rem] w-[100%] timeline-container">
          <TrustCardList
            titre={data[2].titre}
            description={data[2].description}
            Icon={data[2].Icon}
            className=" intersect-once  intersect:motion-preset-slide-right motion-delay-700"
          />
          <div className="  flex flex-col w-[5%] items-center progress-bar">
            <div className="flex items-center justify-center h-[50px] w-[50px] bg-green rounded-[100%] border-[2px] border-solid border-black timeline-circle">
              <Check />
            </div>
          </div>
          <div className="w-[45%] spacer"></div>
        </div>
      </div>
      {/* //A partire de LG */}
      <div className="flex flex-col gap-[40px]  lg:gap-0 lg:!hidden justify-center items-center  w-[100%] timeline">
        <div className="flex flex-row px-[15px] lg:px-[30px] 2xl:px-[45px] gap-[0.625rem]  w-full timeline-container">
          <TrustCardList
            titre={data[0].titre}
            description={data[0].description}
            Icon={data[0].Icon}
            className=" intersect-once  intersect:motion-preset-slide-right motion-delay-500"
          />
        </div>
        <div className=" flex flex-row px-[15px] lg:px-0 2xl:px-[2.8125rem] lg:w-[97%]  w-full gap-[0.625rem] timeline-container">
          <TrustCardList
            titre={data[1].titre}
            description={data[1].description}
            Icon={data[1].Icon}
            className=" intersect-once  intersect:motion-preset-slide-left motion-delay-600"
          />
        </div>
        <div className="flex flex-row px-[15px] lg:px-[30px] 2xl:px-[45px] gap-[0.625rem] lg:w-[100%]  w-full timeline-container">
          <TrustCardList
            titre={data[2].titre}
            description={data[2].description}
            Icon={data[2].Icon}
            className=" intersect-once  intersect:motion-preset-slide-right motion-delay-700"
          />
        </div>
      </div>
    </section>
  );
}
