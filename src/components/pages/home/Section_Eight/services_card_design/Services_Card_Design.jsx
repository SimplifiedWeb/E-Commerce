import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import { serviceCardDesignPropTypes } from "../../../../prop-types";

const Services_Card_Design = ({ about }) => {
  return (
    <>
      <div>
        <div
          //   className={`main-card mx-2 w-full rounded-lg p-[3px] pt-[1px] h-[315px] cursor-pointer  border-[0.1px] border-gray-900 border-opacity-10 border-b-2 `}

          className="flex w-full justify-center items-center gap-32 my-10"
        >
          <div
            className={`first-card service-card w-[250px] h-[250px] ${
              about ? "bg-black text-white" : "bg-[#fff]"
            }`}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <div className="service-icons">
              <LocalShippingOutlinedIcon className="service-icons" />
            </div>
            <div className="heading">
              <h1>Free AND FAST DELIVERY</h1>
              <p>Free delivery for all orders over &#8377;2000</p>
            </div>
          </div>
          <div
            className={`first-card service-card w-[250px] h-[250px] ${
              about ? "bg-black text-white" : "bg-[#fff]"
            }`}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <div className="service-icons">
              <SupportAgentOutlinedIcon className="service-icons" />
            </div>
            <div className="heading">
              <h1>24/7 CUSTOMER SERVICE</h1>
              <p>
                Friendly 24/7 customer
                <br /> support
              </p>
            </div>
          </div>
          <div
            className={`first-card service-card w-[250px] h-[250px] ${
              about ? "bg-black text-white" : "bg-[#fff]"
            }`}
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          >
            <div className="service-icons">
              <PriceCheckOutlinedIcon className="service-icons " />
            </div>
            <div className="heading">
              <h1>MONEY BACK GUARANTEE</h1>
              <p>
                We return money within <br /> 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Services_Card_Design.propTypes = serviceCardDesignPropTypes;

export default Services_Card_Design;
