import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { productCardDesignPropTypes } from "../../prop-types";
import Rating from "../ratings/Rating";

const Product_Cards_Design = ({
  current_price,
  original_price,
  discount,
  image,
  product_name,
  rating,
  flexWrap,
  mainList,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div
        className={`main-card mx-2  rounded-lg p-[4px] pt-[1px] h-[315px] cursor-pointer bg-[#fff]  border-[0.1px] border-gray-900 border-opacity-10 border-b-2 
        
        ${mainList ? "w-[300px]" : "w-[400px]"}
        `}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          // width: "400px",
        }}
      >
        <div
          className="top-section relative flex flex-col justify-center items-center"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="image-container w-[250px] ">
            <img
              src={image}
              loading="lazy"
              alt={product_name}
              className="object-contain mix-blend-multiply w-[300px] h-[210px]"
              style={{ width: "300px" }}
            />
          </div>
          <div className="discount bg-[#db4444] w-11 rounded-md text-xs p-1 absolute top-0 left-0">
            <span className="text-white">
              {discount}
              <b>%</b>
            </span>
          </div>
          <div
            className={`fav absolute top-0 right-2 ${
              isHover
                ? "block transition-all duration-500 opacity-100"
                : "hidden"
            }`}
          >
            <FavoriteBorderIcon className="text-gray-800 cursor-pointer" />
          </div>
          <div
            className={`addToCart absolute bottom-0 left-0 hover:bg-red-500  hover:scale-[0.98]  ${
              isHover
                ? "bg-black rounded-bl-md rounded-br-md  w-full text-center p-2 transition-all duration-500 opacity-100"
                : ""
            }`}
          >
            <span
              className={`font-bold  ${isHover ? "text-white " : "hidden"}`}
            >
              Add To Cart
            </span>
          </div>
        </div>
        <div className="bottom-section   ">
          <div className="productName">
            <h3 className="text-[#353535] mt-[6px] ml-[2px]">{product_name}</h3>
          </div>
          <div className="productPricing text-sm ml-[2px]">
            <span className="text-[#e67c7c] ">
              <b>&#8377;</b>
              {current_price}
            </span>
            <span className="text-[#9a9a9a] line-through mx-2  ">
              <b>&#8377;</b>
              {original_price}
            </span>
          </div>
          <div className="ratings ml-[2px]">
            <Rating rating={rating + ""} />
          </div>
        </div>
      </div>
    </>
  );
};

Product_Cards_Design.propTypes = productCardDesignPropTypes;

export default Product_Cards_Design;
