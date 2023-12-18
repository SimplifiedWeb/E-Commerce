import ProductsHook from "../../hooks/useProducts/ProductsHook";
import { productCardPropTypes } from "../../prop-types";
import ButtonsGroup from "../buttons/ButtonsGroup";
import Product_Cards_Design from "./Product_Cards_Design";

const Product_Cards = ({ category, flexWrap }) => {
  const { data } = ProductsHook(category);

  return (
    <>
      <div
        className={`cards  ${
          flexWrap
            ? "flex flex-wrap w-screen justify-center gap-5 mt-5 items-center overflow-visible"
            : "flex min-w-[120vw] mt-5 mx-4 overflow-hidden"
        }`}
      >
        {data !== undefined &&
          Object.keys(data).length > 0 &&
          data.map((currElm, index) => {
            return (
              <Product_Cards_Design
                key={index}
                {...currElm}
                flexWrap={flexWrap}
              />
            );
          })}
      </div>
      <div className="button w-full ">
        <ButtonsGroup btnType={"largeBtn"} name={"View All Products"} />
      </div>
    </>
  );
};

Product_Cards.propTypes = productCardPropTypes;
export default Product_Cards;
