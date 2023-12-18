import Product_Cards from "../../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../../common/product_div_headings/Product_Second_Layer_Heading";

const Todays_Home = () => {
  return (
    <>
      <div className="main  min-h-[75vh]  pt-4 px-3">
        <div className="heading">
          <Product_Main_Heading data={"Today's"} />
        </div>
        <div className="timer_section">
          <Product_Second_Layer_Heading check={true} name={"Flash Sales"} />
        </div>
        <div className="content overflow-hidden ">
          <Product_Cards category={"flash_sales_data"} />
        </div>
      </div>
    </>
  );
};

export default Todays_Home;
