import React, { useCallback, useEffect, useState } from "react";
import ProductsHook from "../../hooks/useProducts/ProductsHook";
import { useSelector } from "react-redux";
import ButtonsGroup from "../buttons/ButtonsGroup";
import Product_Cards_Design from "./Product_Cards_Design";
import Arrows from "../arrows/Arrows";
import { productCardPropTypes } from "../../prop-types";
import { useLocation } from "react-router-dom";
import { resetFilters } from "../../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Product_Cards = ({ category, flexWrap, btn, mainList }) => {
  const { getStore } = ProductsHook(category);
  const dispatch = useDispatch();
  const [data, setDataToUse] = useState([]);
  // const [dragStart, setDragStart] = useState(0);

  const [hiddenOffset, setHiddenOffset] = useState(0);
  // const [touchStart, setTouchStart] = useState(0);
  const location = useLocation();

  const filterBrands = useSelector((state) => state.filterSlice.currFilter);
  const paginatedData = useSelector(
    (state) => state.allProducts.paginatedStore
  );
  const sortedPaginated = useSelector(
    (state) => state.allProducts.SortedPaginatedData
  );
  const { list: listFromRedux } = useSelector((state) => state.viewSlice);
  const filteredPriceRange = useSelector(
    (state) => state.filterSlice.filterRange
  );

  const maxOffset = category === "randomProducts" ? 125 : 80;

  const handleLeftArrowClick = useCallback(() => {
    const moveLeft = 40;
    setHiddenOffset((prevOffset) => Math.min(prevOffset + moveLeft, maxOffset));
  }, [maxOffset]);

  const handleRightArrowClick = useCallback(() => {
    const moveRight = 40;
    setHiddenOffset((prevOffset) => Math.max(prevOffset - moveRight, 0));
  }, []);

  useEffect(() => {
    // Check if the pathname starts with "/category/"
    //if the path doesn't start with /category then resetFilter
    if (!location.pathname.startsWith("/category/")) {
      dispatch(resetFilters());
    }
  }, [location.pathname, dispatch]);

  const determineDataToUse = () => {
    if (filterBrands && filterBrands.length > 0) {
      return filterBrands;
    } else if (
      category === "randomProducts" ||
      category === "flash" ||
      category === "otherProducts"
    ) {
      return getStore;
    } else if (filteredPriceRange && filteredPriceRange.length > 0) {
      return filteredPriceRange;
    } else if (sortedPaginated && sortedPaginated.length > 0) {
      return sortedPaginated;
    } else if (paginatedData && paginatedData.length > 0) {
      return paginatedData;
    } else {
      return getStore;
    }
  };

  // const handleTouchStart = (e) => {
  //   setTouchStart(e.touches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   const touchCurrent = e.touches[0].clientX;
  //   const move = touchStart - touchCurrent;

  //   setHiddenOffset((prevOffset) =>
  //     Math.max(Math.min(prevOffset + move, 0), -maxOffset)
  //   );
  // };

  // const handleTouchEnd = () => {
  //   setTouchStart(0);
  // };

  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [filterBrands]);

  useEffect(() => {
    // Update dataToUse state
    setDataToUse(determineDataToUse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filterBrands,
    filteredPriceRange,
    sortedPaginated,
    paginatedData,
    getStore,
    category,
  ]);

  const list =
    location.pathname === "/" || location.pathname === "/wishList"
      ? false
      : listFromRedux;

  return (
    <div
      className="relative"
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
    >
      <div
        className={`
          cards-container relative 
          ${
            list
              ? "flex flex-col w-[95%] justify-center gap-5 ml-6 items-center"
              : flexWrap
              ? "flex flex-wrap w-full justify-center   items-center"
              : "flex min-w-full mt-5 mx-4 overflow-hidden"
          }
        `}
        style={{
          transform: `translateX(${-hiddenOffset}vw)`,
          transition: "transform ease-in 0.4s",
          overflow: "visible",
        }}
      >
        {data?.map((currElm, index) => (
          <Product_Cards_Design
            key={index}
            // {...currElm}
            currElm={currElm}
            flexWrap={flexWrap}
            mainList={mainList}
            listItemClass={list}
            isListView={list}
          />
        ))}
      </div>

      {btn && (
        <div className="button w-full">
          <ButtonsGroup btnType={"largeBtn"} name={"View All Products"} />
        </div>
      )}

      {!flexWrap && (
        <div className="setArrowDiv my-5 ">
          <Arrows
            onLeftClick={handleLeftArrowClick}
            onRightClick={handleRightArrowClick}
          />
        </div>
      )}
    </div>
  );
};

Product_Cards.propTypes = productCardPropTypes;
export default Product_Cards;
