import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Rating from "../../common/ratings/Rating";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Single_Product_Info = () => {
  return (
    <>
      <div className="single-product-info w-[400px] flex flex-col flex-wrap gap-2 ">
        <div className="first-line flex mb-[-5px]">
          <CheckOutlinedIcon style={{ width: "16px", color: "#00a524" }} />
          <h3 className="text-[#00a524]">in Stock</h3>
        </div>
        <div className="name">
          <h1 className="text-xl">
            Upgrade your entertainment experience with the Ultra HD Smart TV.
          </h1>
        </div>
        <div className="third-line flex justify-between items-center text-sm">
          <div className="rating flex items-center">
            <Rating rating="2.5" />
          </div>
          <span
            className="inline-block w-1 h-1 bg-gray-500 rounded-full"
            style={{ minWidth: "1px", minHeight: "1px" }}
          ></span>

          <div className="reviews flex items-center text-gray-400">
            <ChatBubbleOutlinedIcon style={{ width: "16px" }} />
            <span>786 reviews</span>
          </div>
          <span
            className="inline-block w-1 h-1 bg-gray-500 rounded-full"
            style={{ minWidth: "1px", minHeight: "1px" }}
          ></span>
          <div className="sold text-gray-400 flex items-center">
            <ShoppingBagOutlinedIcon style={{ width: "16px" }} />
            <span>1200+ sold</span>
          </div>
        </div>
        <div className="fourth-line flex p-2 items-center justify-between text-sm font-normal bg-[#ffe8d1] shadow-sm rounded-sm ">
          <div className="first flex flex-col items-center justify-center">
            <span className="font-extrabold text-[#db4444]">$140.00</span>
            <span>50-100pcs</span>
          </div>
          <div className="second flex flex-col items-center justify-center">
            <span className="font-extrabold">$120.00</span>
            <span>100-700pcs</span>
          </div>
          <div className="third flex flex-col items-center justify-center">
            <span className="font-extrabold">$100.00</span>
            <span>700+ pcs</span>
          </div>
        </div>
        <div className="info-quality flex gap-20 border-b border-gray-300 ">
          <div className="left  flex flex-col flex-wrap text-[#b9bcc0] text-normal ">
            <span className="p-1">Price:</span>
            <span className="p-1">Type:</span>
            <span className="p-1">Material:</span>
            <span className="p-1">Sizes:</span>
          </div>
          <div className="right flex flex-col flex-wrap text-[#5a5a5a] text-normal  ">
            <span className="p-1">Negotiable</span>
            <span className="p-1">Electronic </span>
            <span className="p-1">Metal and Fiber</span>
            <span className="p-1">42 inch, 25 inch, 32 inch</span>
          </div>
        </div>
        <div className="info-quality flex gap-10 ">
          <div className="left  flex flex-col flex-wrap text-[#b9bcc0] text-normal py-2">
            <span className="p-1">customization:</span>
            <span className="p-1">Protection:</span>
            <span className="p-1">Warranty:</span>
          </div>
          <div className="right flex flex-col flex-wrap text-[#5a5a5a] text-normal py-2 ">
            <span className="p-1 w-full">
              Customized logo and design custom packages
            </span>
            <span className="p-1">Refund Policy </span>
            <span className="p-1">2 years full warranty</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Product_Info;
