import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import HeaderSection from "./components/Headersection";
import Painsection from "./components/Painsection";
import Timelinesection from "./components/Timelinesection";
import Testimonials from "./components/Testimonials";
import Footer from "../../components/ui/Footer";
// @ts-ignore
import BtnPrimary from "@/components/ui/Btnprim";
// @ts-ignore
import Modal from "@/components/modal";
// @ts-ignore
import Login from "@/pages/Auth/login";
// @ts-ignore
import SignUp from "@/pages/Auth/signup";
function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="w-[100%]">
      <Navbar setShowModal={setShowModal}>
        <BtnPrimary>S'inscrire / Se connecter</BtnPrimary>
      </Navbar>
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
      <HeaderSection />
      <Painsection />
      <Timelinesection />
      {/* <Howwork /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
