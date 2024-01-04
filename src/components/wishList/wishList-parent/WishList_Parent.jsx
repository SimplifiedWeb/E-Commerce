// import { Suspense } from "react";
import Product_Cards from "../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../common/product_div_headings/Product_Second_Layer_Heading";
// import Loading from "../../common/spinner/Loading";
// const helper = lazy(() => import("../../helper"));

const WishList_Parent = () => {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      {/* <Helper/> */}
      <div className="wishList w-full flex flex-col  min-h-[100vh] p-6">
        <div className="top flex justify-between items-center flex-wrap">
          <div className="left">
            <span>WishList</span>
            &nbsp;
            <span>( 4 )</span>
          </div>
          <div className="right">
            <button className="p-2 px-2 border-[1.4px] border-gray-400 text-center font-semibold">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="wishList-cards overflow-hidden mb-[50px]">
          <Product_Cards category="flash" btn={false} />
          <Product_Second_Layer_Heading check={false} />
        </div>
        <div className="heading ">
          <Product_Main_Heading data={"Just For You"} />
        </div>

        <div className="content overflow-hidden mt-[10px]">
          <Product_Cards category={"randomProducts"} />
        </div>
        <div className="timer_section ">
          <Product_Second_Layer_Heading check={false} />
        </div>
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default WishList_Parent;
