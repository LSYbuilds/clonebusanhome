import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/main/MainHeader";
import MainFooter from "../components/main/MainFooter";

const Mainlayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default Mainlayout;
