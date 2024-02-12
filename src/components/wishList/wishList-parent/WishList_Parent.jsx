import Product_Cards from "../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../common/product_div_headings/Product_Main_Heading";
import Product_Second_Layer_Heading from "../../common/product_div_headings/Product_Second_Layer_Heading";

const WishList_Parent = () => {
  const wishListItem = JSON.parse(localStorage.getItem("wishList-items"));
  return (
    <>
      <div className="wishList w-full flex flex-col sm:mt-[20%]  min-h-[100vh] p-6">
        <div className="top flex justify-between items-center sm:mb-[5%] flex-wrap">
          <div className="left">
            <span>WishList</span>
            &nbsp;
            <span>( {wishListItem?.length} )</span>
          </div>
          <div className="right">
            <button className="p-2 px-2 border-[1.4px] border-gray-400 text-center font-semibold">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="wishList-cards overflow-hidden mb-[50px]">
          <Product_Cards category="wishList" btn={false} flexWrap={true} />
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
