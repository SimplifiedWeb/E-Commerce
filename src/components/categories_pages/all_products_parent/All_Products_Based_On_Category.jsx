import Product_Cards from "../../common/product_cards/Product_Cards";
import Total_Items_And_Layout from "./total_items_and_layout/Total_Items_And_Layout";
import Filter_Indicator from "./used_filter_indicator/Filter_Indicator";

const All_Products_Based_On_Category = ({
  store,
  category,
  handleFilterTab,
}) => {
  return (
    <>
      <div className="all-products ">
        <div className="top">
          <Total_Items_And_Layout
            store={store}
            handleFilterTab={handleFilterTab}
          />
        </div>
        <div className="total_filter_used">
          <Filter_Indicator store={store} />
        </div>
        <div className="products bg-white">
          <Product_Cards category={category} flexWrap={true} mainList={true} />
        </div>
      </div>
    </>
  );
};

export default All_Products_Based_On_Category;
