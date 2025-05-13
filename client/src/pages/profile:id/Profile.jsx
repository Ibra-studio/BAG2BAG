import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
function Profile() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal}>
        <BtnPrimary>S'inscrire / Se connecter</BtnPrimary>
      </Navbar>
      <section>
        <div className="w-full h-full flex justify-center pt-[100px]">
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Profile;
