// import Arrows from "../arrows/Arrows";
import Time from "../../pages/home/Section_Two/Time";
import { productSecondLayerHeadingPropTypes } from "../../prop-types";

const Product_Second_Layer_Heading = ({ check, name }) => {
  return (
    <>
      <div
        className={`timer flex sm:px-3 sm:pt-5  px-3 pt-7  ${
          check ? "  gap-20 sm:gap-10" : " gap-0 justify-between"
        }`}
      >
        <h1 className="text-4xl sm:text-2xl  whitespace-no-wrap overflow-hidden ">
          {name}
        </h1>
        <Time check={check} />
      </div>
    </>
  );
};
Product_Second_Layer_Heading.propTypes = productSecondLayerHeadingPropTypes;

export default Product_Second_Layer_Heading;
