import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Rating from "../../common/ratings/Rating";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useSelector } from "react-redux";
import { otherProperties } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import { storeAddToCart } from "../../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { getCategoryData } from "../../helper";
// eslint-disable-next-line react/prop-types
const Single_Product_Info = ({ findSpecificData, categoryName, name }) => {
  const store = useSelector((state) => state.allProducts.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showData, setShowData] = useState();
  // eslint-disable-next-line react/prop-types
  const {
    product_name,
    rating,
    original_price,
    current_price,
    in_stock,
    category,
  } = findSpecificData;

  const handleBuyNow = (data) => {
    dispatch(storeAddToCart(data));
    navigate("/cart");
  };

  const handleAdd = (elm) => {
    dispatch(storeAddToCart(elm));
  };

  useEffect(() => {
    const filteringData = otherProperties.find(
      (item) => category === item.category
    );

    if (filteringData) {
      setShowData(filteringData);
    } else {
      setShowData(null);
    }
  }, [category]);

  return (
    <>
      <div className="single-product-info w-[400px] sm:h-auto flex flex-col flex-wrap gap-2   ">
        <div className="first-line flex mb-[-5px] sm:mt-[-20%] ">
          <CheckOutlinedIcon style={{ width: "16px", color: "#00a524" }} />
          <h3 className="text-[#00a524]">
            {in_stock ? "in Stock" : "Out of Stock"}
          </h3>
        </div>
        <div className="name ">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product_name}
          </h1>
        </div>
        <div className="price text-gray-800 mt-1 flex justify-between gap-10 ">
          <h1 className="text-3xl font-semibold">
            $ {original_price || current_price}
          </h1>
          <div>
            <button
              onClick={() => handleAdd(findSpecificData)}
              className="flex-1 mr-1 w-[100px] sm:ml-[-15%] bg-[#db4444] text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000] "
            >
              Add To cart
            </button>
            <button
              onClick={() => handleBuyNow(findSpecificData)}
              className="flex-1 w-[100px] bg-[#db4444] text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000] "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="third-line flex justify-between items-center text-sm sm:pr-9">
          <div className="rating flex items-center">
            <Rating rating={String(rating)} />
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
        <div className="fourth-line flex p-2 items-center justify-between text-sm font-normal bg-[#ffe8d1] shadow-sm rounded-sm sm:pr-9 sm:mr-8 sm:overflow-hidden">
          <div className="first flex flex-col items-center justify-center">
            <span className="font-extrabold text-[#db4444]">
              {original_price}
            </span>
            <span>50-100pcs</span>
          </div>
          <div className="second flex flex-col items-center justify-center">
            <span className="font-extrabold">
              {Math.abs(
                Math.ceil(original_price - (original_price * 20) / 100)
              )}
            </span>
            <span>100-700pcs</span>
          </div>
          <div className="third flex flex-col items-center justify-center">
            <span className="font-extrabold">
              {Math.abs(
                Math.ceil(original_price - (original_price * 30) / 100)
              )}
            </span>
            <span>700+ pcs</span>
          </div>
        </div>
        <div className="info-quality flex border-b border-gray-300">
          <div className="left flex flex-col text-[#b9bcc0] text-normal w-[120px] sm:w-[150px]">
            <span className="p-1">Price:</span>
            <span className="p-1">Type:</span>
            <span className="p-1">Material:</span>
            <span className="p-1">Sizes:</span>
          </div>
          <div className="right flex flex-col text-[#5a5a5a] text-normal overflow-auto max-h-[200px]">
            <span className="p-1">Negotiable</span>
            <div className="flex">
              {showData?.properties?.type?.map((item, idx) => (
                <span key={idx} className="p-1 flex">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex">
              {showData?.properties?.material?.map((item, idx) => (
                <span key={idx} className="p-1 flex w-[fit-content]">
                  {item}
                </span>
              ))}
            </div>
            {showData?.properties?.sizes?.map((item, idx) => (
              <span key={idx} className="p-1 flex w-[200px]">
                {item}
              </span>
            ))}
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
