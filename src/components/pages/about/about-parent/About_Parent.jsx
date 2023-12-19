import React from "react";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import Services_Card_Design from "../../home/Section_Eight/services_card_design/Services_Card_Design";

const About_Parent = () => {
  return (
    <>
      <div className="about min-h-[100vh]  relative">
        <div className="route">
          <div className="route flex gap-2 absolute top-[4%] left-[6%]">
            <span className="text-[#868686]">Home</span>
            <span className="text-[#868686]">/</span>
            <span>About</span>
          </div>
        </div>
        <div className="first-section flex flex-wrap  absolute top-[10%] left-[5%] p-5">
          <div className="left flex-1 flex flex-col justify-start items-start gap-1 ">
            <h1 className="text-5xl py-6 mt-7">Out Story</h1>
            <p className="text-sm  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              asperiores explicabo voluptate porro libero dolore numquam,
              maiores iste officiis? Eveniet ea quod numquam. Quaerat, natus
              sapiente quasi, voluptatum adipisci, molestias tempora nesciunt
              quo voluptas suscipit maiores ullam <br></br>deleniti! Natus velit
              repellat voluptas impedit repudiandae, aliquam corrupti sunt est
              nobis, minima deleniti repellendus ea recusandae eveniet
              perferendis quos, magnam totam ratione enim ad <br /> accusantium
              animi aut! Pariatur
              <br />
              <br />
              maxime quisquam sunt! Voluptatem porro ut sit doloribus
              voluptatibus fuga eligendi praesentium sequi, placeat ea commodi
              quae? Quia labore ipsa, delectus itaque architecto quis,
            </p>
          </div>
          <div className="right flex-1">
            <div className="img-container">
              <img
                src="/images/about/about-first-section.png"
                alt="about-first-section-image"
                className="w-[600px] h-[520px] absolute right-[-10%] top-[-4%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second-section relative min-h-[50vh] ">
        <div
          //   className={`main-card mx-2 w-full rounded-lg p-[3px] pt-[1px] h-[315px] cursor-pointer  border-[0.1px] border-gray-900 border-opacity-10 border-b-2 `}

          className="flex w-full justify-center items-center gap-10  absolute top-[-10%] left-[0%] "
        >
          <div
            className="first-card service-card w-[250px] h-[250px] bg-[#fff] hover:bg-[#db4444] hover:text-white transition-all duration-100 cursor-pointer hover:translate-y-1"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <div className="service-icons">
              {/* <LocalShippingOutlinedIcon className="service-icons" /> */}
              <StorefrontOutlinedIcon className="service-icons" />
            </div>
            <div className="heading">
              <h1>10.5k</h1>
              <p>Seller active our Site</p>
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
              {/* <SupportAgentOutlinedIcon className="service-icons" /> */}
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
              {/* <PriceCheckOutlinedIcon className="service-icons " /> */}
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
      </div>
      <div className="third-section relative min-h-[50vh]  p-5 bg-black ">
        <Services_Card_Design about={true} />
      </div>
    </>
  );
};

export default About_Parent;
