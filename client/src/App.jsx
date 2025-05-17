import "./assets/global.css";
import React from "react";
import Home from "./pages/Home/Home";
import PostPage from "../src/pages/annonces/search-annonces";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAnnonces from "./pages/annonces/components/form/createAnnonces";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonces" element={<PostPage />} />
        <Route path="/create-annonce" element={<CreateAnnonces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
