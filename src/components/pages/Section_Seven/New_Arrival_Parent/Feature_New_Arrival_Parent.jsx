import Banners from "../../../common/banners/Banners";
import Product_Main_Heading from "../../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../../common/product_div_headings/Product_Second_Layer_Heading";

const Feature_New_Arrival_Parent = () => {
  return (
    <>
      <div className="main  min-h-[75vh]  pt-4 px-3">
        {/* bg-[#f2f0ea] */}
        <div className="heading">
          <Product_Main_Heading data={"Featured"} />
        </div>
        <div className="timer_section">
          <Product_Second_Layer_Heading
            check={false}
            name={"New Arrival"}
            arrow={true}
          />
        </div>
        <div className="content overflow-hidden ">
          <Banners imagePath={"section-7-banner"} />
        </div>
      </div>
    </>
  );
};

export default Feature_New_Arrival_Parent;
