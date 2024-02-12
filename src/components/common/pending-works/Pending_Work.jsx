import React from "react";

const Pending_Work = ({ name }) => {
  return (
    <>
      <div className="min-h-[40vh]  flex justify-center items-center">
        <h1 className="">
          <span className="text-red-400">{name}</span> Pending Work, Will be
          done soon !!! 😃 😇
        </h1>
      </div>
    </>
  );
};

export default Pending_Work;
