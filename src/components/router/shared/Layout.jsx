import { Outlet } from "react-router-dom";
import Footer from "../../pages/home/Section_Nine/footer_section/Footer";
import Navbar from "../../pages/home/Section_One/navigation_bar/Navbar";
import Top_Add_Bar from "../../pages/home/Section_One/navigation_bar/Top_Add_Bar";

const Layout = () => {
  var mobile = "small";
  return (
    <>
      <Top_Add_Bar />
      <div className="layout px-28 sm:px-0 md:px-0 sm:overflow-hidden ">
        <Navbar mobile={mobile} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
