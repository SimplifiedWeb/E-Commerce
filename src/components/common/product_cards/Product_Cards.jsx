import { useCallback } from "react";
import { useState } from "react";
import ProductsHook from "../../hooks/useProducts/ProductsHook";
import { productCardPropTypes } from "../../prop-types";
import ButtonsGroup from "../buttons/ButtonsGroup";
import Product_Cards_Design from "./Product_Cards_Design";
import Arrows from "../arrows/Arrows";
import { useSelector } from "react-redux";

const Product_Cards = ({ category, flexWrap, btn, mainList }) => {
  const { getStore } = ProductsHook(category);
  const [hiddenOffset, setHiddenOffset] = useState(0);
  const sortedData = useSelector((state) => state.sortingSlice.sort_store);

  // const { sortedData } = UseSorting();
  const maxOffset = category === "randomProducts" ? 125 : 80; // Maximum offset in vw

  const handleLeftArrowClick = useCallback(() => {
    // Calculate how much you want to move to the left (negative offset)
    const moveLeft = 40; // Adjust this value based on your design
    setHiddenOffset((prevOffset) =>
      prevOffset + moveLeft > maxOffset ? maxOffset : prevOffset + moveLeft
    );
  }, [maxOffset]);

  const handleRightArrowClick = useCallback(() => {
    // Calculate how much you want to move to the right (positive offset)
    const moveRight = 40; // Adjust this value based on your design
    setHiddenOffset((prevOffset) =>
      prevOffset - moveRight < 0 ? 0 : prevOffset - moveRight
    );
  }, []);

  const dataToUse = sortedData || getStore;

  console.log(hiddenOffset);

  return (
    <div className="relative">
      <div
        className={`
    cards-container relative 
    ${
      flexWrap
        ? "flex flex-wrap w-full justify-center gap-5 mt-5 items-center"
        : `flex min-w-full mt-5 mx-4 overflow-hidden `
    }
  `}
        style={{
          transform: `translateX(${-hiddenOffset}vw)`,
          transition: "transform ease-in 0.4s", // Adjust the duration as needed
          overflow: "visible",
        }}
      >
        {getStore !== undefined &&
          Object.keys(getStore)?.length > 0 &&
          dataToUse?.map((currElm, index) => (
            <Product_Cards_Design
              key={index}
              {...currElm}
              flexWrap={flexWrap}
              mainList={mainList}
            />
          ))}
      </div>

      {btn ? (
        <div className="button w-full">
          <ButtonsGroup btnType={"largeBtn"} name={"View All Products"} />
        </div>
      ) : (
        ""
      )}
      {flexWrap ? (
        ""
      ) : (
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
