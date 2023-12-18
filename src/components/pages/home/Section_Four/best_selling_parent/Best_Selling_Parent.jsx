import Product_Cards from "../../../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../../../common/product_div_headings/Product_Second_Layer_Heading";

const Best_Selling_Parent = () => {
  return (
    <>
      <div className="main  min-h-[75vh]   px-3 mt-[-8%]">
        <div className="heading">
          <Product_Main_Heading data={"This Month"} />
        </div>
        <div className="timer_section">
          <Product_Second_Layer_Heading
            check={false}
            name={"Best Selling Products"}
          />
        </div>
        <div className="content overflow-hidden ">
          <Product_Cards category={"other_products_data"} />
        </div>
      </div>
    </>
  );
};

export default Best_Selling_Parent;
