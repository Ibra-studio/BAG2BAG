import { useEffect } from "react";
import Navbar from "./ui/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import BtnPrimary from "./ui/Btnprim";
import { useModal } from "../context/ModalContext";
import supabase from "../services/supabaseClient";
export default function Layout() {
  const { setShowModal } = useModal();
  const location = useLocation();
  useEffect(() => {
    setShowModal(false);
  }, [location.pathname, setShowModal]);

  useEffect(() => {
    // Ferme le modal à chaque changement d'authentification
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      setShowModal(false);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Navbar setShowModal={setShowModal}>
        <BtnPrimary>S'inscrire / Se connecter</BtnPrimary>
      </Navbar>
      <Outlet /> {/* C'est ce composant qui affiche la page enfant */}
    </div>
  );
}
