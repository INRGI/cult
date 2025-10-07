import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WitchBackground from "../Common/WitchBackground/WitchBackground";

const Layout: React.FC = () => {
  return (
    <>
      <WitchBackground />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Layout;
