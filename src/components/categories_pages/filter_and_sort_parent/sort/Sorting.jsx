import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { Link } from "react-router-dom";
import UseShowAndHideElements from "../../../hooks/useShowAndHide/UseShowAndHideElements";
import UseSorting from "../../../hooks/useSorting/UseSorting";
const Sorting = ({ store }) => {
  const { showElement, handleShowElement } = UseShowAndHideElements();
  const { handleSort } = UseSorting({ data: store });
  return (
    <div className="main-sorting-content bg-gray-100 p-4 rounded-lg shadow-md w-[100%]">
      <h2 className="text-lg font-bold mb-4">Sort By</h2>

      {/* Order */}
      <div className="mb-4 flex items-center space-x-3 border-t-2 border-b-2 border-gray-200 p-2">
        <span className="text-gray-600 font-semibold">Order:</span>
        <button
          className="btn-sort transition-transform duration-300 transform scale-100 hover:scale-105"
          onClick={() => handleSort("ascending")}
        >
          <span className="text-sm font-medium">A</span>
          <StraightOutlinedIcon
            className="text-md ml-[2.5px] "
            style={{ fontSize: "17px" }}
          />
        </button>
        <button
          className="btn-sort transition-transform duration-300 transform scale-100 hover:scale-105 "
          onClick={() => handleSort("descending")}
        >
          <span className="text-sm font-medium">Z</span>
          <StraightOutlinedIcon
            className="text-md ml-[2.5px] transform rotate-180"
            style={{ fontSize: "17px" }}
          />
        </button>
        <button
          className="btn-sort transition-transform duration-300 transform scale-100 hover:scale-105"
          onClick={() => handleSort("lowPrice")}
        >
          <span className="text-sm font-medium">Low</span>
          <CurrencyRupeeOutlinedIcon
            className="text-sm ml-1 "
            style={{ fontSize: "13.5px" }}
          />
        </button>
        <button
          className="btn-sort transition-transform duration-300 transform scale-100 hover:scale-105"
          onClick={() => handleSort("highPrice")}
        >
          <span className="text-sm font-medium">High</span>
          <CurrencyRupeeOutlinedIcon
            className="text-sm ml-1 "
            style={{ fontSize: "13.5px" }}
          />
        </button>
      </div>

      <div className="category  border-b-2 border-gray-200 flex flex-col gap-2 pb-3">
        <div
          className="head flex justify-between items-center cursor-pointer   "
          onClick={() => handleShowElement("relatedCategory")}
        >
          <h2 className="flex-3">Related Category</h2>
          <ArrowForwardIosIcon
            style={{
              width: "17px",
              marginLeft: "50%",
              transform: showElement.relatedCategory
                ? "rotate(90deg)"
                : "rotate(0deg)",
            }}
            className="flex-1"
          />
        </div>

        {showElement.relatedCategory ? (
          <ul className="pb-3">
            <Link to="/category/homeInterior">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Home interior</button>
              </li>
            </Link>
            <Link to="/category/smartphones">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Mobiles</button>
              </li>
            </Link>
            <Link to="/category/electronics">
              <li className="hover:bgk-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Electronics</button>
              </li>
            </Link>
            <Link to="/category/computerTech">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Computer and Tech</button>
              </li>
            </Link>
            <Link to="/category/toolsEquipment">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Tools and Equipments</button>
              </li>
            </Link>
            <Link to="/category/sportsOutdoors">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Sports and Outdoor</button>
              </li>
            </Link>
            <Link to="/category/animalsPets">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Animals and Pets</button>
              </li>
            </Link>
            <Link to="/category/machineryTools">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Machinery tools</button>
              </li>
            </Link>
            <Link to="/category/otherProducts">
              <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
                <button>Other products</button>
              </li>
            </Link>
          </ul>
        ) : null}
      </div>

      {/* Stock Availability */}
      {/* <div className="mt-4  pt-3">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-gray-600">In Stock Only</span>
        </label>
      </div> */}
    </div>
  );
};

export default Sorting;
