import React from "react";
import ButtonsGroup from "../../../common/buttons/ButtonsGroup";

const Contact_Form = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleReset,
  handleSubmit,
  isValid,
  validateForm,
}) => {
  const inputTextStyle = {
    fontSize: "14px", // Adjust the text size
    fontWeight: "normal", // Adjust the font weight
    paddingRight: "30px", // Add padding from the right
  };

  // console.log(errors);

  return (
    <>
      <div className="contact-form w-[700px] sm:w-screen relative  ">
        <div className="contact flex flex-col flex-wrap sm:items-start  items-center h-[500px] relative ">
          <div className="top flex flex-wrap sm:flex-col sm:w-full gap-3 p-4">
            <div className="input font-semibold ">
              <input
                type="text"
                placeholder="Your Name "
                className="focus:outline-none relative bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md sm:w-full"
                style={inputTextStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.firstName}
                name="firstName"
              />
              <span className="absolute left-[16.9%] sm:left-[90%] top-[4.5%] text-[15px]  text-[#db44447d]">
                *
              </span>
              {errors.firstName && touched.firstName ? (
                <p className="text-red-400 mt-[-5px] text-sm">
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div className="input relative">
              <input
                type="text"
                placeholder="Your Email "
                className="focus:outline-none bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md sm:w-full"
                style={inputTextStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.email}
                name="email"
              />
              <span className="absolute left-[39%] top-[10.5%] sm:left-[94%] text-[15px]  text-[#db44447d]">
                *
              </span>
              {errors.email && touched.email ? (
                <p className="text-red-400 mt-[-5px] text-sm">{errors.email}</p>
              ) : null}
            </div>
            <div className="input relative">
              <input
                type="text"
                placeholder="Your Phone "
                className="focus:outline-none bg-[#f5f5f5] w-[200px] p-2 pr-5 text-sm border rounded-md sm:w-full"
                style={inputTextStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.phone}
                name="phone"
              />
              <span className="absolute left-[41.6%] top-[12.5%] sm:left-[94%] text-[15px]  text-[#db44447d]">
                *
              </span>
              {errors.phone && touched.phone ? (
                <p className="text-red-400 mt-[-5px] text-sm">{errors.phone}</p>
              ) : null}
            </div>
          </div>

          <div className="middle sm:w-screen md:w-screen sm:px-4">
            <textarea
              name="message"
              placeholder="Your Message"
              cols="80"
              rows="12"
              className="focus:outline-none bg-[#f5f5f5] w-[620px] p-3 pr-5 text-sm resize-none border rounded-md sm:w-full"
              style={{
                fontSize: "14px", // Adjust the font size
                fontWeight: "normal", // Adjust the font weight
                color: "#333", // Adjust the text color
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.message}
            ></textarea>
            {errors.message && touched.message ? (
              <p className="text-red-400 mt-[-5px] text-sm">{errors.message}</p>
            ) : null}
          </div>
          <div className="bottom absolute bottom-16 sm:bottom-9 sm:w-[150px] sm:right-7 right-10 ">
            <ButtonsGroup
              btnType="small-button"
              name="Send Message"
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Form;
