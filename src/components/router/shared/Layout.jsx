import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/home/Section_Nine/footer_section/Footer";
import Navbar from "../../pages/home/Section_One/navigation_bar/Navbar";
import Top_Add_Bar from "../../pages/home/Section_One/navigation_bar/Top_Add_Bar";

const Layout = () => {
  return (
    <>
      <Top_Add_Bar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
