import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import Services_Card_Design from "../../home/Section_Eight/services_card_design/Services_Card_Design";
import { Link } from "react-router-dom";

const About_Parent = () => {
  return (
    <div className="about min-h-screen relative overflow-hidden   sm:w-[100vw]  sm:mt-[25%] sm:px-0 sm:overflow-hidden  ">
      <div className="route absolute top-4 left-6 sm:absolute sm:top-[0.5%] sm:left-2 flex gap-2 text-[#868686]">
        <Link to="/">
          <span className="text-[#868686]">Home</span>
        </Link>
        <span>/</span>
        <span>About</span>
      </div>

      <div className="first-section flex flex-wrap  sm:mt-[15%] p-5 sm:p-0 lg:gap-10 2xl:gap-10  sm:overflow-hidden sm:flex sm:justify-center sm:items-center sm:flex-col">
        <div className="left sm:w-full sm:order-2 flex-1 flex flex-col justify-center  items-center gap-6 sm:gap-3 ">
          <h1 className="text-3xl  sm:text-4xl lg:text-5xl sm:mt-[4%] font-bold ">
            Our Story
          </h1>
          <p className="text-sm sm:text-base sm:overflow-hidden text-justify sm:w-[92%] break-words">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            asperiores explicabo voluptate porro libero dolore numquam, maiores
            iste officiis? Eveniet ea quod numquam. Quaerat, natus sapiente
            quasi, voluptatum adipisci, molestias tempora nesciunt quo voluptas
            suscipit maiores ullam <br></br>deleniti! Natus velit repellat
            voluptas impedit repudiandae, aliquam corrupti sunt est nobis,
            minima deleniti repellendus ea recusandae eveniet perferendis quos,
            magnam totam ratione enim ad <br /> accusantium animi aut! Pariatur
            maxime quisquam sunt! Voluptatem porro ut sit doloribus voluptatibus
            fuga eligendi praesentium sequi, placeat ea commodi quae? Quia
            labore ipsa, delectus itaque architecto quis,
          </p>
        </div>
        <div className="right sm:w-full sm:order-1 flex-1 flex justify-center items-center">
          <div className="img-container relative w-full  h-auto">
            <img
              src="/images/about/about-first-section.png"
              alt="about-first-section-image"
              className="w-[600px] sm:w-[400px] sm:h-[400px] "
            />
          </div>
        </div>
      </div>

      <div className="second-section relative min-h-[50vh] flex justify-center items-center gap-6 sm:gap-10 flex-wrap sm:mt-7">
        <div
          className="first-card service-card w-[250px] h-[250px] bg-[#fff] hover:bg-[#db4444] hover:text-white transition-all duration-100 cursor-pointer hover:translate-y-1"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="service-icons">
            <StorefrontOutlinedIcon className="service-icons" />
          </div>
          <div className="heading">
            <h1>10.5k</h1>
            <p>Sellers active on our Site</p>
          </div>
        </div>
        <div
          className="second-card service-card w-[250px] h-[250px] bg-[#fff] hover:bg-[#db4444] hover:text-white transition-all duration-100 cursor-pointer hover:translate-y-1 "
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="service-icons">
            <LocalMallOutlinedIcon className="service-icons" />
          </div>
          <div className="heading">
            <h1>33k</h1>
            <p>
              Monthly
              <br /> Product sale
            </p>
          </div>
        </div>
        <div
          className="third-card service-card w-[250px] h-[250px] bg-[#fff] hover:bg-[#db4444] hover:text-white transition-all duration-100 cursor-pointer hover:translate-y-1 "
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="service-icons">
            <PaidOutlinedIcon className="service-icons" />
          </div>
          <div className="heading">
            <h1>45.5k</h1>
            <p>
              Customer active on <br /> our site
            </p>
          </div>
        </div>
        <div
          className="third-card service-card w-[250px] h-[250px] bg-[#fff] hover:bg-[#db4444] hover:text-white transition-all duration-100 cursor-pointer hover:translate-y-1 "
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="service-icons">
            <AccountBalanceOutlinedIcon className="service-icons " />
          </div>
          <div className="heading">
            <h1>25k</h1>
            <p>
              Annual gross in <br /> out site
            </p>
          </div>
        </div>
      </div>

      <div className="third-section relative min-h-[50vh] p-5 sm:p-3 sm:bg-white  bg-black">
        <Services_Card_Design about={true} />
      </div>
    </div>
  );
};

export default About_Parent;
