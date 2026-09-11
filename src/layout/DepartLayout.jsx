import React from "react";
import { Outlet } from "react-router-dom";
import DepartHeader from "../components/depart/DepartHeader";
import DepartFooter from "../components/depart/DepartFooter";

const DepartLayout = () => {
  return (
    <>
      <DepartHeader />
      <main>
        <Outlet />
      </main>
      <DepartFooter />
    </>
  );
};

export default DepartLayout;
