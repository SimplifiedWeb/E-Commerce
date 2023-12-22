import Product_Cards from "../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../common/product_div_headings/Product_Second_Layer_Heading";

const Related_Product = () => {
  return (
    <>
      <div className="main  min-h-[80vh] mt-11   pt-4 ">
        <div className="heading mb-[-20px]">
          <Product_Main_Heading data={"Related Product"} />
        </div>
        <div className="timer_section">
          <Product_Second_Layer_Heading
            check={false}
            // name={"Related Product"}
          />
        </div>
        <div className="content  overflow-hidden ">
          <Product_Cards category={"random_products"} />
        </div>
        <div className="banner mt-8 relative flex flex-wrap justify-between items-center p-5">
          {/* Image as background */}
          <div
            className="absolute inset-0 bg-contain blur-[5px] bg-center z-[-1]"
            style={{
              backgroundImage: 'url("/images/about/about-first-section.png")',
            }}
          ></div>

          {/* Text content */}
          <div className="first flex flex-col gap-2 text-white z-10">
            <h1 className="text-2xl">Super discount on more than 100 USD</h1>
            <span>You ever write dummy info</span>
          </div>

          <div className="second z-10">
            <button className="w-[200px] bg-[#db4444] text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Related_Product;
