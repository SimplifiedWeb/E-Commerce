import Product_Main_Heading from "../../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../../common/product_div_headings/Product_Second_Layer_Heading";
import Category_Cards from "../Category_Cards/Category_Cards";

const Categories_Parent = () => {
  return (
    <>
      <div className="categories  min-h-[75vh]  pt-4 px-3">
        {/* bg-[#f2f0ea] */}
        <div className="heading">
          <Product_Main_Heading data={"Categories"} />
        </div>
        <div className="second_layer">
          <Product_Second_Layer_Heading
            check={false}
            arrow={true}
            name={"Browse By Category"}
          />
        </div>
        <div className="content px-3 overflow-hidden ">
          <Category_Cards />
        </div>
      </div>
    </>
  );
};

export default Categories_Parent;
