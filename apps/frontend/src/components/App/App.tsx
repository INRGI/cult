import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Login = lazy(() => import("../../pages/Login/Login"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
