import React from "react";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Contact_Info = () => {
  return (
    <>
      <div className=" w-[300px] h-[400px] flex flex-col gap-5 p-5 overflow-hidden  sm:mt-[-19%]">
        <div className="top-section-contact  flex flex-col gap-5 ">
          <div className="top flex gap-5 items-center ">
            <PhoneCallbackOutlinedIcon
              style={{
                backgroundColor: "#db4444",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "40px",
                color: "white",
              }}
              className=""
            />
            <span className="font-bold ">Call To Us</span>
          </div>
          <div className="middle text-[#313131] text-sm ">
            We are available 24/7, 7 days a week.
          </div>
          <div className="bottom text-[#313131] ">Phone: +919988997788</div>
          <div className="border-line w-full h-[1px]   bg-[#313131a2] opacity-75 mb-3"></div>
        </div>
        <div className="bottom-section-contact flex flex-col gap-5">
          <div className="top flex gap-5 items-center ">
            <EmailOutlinedIcon
              style={{
                backgroundColor: "#db4444",
                borderRadius: "50%",
                padding: "10px",
                fontSize: "40px",
                color: "white",
              }}
            />
            <span className="font-bold ">Call To Us</span>
          </div>
          <div className="middle text-[#313131] text-sm ">
            Fill out our form and we will contact you within 24 hours.
          </div>
          <div className="bottom text-[#313131] text-sm">
            Email: customer@exclusive.com
          </div>
          <div className="bottom text-[#313131] mt-[-10px] text-sm">
            Email: support@exclusive.com
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Info;
