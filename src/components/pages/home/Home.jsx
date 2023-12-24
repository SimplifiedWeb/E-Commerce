import Services_Section_Parent from "../home/Section_Eight/services_section_parent/Services_Section_Parent";
import Section_Five_Banner from "../home/Section_Five/section-5-banner/Section_Five_Banner";
import Best_Selling_Parent from "../home/Section_Four/best_selling_parent/Best_Selling_Parent";
import Footer from "../home/Section_Nine/footer_section/Footer";

import Category from "../home/Section_One/categories/Category";
// import Category from "../home/Section_One/categories/Category";
import Navbar from "../home/Section_One/navigation_bar/Navbar";
import Top_Add_Bar from "../home/Section_One/navigation_bar/Top_Add_Bar";
import Slider from "../home/Section_One/slider/Slider";
import S_Cards from "../home/Section_One/small-home-cards/S_Cards";
import Feature_New_Arrival_Parent from "../home/Section_Seven/New_Arrival_Parent/Feature_New_Arrival_Parent";
import Our_Product_Parent from "../home/Section_Six/our_product_parent/Our_Product_Parent";
import Categories_Parent from "../home/Section_Three/category_parent_section/Categories_Parent";
import Todays_Home from "../home/Section_Two/Todays_Parent_Section/Todays_Home";
// import VerticalLine from "./VerticalLine";
const Home = () => {
  return (
    <>
      <div className="main min-h-screen min-h-[svh] pt-8 px-28  relative">
        <div className="top_ads_bar absolute top-0 left-0 w-[100%]">
          <Top_Add_Bar />
        </div>
        <div className="navbar h-20 w-full pt-2 mb-6 z-3 ">
          <Navbar />

          {/* <VerticalLine /> */}
        </div>
        <div
          className="hero-section border-2 pr-5 pt-4   flex"
          style={{
            boxShadow:
              "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
            minHeight: "65vh",
          }}
          // bg-[#f2f0ea]
        >
          <div className="left flex-2">
            <Category />
          </div>
          <div className="middle flex-1">
            <Slider />
          </div>
          <div className="right flex-2 ">
            <S_Cards />
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="today_offer_container mt-[50px]">
          <Todays_Home />
        </div>
        {/* THIRD SECTION */}
        <div className="categories mt-[50px]">
          <Categories_Parent />
        </div>
        {/* FOURTH SECTION */}
        <div className="best-selling mt-[-20px]">
          <Best_Selling_Parent />
        </div>
        <div className="section-5-banner">
          <Section_Five_Banner />
        </div>
        <div className="our-products mt-[40px]">
          <Our_Product_Parent />
        </div>
        <div className="new-arrival mt-[40px]">
          <Feature_New_Arrival_Parent />
        </div>
        <div className="section-8">
          <Services_Section_Parent />
        </div>
      </div>
      <div className="p-10 bg-black z-20">
        <Footer />
      </div>
    </>
  );
};

export default Home;
