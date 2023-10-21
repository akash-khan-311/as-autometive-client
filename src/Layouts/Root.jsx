import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
