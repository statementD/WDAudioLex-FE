import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SearchInput from "../components/SearchInput";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;