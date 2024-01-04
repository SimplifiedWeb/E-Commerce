// import Arrows from "../arrows/Arrows";
import Time from "../../pages/home/Section_Two/Time";
import { productSecondLayerHeadingPropTypes } from "../../prop-types";

const Product_Second_Layer_Heading = ({ check, name }) => {
  return (
    <>
      <div
        className={`timer flex px-3 pt-7  ${
          check ? "  gap-20" : " gap-0 justify-between"
        }`}
      >
        <h1 className="text-4xl ">{name}</h1>
        <Time check={check} />
        {/* {arrow ? (
          ""
        ) : (
          <div className={` ${check ? "flex-3" : ""}`}>
            <Arrows />
          </div>
        )} */}
      </div>
    </>
  );
};
Product_Second_Layer_Heading.propTypes = productSecondLayerHeadingPropTypes;

export default Product_Second_Layer_Heading;
