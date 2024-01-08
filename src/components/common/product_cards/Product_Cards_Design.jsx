import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCallback } from "react";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
// import MemoizedUseAddToCartAndWhishList from "../../hooks/useAddToCartAndWhishList/UseAddToCartAndWhishList";
// import UseAddToCartAndWhishList from "../../hooks/useAddToCartAndWhishList/UseAddToCartAndWhishList";
// import UseAddToCartAndWhishList from "../../hooks/useAddToCartAndWhishList/UseAddToCartAndWhishList";
import { debounce } from "lodash";

import { productCardDesignPropTypes } from "../../prop-types";
import Rating from "../ratings/Rating";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeAddToCart } from "../../../redux/slices/addToCartSlice";

const Product_Cards_Design = React.memo(
  ({ currElm, mainList, listItemClass, isListView, flexWrap }) => {
    const [isHover, setIsHover] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    // const [dataId, setDataId] = useState(null);

    const handleAddToCart = useCallback(
      (elm) => {
        // console.log("Clicked");
        dispatch(storeAddToCart(elm));
        // setDataId(id);
      },
      [dispatch]
    );
    const handleEnterDebounced = debounce(() => {
      setIsHover(true);
    }, 200); // Adjust the debounce delay as needed

    const handleLeaveDebounced = debounce(() => {
      setIsHover(false);
    }, 200); // Adjust the debounce delay as needed

    useEffect(() => {
      // Cleanup debounced functions on component unmount
      return () => {
        handleEnterDebounced.cancel();
        handleLeaveDebounced.cancel();
      };
    }, [handleEnterDebounced, handleLeaveDebounced]);

    const handleEnter = () => handleEnterDebounced();
    const handleLeave = () => handleLeaveDebounced();

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };

    return (
      <div
        className={`
        main-card mx-2 rounded-lg p-4 h-fit-content cursor-pointer bg-white border-[0.1px] border-gray-900 border-opacity-10 border-b-2
        ${listItemClass ? "flex w-full px-2" : "w-[280px]"} 
      `}
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          flex: "0 0 auto",
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="top-section relative flex flex-col justify-center items-center">
          <div className="image-container w-[250px]">
            <img
              src={currElm.image}
              loading="lazy"
              alt={currElm.product_name}
              className="object-contain mix-blend-multiply w-full h-[210px]"
            />
          </div>
          <div className="discount bg-[#db4444] w-11 rounded-md text-xs p-1 absolute top-0 left-0">
            <span className="text-white">
              {currElm.discount}
              <b>%</b>
            </span>
          </div>
          {!listItemClass && (
            <button
              className={`fav absolute top-0 right-2 ${
                isHover
                  ? "block transition-all duration-500 opacity-100"
                  : "hidden"
              }`}
              onClick={handleFavoriteClick}
            >
              <FavoriteBorderIcon
                className={`text-gray-800 cursor-pointer ${
                  isFavorite ? "text-red-500 " : ""
                }`}
              />
            </button>
          )}
          {!listItemClass && (
            <button
              className={`addToCart absolute bottom-0 left-0 hover:bg-red-500 hover:scale-[0.98] ${
                isHover
                  ? "bg-black rounded-bl-md rounded-br-md w-full text-center p-2 transition-all duration-500 opacity-100"
                  : ""
              }`}
              onClick={() => handleAddToCart(currElm)}
            >
              <span
                className={`font-bold ${isHover ? "text-white" : "hidden"}`}
              >
                Add To Cart
              </span>
            </button>
          )}
        </div>

        <div className="bottom-section mt-4 relative">
          <div className="productName">
            <h3 className="text-[#353535] mt-[6px] ml-[2px] text-lg font-semibold">
              {currElm.product_name}
            </h3>
          </div>
          {listItemClass && (
            <div className="">
              <button
                className={`fav absolute top-[-8%] right-[2%] ${
                  isHover
                    ? "block transition-all duration-500 opacity-100"
                    : "hidden"
                }`}
                onClick={handleFavoriteClick}
              >
                <FavoriteBorderIcon
                  style={{ color: isFavorite ? "#ff0000" : "#808080" }}
                  className="text-gray-800 cursor-pointer"
                />
              </button>
              <div className="desc text-md mt-2 text-gray-600">
                {currElm.description}
              </div>
              <button
                className="bg-red-100 text-red-500 text-sm font-bold me-2 px-[12px] py-[4px] mt-1 rounded dark:bg-red-900 dark:text-red-300 "
                onClick={() => handleAddToCart(currElm)}
              >
                Add To Cart
              </button>
            </div>
          )}
          <div className="productPricing text-sm mt-2">
            <span className="text-[#e67c7c] font-semibold">
              <b>&#8377;</b>
              {currElm.current_price}
            </span>
            <span className="text-[#9a9a9a] line-through mx-2">
              <b>&#8377;</b>
              {currElm.original_price}
            </span>
          </div>
          <div className="ratings mt-2">
            <Rating rating={currElm.rating + ""} />
          </div>
        </div>
      </div>
    );
  }
);

Product_Cards_Design.propTypes = productCardDesignPropTypes;

Product_Cards_Design.displayName = "Product_Cards_Design";

export default Product_Cards_Design;
