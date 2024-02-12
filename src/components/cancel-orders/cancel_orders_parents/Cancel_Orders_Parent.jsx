import React from "react";
import Product_Cards from "../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../common/product_div_headings/Product_Main_Heading";
import Loading from "../../common/spinner/Loading";
// import Product_Second_Layer_Heading from "../../common/product_div_headings/Product_Second_Layer_Heading";
import FetchingCancelOrders from "./FetchingCancelOrders";
// import Pending_Work from "../../common/pending-works/Pending_Work";

const Cancel_Orders_Parent = () => {
  const { data, isError, isLoading } = FetchingCancelOrders();
  if (isLoading) return <Loading />;
  return (
    <>
      {isError && <p>{isError}</p>}
      <div className="main  min-h-[79vh] pt-4 px-3 mt-10 sm:mt-[32%]">
        {/* bg-[#f2f0ea]  */}
        <div className="heading">
          <Product_Main_Heading data={"Cancel Orders"} />
        </div>
        <div className="timer_section py-4">
          {/* <Product_Second_Layer_Heading
            check={false}
            name={"It w"}
          /> */}
          <h3>The cancel order's will get removed within 7 days.</h3>
        </div>
        <div className="content flex flex-wrap  m-auto ">
          <Product_Cards category={"cancelOrders"} flexWrap={true} />
        </div>
      </div>
    </>
  );
};

export default Cancel_Orders_Parent;
