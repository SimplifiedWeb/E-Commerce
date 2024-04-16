import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { debounce } from "lodash";
import { productCardDesignPropTypes } from "../../prop-types";
import Rating from "../ratings/Rating";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeAddToCart } from "../../../redux/slices/addToCartSlice";
import { addOnWishList } from "../../../redux/slices/addWishListSlice";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Product_Cards_Design = React.memo(
  ({
    currElm,
    listItemClass,
    handleDeleteWishList,
    handleDeleteProduct,
    index,
    flexWrap,
  }) => {
    const location = useLocation();
    const [isHover, setIsHover] = useState(false);
    const [deleteIcon, setDeleteIcon] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      const storedWishList =
        JSON.parse(localStorage.getItem("wishList-items")) || [];

      const isInWishList = storedWishList.some(
        (item) => item.id === currElm.id
      );

      if (isInWishList && location.pathname === "/wishList") {
        setDeleteIcon(true);
      } else {
        setDeleteIcon(false);
      }
    }, [location.pathname, currElm]);

    useEffect(() => {
      const storedWishList =
        JSON.parse(localStorage.getItem("wishList-items")) || [];
      const isInWishList = storedWishList.some(
        (item) => item.id === currElm.id
      );
      setIsFavorite(isInWishList);
    }, [currElm.id]);

    const handleAddToCart = useCallback(
      (elm) => {
        dispatch(storeAddToCart(elm));
        toast.success("Added!!!");
      },
      [dispatch]
    );

    const handleEnterDebounced = debounce(() => {
      setIsHover(true);
    }, 180);

    const handleLeaveDebounced = debounce(() => {
      setIsHover(false);
    }, 180);

    useEffect(() => {
      return () => {
        handleEnterDebounced.cancel();
        handleLeaveDebounced.cancel();
      };
    }, [handleEnterDebounced, handleLeaveDebounced]);

    const handleEnter = () => handleEnterDebounced();
    const handleLeave = () => handleLeaveDebounced();

    const handleFavoriteClick = useCallback(
      (elm) => {
        dispatch(addOnWishList(elm));
        setIsFavorite(!isFavorite);
        toast.success("Added!!!");
      },
      [dispatch, isFavorite, setIsFavorite]
    );

    // useEffect(() => {
    //   isFa
    // }, [location.pathname === "/my_added_products"])

    return (
      <div
        className={`
          main-card mx-2 rounded-lg p-4 h-fit-content cursor-pointer bg-white border-[0.1px] border-gray-900 border-opacity-10 border-b-2
          ${listItemClass ? "flex w-full px-2" : "w-[280px]"} 
          ${flexWrap ? "sm:w-[45%] sm:mb-[20px]" : ""}
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
          <Link
            key={index}
            to={`/product/${currElm.category}/${currElm.product_name}/${currElm.id}`}
          >
            <div className="image-container w-[250px] sm:w-[200px]">
              <img
                src={currElm.image}
                loading="lazy"
                alt={currElm.product_name}
                className={`object-contain mix-blend-multiply w-full h-[210px] sm:h-[190px] ${
                  flexWrap ? "sm:w-full sm:p-[20px] sm:h-[200px] sm:ml-0" : ""
                }`}
              />
            </div>
            <div className="discount bg-[#db4444] w-11 rounded-md text-xs p-1 absolute top-0 left-0">
              <span className="text-white">
                {currElm.discount}
                <b>%</b>
              </span>
            </div>
          </Link>

          {!listItemClass && (
            <>
              {deleteIcon || location.pathname === "/my_added_products" ? (
                // If deleteIcon is true, render this SVG
                <button
                  className={`fav absolute top-0 right-2 transform transition-transform duration-300 ${
                    isFavorite ? "scale-110" : ""
                  }`}
                  onClick={() => {
                    if (location.pathname !== "/my_added_products") {
                      handleDeleteWishList(index);
                    } else {
                      handleDeleteProduct(currElm);
                    }
                  }}

                  // onClick={() =>handleDeleteWishList(index) }
                >
                  {/* SVG for deleteIcon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* SVG path */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              ) : (
                // If deleteIcon is false, render this SVG
                <button
                  className={`fav absolute top-0 right-2 transform transition-transform duration-300 ${
                    isFavorite ? "scale-110" : ""
                  }`}
                  onClick={() => handleFavoriteClick(currElm)}
                >
                  {/* SVG for the regular case */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isFavorite ? "red " : "transparent"}
                    viewBox="0 0 24 24"
                    strokeWidth={isFavorite ? 0 : 1}
                    stroke="currentColor"
                    className="w-6 h-6 mt-[-8px] mr-[-5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              )}
            </>
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

        <Link
          key={index}
          to={`/product/${currElm.category}/${currElm.product_name}/${currElm.id}`}
        >
          <div className="bottom-section mt-4 relative">
            <div className="productName">
              <h3
                className={`text-[#353535] mt-[6px] ml-[2px] text-lg font-semibold ${
                  flexWrap ? "sm:text-sm sm:mt-[2px]" : ""
                }`}
              >
                {currElm.product_name}
              </h3>
            </div>
            {listItemClass && (
              <div className="">
                <button
                  className={`fav absolute top-0 right-2 transform transition-transform duration-300 ${
                    isFavorite ? "scale-110" : ""
                  }`}
                  onClick={() => handleFavoriteClick(currElm)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isFavorite ? "red " : "transparent"}
                    viewBox="0 0 24 24"
                    strokeWidth={isFavorite ? 0 : 1}
                    stroke="currentColor"
                    className="w-6 h-6 mt-[-8px] mr-[-5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
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
        </Link>
      </div>
    );
  }
);

Product_Cards_Design.propTypes = productCardDesignPropTypes;

Product_Cards_Design.displayName = "Product_Cards_Design";

export default Product_Cards_Design;
