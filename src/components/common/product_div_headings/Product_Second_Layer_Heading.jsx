import Arrows from "../arrows/Arrows";
import { productSecondLayerHeadingPropTypes } from "../../prop-types";

const Product_Second_Layer_Heading = ({ check, name, arrow }) => {
  return (
    <>
      <div
        className={`timer flex px-3 pt-7 ${
          check ? "  gap-20" : " gap-0 justify-between"
        }`}
      >
        <h1 className="text-4xl ">{name}</h1>
        {!check ? (
          ""
        ) : (
          <div className="flex flex-col flex-1">
            <div className="top-titles mt-[-4px]">
              <ul className="flex text-[10px]">
                <li className="px-4">Days</li>
                <li className="px-4">Hours</li>
                <li className="px-4">Minutes</li>
                <li className="px-1">Seconds</li>
              </ul>
            </div>

            <div className="counts ">
              <ul className="flex text-2xl font-extrabold">
                <li className="px-3">03</li>
                <li>
                  <span className="text-[#cd2c2c]">:</span>
                </li>
                <li className="px-3">23</li>
                <li>
                  <span className="text-[#cd2c2c]">:</span>
                </li>
                <li className="px-3">19</li>
                <li>
                  <span className="text-[#cd2c2c]">:</span>
                </li>
                <li className="px-3">56</li>
              </ul>
            </div>
          </div>
        )}
        {arrow ? (
          ""
        ) : (
          <div className={` ${check ? "flex-3" : ""}`}>
            <Arrows />
          </div>
        )}
      </div>
    </>
  );
};
Product_Second_Layer_Heading.propTypes = productSecondLayerHeadingPropTypes;

export default Product_Second_Layer_Heading;
