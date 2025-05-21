import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  const [navigateTo, setNavigateTo] = useState("/app/annonces");

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        currentPage,
        setCurrentPage,
        navigateTo,
        setNavigateTo,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
