import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import HeaderSection from "./components/Headersection";
import Painsection from "./components/Painsection";
import Timelinesection from "./components/Timelinesection";
import Testimonials from "./components/Testimonials";
import Footer from "../../components/ui/Footer";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
import { set } from "date-fns";
function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[100%]">
      <Navbar setShowModal={setShowModal}>
        <BtnPrimary>S'inscrire / Se connecter</BtnPrimary>
      </Navbar>
      <HeaderSection showModal={showModal} setShowModal={setShowModal} />
      <Painsection />
      <Timelinesection />
      {/* <Howwork /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
