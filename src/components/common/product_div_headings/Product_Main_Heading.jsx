import { productHeadingPropTypes } from "../../prop-types";

const Product_Main_Heading = ({ data }) => {
  return (
    <>
      <div className="main-head flex sm:gap-4 items-center gap-5 bg-[#f5f5f5] ">
        <div className="mark w-5 h-10 bg-red-500 rounded-md "></div>
        <h2 className="sm:text-md">{data}</h2>
      </div>
    </>
  );
};

Product_Main_Heading.propTypes = productHeadingPropTypes;

export default Product_Main_Heading;
