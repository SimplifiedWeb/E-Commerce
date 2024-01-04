import Product_Cards from "../../../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../../../common/product_div_headings/Product_Second_Layer_Heading";

const Our_Product_Parent = () => {
  return (
    <>
      <div className="main  min-h-[79vh] pt-4 px-3">
        {/* bg-[#f2f0ea]  */}
        <div className="heading">
          <Product_Main_Heading data={"Our Products"} />
        </div>
        <div className="timer_section">
          <Product_Second_Layer_Heading
            check={false}
            name={"Explore Our Products"}
          />
        </div>
        <div className="content flex flex-wrap  m-auto ">
          <Product_Cards category={"randomProducts"} flexWrap={true} />
        </div>
      </div>
    </>
  );
};

export default Our_Product_Parent;
