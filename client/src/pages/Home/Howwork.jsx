import React from "react";
import "../../assets/global.css";

export default function Howwork() {
  return (
    <section className="flex flex-col items-center justify-center  mx-64 pt-[100px]   howwork-section">
      <div>
        <h2 className="">Comment ça marche ?</h2>
      </div>
      <div className="flex flex-row gap-85 ">
        <div className="flex flex-col gap-12 justify-center">
          <h4>Je veux transporter un colis</h4>
          <div className=""></div>
        </div>
        <div>
          <h4>Je veux envoyer ou recevoir un colis</h4>
          <div></div>
        </div>
      </div>
    </section>
  );
}
