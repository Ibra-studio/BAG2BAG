import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "./assets/global.css";
import Home from "./pages/Home/Home";
import PostPage from "../src/pages/annonces/search-annonces";
// @ts-ignore
import CreateAnnonces from "./pages/annonces/components/form/CreateAnnonces";
import Notfound from "./pages/Notfound";
import DashboardUser from "./pages/dashboard/DashboardUser";
import Layout from "./components/Layout";
import PostDetailPage from "./pages/annonces/PostDetailPage";
import DashboardAdmin from "./pages/dashboard/DashboardAdmin";
import ProtectedAdminRoute from "./pages/dashboard/ProtectedAdminRoute";

function App() {
  return (
    // <SkeletonTheme>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="annonces" element={<PostPage />}></Route>
          <Route path="annonces/:id" element={<PostDetailPage />} />
          <Route path="annonces/create" element={<CreateAnnonces />} />
          <Route path="dashboard/:id" element={<DashboardUser />} />
        </Route>
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedAdminRoute>
              <DashboardAdmin />
            </ProtectedAdminRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    // </SkeletonTheme>
  );
}

export default App;
