import React from "react";
import ButtonsGroup from "../../../common/buttons/ButtonsGroup";

const Contact_Form = () => {
  const inputTextStyle = {
    fontSize: "14px", // Adjust the text size
    fontWeight: "normal", // Adjust the font weight
    paddingRight: "30px", // Add padding from the right
  };
  return (
    <>
      <div className="contact-form w-[700px] relative ">
        <div className="contact flex flex-col  items-center h-[500px] relative">
          <div className="top flex gap-3 p-4">
            <div className="input font-semibold ">
              <input
                type="text"
                placeholder="Your Name "
                className="focus:outline-none relative bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md"
                style={inputTextStyle}
              />
              <span className="absolute left-[16.9%] top-[4.5%] text-[15px]  text-[#db44447d]">
                *
              </span>
            </div>
            <div className="input relative">
              <input
                type="text"
                placeholder="Your Email "
                className="focus:outline-none bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md"
                style={inputTextStyle}
              />
              <span className="absolute left-[39%] top-[10.5%] text-[15px]  text-[#db44447d]">
                *
              </span>
            </div>
            <div className="input relative">
              <input
                type="text"
                placeholder="Your Phone "
                className="focus:outline-none bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md"
                style={inputTextStyle}
              />
              <span className="absolute left-[41.6%] top-[12.5%] text-[15px]  text-[#db44447d]">
                *
              </span>
            </div>
          </div>

          <div className="middle">
            <textarea
              name=""
              placeholder="Your Message"
              cols="80"
              rows="12"
              className="focus:outline-none bg-[#f5f5f5] w-[620px] p-3 pr-5 text-sm resize-none border rounded-md"
              style={{
                fontSize: "14px", // Adjust the font size
                fontWeight: "normal", // Adjust the font weight
                color: "#333", // Adjust the text color
              }}
            ></textarea>
          </div>
          <div className="bottom absolute bottom-16  right-10 ">
            <ButtonsGroup btnType="small-button" name="Send Message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Form;
