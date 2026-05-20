import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
