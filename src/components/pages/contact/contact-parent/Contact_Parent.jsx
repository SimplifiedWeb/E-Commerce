import React from "react";
import Contact_Info from "../contact-information/Contact_Info";

const Contact_Parent = () => {
  return (
    <>
      <div className="contact min-h-[90vh] px-28 ">
        <div className="route">
          <span>Home</span>
          <span>/</span>
          <span>Contact</span>
        </div>
        <div className="flex justify-center items-center flex-wrap border-2 border-red-500">
          <div className="left flex-3 border-2 border-green-500">
            <Contact_Info />
          </div>
          <div className="right flex-1"></div>
        </div>
      </div>
    </>
  );
};

export default Contact_Parent;
