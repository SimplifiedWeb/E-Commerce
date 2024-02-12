import FlagIcon from "@mui/icons-material/Flag";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LanguageIcon from "@mui/icons-material/Language";
import Rating from "../../common/ratings/Rating";
// import ProductsHook from "../../hooks/useProducts/ProductsHook";
// import Random_Product from "../single-product-detail-info/Random_Product";
const Single_Product_Seller_Info = () => {
  // const random = ProductsHook("our_products_data");
  // console.log(random);
  return (
    <>
      <div className="seller-info w-[300px] h-[343px] shadow-md flex flex-col  gap-2 flex-wrap">
        <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
          <span className="w-[60px] h-[60px] bg-[#c6f2f1] text-[#7ec5c5] text-2xl p-2 flex justify-center items-center ">
            T
          </span>
          <div className="flex flex-col">
            <span>Supplier:</span>
            <span>TechVision Company LLC</span>
            <div className="rating">
              <Rating rating="3.5" />
            </div>
          </div>
        </div>

        <div className="second-section flex flex-col gap-3 p-2">
          <div className="location flex gap-[5px]">
            <FlagIcon className="text-[#9da1a7] " />
            <span className="text-gray-700 font-bold">California, USA</span>
          </div>
          <div className="verified flex gap-[5px]">
            <VerifiedUserIcon className="text-[#9da1a7]" />
            <span className="text-gray-700 font-bold">Verified Seller</span>
          </div>
          <div className="global flex gap-[5px]">
            <LanguageIcon className="text-[#9da1a7]" />
            <span className="text-gray-700 font-bold">Worldwide shipping</span>
          </div>
        </div>

        <div className="third-section flex justify-center items-center flex-col gap-2">
          <button className="w-[270px]  bg-[#db4444] text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
            Send inquiry
          </button>
          <button className="w-[270px] border-[1.4px] border-gray-400   text-black p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
            Add to wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default Single_Product_Seller_Info;
