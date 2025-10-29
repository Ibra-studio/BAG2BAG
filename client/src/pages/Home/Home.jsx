import React, { useEffect, useState } from "react";
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
import Login from "@/pages/Auth/Login";
// @ts-ignore
import SignUp from "@/pages/Auth/SignUp";
import { useModal } from "../../context/ModalContext";

useModal;
function Home() {
  const {
    showModal,
    setShowModal,
    currentPage,
    setCurrentPage,
    navigateTo,
    setNavigateTo,
  } = useModal();

  // useEffect(() => {
  //   fetch("http://localhost:5000/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data); // tu verras les fruits dans la console
  //     });
  // }, []);
  return (
    <div className="w-[100%]">
      {showModal &&
        (currentPage === "login" ? (
          <Modal
            title={"Connectez-vous"}
            setShowModal={setShowModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            <Login navigateTo={navigateTo} />
          </Modal>
        ) : (
          <Modal
            title={"Inscrivez-vous"}
            setShowModal={setShowModal}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          >
            <SignUp navigateTo={navigateTo} />
          </Modal>
        ))}

      <HeaderSection
        setShowModal={setShowModal}
        setNavigateTo={setNavigateTo}
      />
      <Painsection />
      <Timelinesection />
      {/* <Howwork /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
