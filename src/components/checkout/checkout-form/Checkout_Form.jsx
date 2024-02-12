// import { useEffect } from "react";
import { useState } from "react";
import React from "react";

// import { useDispatch } from "react-redux";
// import { getBillingData } from "../../../redux/slices/checkoutSlice";
// import InputTargets from "../../hooks/useInput/InputTargets";

const Checkout_Form = React.memo(
  ({ handleChange, handleBlur, values, errors, touched }) => {
    // const dispatch = useDispatch();
    const inputStyle = {
      width: "100%",
      padding: "4px 0px",
      paddingLeft: "8px",
      borderRadius: "3px",
      backgroundColor: "#c8c8c831",
      color: "black",
      fontWeight: "500",
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = () => {
      setIsChecked((prev) => !prev);
    };

    return (
      <>
        <div className="contact-form relative">
          <h1 className="text-3xl py-4 tracking-wider">Billing Details</h1>
          <form className="w-[390px] py-5  flex flex-col gap-4  text-gray-500">
            <div className="firstInput  flex flex-col gap-1 flex-wrap relative ">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="firstName"
                value={values?.firstName}
              />

              <span className="text-red-400 absolute top-[0%] left-[23%]">
                *
              </span>
              {errors.firstName && touched.firstName ? (
                <p className="text-red-400 mt-[-5px] text-sm">
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div className="secondInput flex flex-col gap-1 flex-wrap relative ">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="companyName"
                value={values?.companyName}
              />
              <span className="text-red-400 absolute top-[0%] left-[34%]">
                *
              </span>
              {errors.companyName && touched.companyName ? (
                <p className="text-red-400 mt-[-5px] text-sm">
                  {errors.companyName}
                </p>
              ) : null}
            </div>
            <div className="thirdInput flex flex-col gap-1 flex-wrap relative">
              <label htmlFor="thirdInput">Street Address</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="streetAddress"
                value={values?.streetAddress}
              />
              <span className="text-red-400 absolute top-[0%] left-[32%]">
                *
              </span>
              {errors.streetAddress && touched.streetAddress ? (
                <p className="text-red-400 mt-[-5px] text-sm">
                  {errors.streetAddress}
                </p>
              ) : null}
            </div>
            <div className="fourthInput flex flex-col gap-1 flex-wrap relative">
              <label htmlFor="firstName">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="apartMent"
                value={values?.apartMent}
              />
              <span className="text-red-400 absolute top-[0%] left-[25.5%]">
                *
              </span>
              {errors.apartMent && touched.apartMent ? (
                <p className="text-red-400 mt-[-5px] text-sm">
                  {errors.apartMent}
                </p>
              ) : null}
            </div>
            <div className="fifthInput flex flex-col gap-1 flex-wrap relative">
              <label htmlFor="fifthInput">Town / City</label>
              <input
                type="text"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="city"
                value={values?.city}
              />
              <span className="text-red-400 absolute top-[0%] left-[24%]">
                *
              </span>
              {errors.city && touched.city ? (
                <p className="text-red-400 mt-[-5px] text-sm">{errors.city}</p>
              ) : null}
            </div>
            <div className="sixthInput flex flex-col gap-1 flex-wrap relative">
              <label htmlFor="sixthInput">Phone Number</label>
              <input
                type="number"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                value={values?.phone}
              />
              <span className="text-red-400 absolute top-[0%] left-[32.5%]">
                *
              </span>
              {errors.phone && touched.phone ? (
                <p className="text-red-400 mt-[-5px] text-sm">{errors.phone}</p>
              ) : null}
            </div>
            <div className="seventhInput flex flex-col gap-1 flex-wrap relative">
              <label htmlFor="seventhInput">Email Address</label>
              <input
                type="email"
                className=" focus:outline-none  "
                style={inputStyle}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                value={values?.email}
              />
              <span className="text-red-400 absolute top-[0%] left-[30.3%]">
                *
              </span>
              {errors.email && touched.email ? (
                <p className="text-red-400 mt-[-5px] text-sm">{errors.email}</p>
              ) : null}
            </div>
            <div className="EightInput flex gap-3 justify-between items-center flex-wrap relative">
              <input
                type="checkbox"
                style={{
                  width: "22px",
                  height: "22px",
                  accentColor: "red",
                }}
                onChange={handleChecked}
                checked={isChecked}
              />
              <span className="w-[80%] text-sm flex-1 ">
                Save this information for faster check-out next time
              </span>
            </div>
          </form>
        </div>
      </>
    );
  }
);

Checkout_Form.displayName = "Checkout_Form";
export default Checkout_Form;
