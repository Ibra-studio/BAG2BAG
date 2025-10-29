import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "./assets/global.css";

import Home from "./pages/Home/Home";
// import PostPage from "../src/pages/annonces/search-annonces";
// import CreateAnnonces from "./pages/annonces/components/form/CreateAnnonces";
import Notfound from "./pages/Notfound";
// import Profile from "./pages/profile/Profile";
import Layout from "./components/Layout";
// import PostDetailPage from "./pages/annonces/PostDetailPage";
// import Myannonces from "./pages/annonces/Myannonces";
// import DashboardAdmin from "./pages/dashboard/DashboardAdmin";
// import ProtectedAdminRoute from "./pages/dashboard/ProtectedAdminRoute";
import ObserverProvider from "./context/ObserverProvider";

const Dashboard = React.lazy(() =>
  import("./pages/AdminDashboard/pages/Dashboard")
);
const CreateAnnonces = React.lazy(() =>
  import("./pages/annonces/components/form/createAnnonces")
);
const PostDetailPage = React.lazy(() =>
  import("./pages/annonces/PostDetailPage")
);
const Myannonces = React.lazy(() => import("./pages/annonces/Myannonces"));
const ProtectedAdminRoute = React.lazy(() =>
  import("./pages/AdminDashboard/ProtectedAdminRoute")
);
const Posts = React.lazy(() => import("./pages/AdminDashboard/pages/Posts"));
const Users = React.lazy(() => import("./pages/AdminDashboard/pages/Users"));
const Profile = React.lazy(() => import("./pages/profile/Profile"));
const PostPage = React.lazy(() => import("./pages/annonces/search-annonces"));
const AdminLayout = React.lazy(() =>
  import("./pages/AdminDashboard/components/layout/adminLayout")
);
const EditPosts = React.lazy(() =>
  import("./pages/annonces/components/form/EditPosts")
);
function App() {
  return (
    //{" "}
    <ObserverProvider>
      <SkeletonTheme>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="annonces" element={<PostPage />}></Route>
                <Route path="annonces/:id" element={<PostDetailPage />} />
                <Route path="annonces/create" element={<CreateAnnonces />} />
                <Route path="myprofile/:id" element={<Profile />} />
                <Route path="myannonces/:id" element={<Myannonces />} />
                <Route path="myannonces/edit/:id" element={<EditPosts />} />
              </Route>
              <Route path="/admin-dashboard" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="posts" element={<Posts />} />
              </Route>

              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SkeletonTheme>
    </ObserverProvider>
  );
}

export default App;
