import UseShowAndHideElements from "../../../hooks/useShowAndHide/UseShowAndHideElements";
import FilterSection from "./FilterSection";
import PriceRange from "./PriceRange";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UseCategoryAndFiltering from "../../../hooks/useCategoryAndFiltering/UseCategoryAndFiltering";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
const Filtering = ({ store }) => {
  const { showElement, handleShowElement } = UseShowAndHideElements();
  const [filterOptions, setFilterOptions] = useState(null);
  const allProducts = useSelector((state) => state.allProducts.store);

  const {} = UseCategoryAndFiltering({
    store,
    selectedOptions: filterOptions,
  });

  const onFilterChange = (selectedName, index, category) => {
    setFilterOptions({ selectedName, index, category });
  };

  if (!store || store.length === 0) {
    return null;
  }
  return (
    <div className="filter-content bg-gray-100 px-4  rounded-lg shadow-md w-[100%]">
      <div
        className="brands flex flex-col gap-2 border-b-2 pb-3
       border-gray-200"
      >
        <div
          className="brand flex justify-between items-center cursor-pointer "
          onClick={() => handleShowElement("brands")}
        >
          <h2 className="flex-3 w-[120px] ">Brands</h2>
          <ArrowForwardIosIcon
            style={{
              width: "17px",
              fontSize: "12px",
              marginLeft: "50%",
              transform: showElement.brands ? "rotate(90deg)" : "rotate(0deg)",
            }}
            className="flex-1 "
          />
        </div>
        {showElement.brands ? (
          <FilterSection
            store={store}
            categoryType="brand"
            onFilterChange={onFilterChange}
          />
        ) : null}
        {/* {filterOptions && <button>Apply</button>} */}
      </div>

      <div
        className="size  flex flex-col gap-2 border-b-2 py-3
       border-gray-200"
      >
        <div
          className="sizes flex justify-between items-center cursor-pointer"
          onClick={() => handleShowElement("size")}
        >
          <h2 className="flex-3 w-[120px]">Size</h2>
          <ArrowForwardIosIcon
            style={{
              width: "17px",
              fontSize: "12px",
              marginLeft: "50%",
              transform: showElement.size ? "rotate(90deg)" : "rotate(0deg)",
            }}
            className="flex-1 "
          />
        </div>
        {showElement.size ? (
          <FilterSection
            store={store}
            categoryType="size"
            onFilterChange={onFilterChange}
          />
        ) : null}
      </div>

      <div
        className="discount  flex flex-col gap-2 border-b-2 py-3
       border-gray-200"
      >
        <div
          className="discounts flex justify-between items-center cursor-pointer"
          onClick={() => handleShowElement("discount")}
        >
          <h2 className="flex-3 w-[120px]">Discount</h2>

          <ArrowForwardIosIcon
            style={{
              width: "17px",
              fontSize: "12px",
              marginLeft: "50%",
              transform: showElement.discount
                ? "rotate(90deg)"
                : "rotate(0deg)",
            }}
            className="flex-1 "
          />
        </div>
        {showElement.discount ? (
          <FilterSection
            store={store}
            categoryType="discount"
            onFilterChange={onFilterChange}
          />
        ) : null}
      </div>

      <div
        className="rating flex flex-col gap-2 border-b-2 py-3
       border-gray-200 mb-2"
      >
        <div
          className="ratings flex justify-between items-center cursor-pointer"
          onClick={() => handleShowElement("rating")}
        >
          <h2 className="flex-3 w-[120px]">Rating</h2>

          <ArrowForwardIosIcon
            style={{
              width: "17px",
              fontSize: "12px",
              marginLeft: "50%",
              transform: showElement.rating ? "rotate(90deg)" : "rotate(0deg)",
            }}
            className="flex-1 "
          />
        </div>
        {showElement.rating ? (
          <FilterSection
            store={store}
            categoryType="rating"
            onFilterChange={onFilterChange}
          />
        ) : null}
      </div>

      <div className="price-range">
        <PriceRange store={store} />
      </div>
    </div>
  );
};

export default Filtering;
