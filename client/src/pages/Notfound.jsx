import React from "react";
import BtnPrimary from "@/components/ui/Btnprim";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="flex items-center justify-center w-full h-[100dvh] text-center">
      <div className="flex  flex-col gap-4 items-center justify-center">
        <img src="src/assets/images/notfoundEmoji.png" alt="" className="" />
        <h2 className="text-[200px] text-btn-primary">404</h2>
        <h3>Ooops ! page not found</h3>
        <BtnPrimary className="">
          <Link to="/app">Go back Home</Link>
        </BtnPrimary>
      </div>
    </div>
  );
}

export default Notfound;
