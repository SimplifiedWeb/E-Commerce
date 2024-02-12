import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllData } from "../../../../helper";
import { debounce } from "lodash";
import Logout from "../../../auth/logout/Logout";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect } from "react";

const Navbar = ({ mobile }) => {
  const allProductsData = useSelector((state) => state.allProducts.store);
  const [typedValue, setTypedValue] = useState("");
  const [isTheDropDownActive, setIsTheDropDownActive] = useState(false);
  const dropdownRef = useRef();
  const data = getAllData(allProductsData);

  const handleProfileSelectOptions = () => {
    setIsTheDropDownActive(!isTheDropDownActive);
  };

  const handleInputChange = debounce((value) => {
    setTypedValue(value);
  }, 200);

  const filteredData = data.filter((item) =>
    item.product_name.toLowerCase().includes(typedValue.toLowerCase())
  );

  const underscoreToCamelCase = (str) => {
    const categoryToUrl = {
      mobile: "smartphones",
    };
    if (!str) {
      return "";
    }

    const category = str.replace(/_([a-z])/g, (_, letter) => {
      return letter.toUpperCase();
    });

    return categoryToUrl[category] || category;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsTheDropDownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center  px-4 sm:px-0 sm:pr-2 py-2  ${
        mobile ? " sm:w-[100vw]  sm:py-0 sm:px-1" : null
      }`}
    >
      <div className="flex items-center sm:bg-[#db4444]">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="logo"
            className="w-20 h-16 object-cover mt-1"
          />
        </Link>
        <ul
          className={` lg:flex 2xl:flex items-center space-x-6 ml-8 sm:absolute sm:top-[130px] sm:left-[33px] sm:underline ${
            mobile ? "sm:top-[130px] sm:z-30" : null
          }  `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-end">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="What are you looking for"
            className={`border border-gray-400 p-2 outline-none focus:border-black transition-all duration-300  lg:w-full 2xl:w-[400px] md:w-full sm:w-[340px] sm:absolute sm:top-[85px] sm:left-[-34px] sm:transform sm:-translate-x-1/2  ${
              mobile ? "sm:ml-[-20px]" : null
            }`}
            onChange={(e) => handleInputChange(e.target.value)}
          />

          {typedValue && (
            <div className="search-results absolute bg-white sm:top-[126px] sm:w-[340px]  rounded-sm shadow-lg p-2 z-10 sm:right-[-135px]">
              {filteredData.map((item, index) => (
                <Link
                  to={`/category/${underscoreToCamelCase(item.category)}`}
                  key={index}
                >
                  <div className="py-2 flex items-center hover:bg-blue-100 cursor-pointer rounded-sm transition-all duration-150">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.product_name}
                        className="w-8 h-8 object-cover rounded-full mr-2"
                      />
                    )}
                    <span>{item.product_name}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div
            className={`sm:w-[60px] sm:absolute sm:block   sm:top-[85px] sm:left-[76px] md:hidden large:hidden 2xl:hidden sm:h-[41px] sm:bg-[#fb7575] ${
              mobile ? "sm:left-[60px]" : null
            }`}
          ></div>

          <SearchIcon
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "8px",
            }}
            className={`sm:absolute   sm:top-[90px] sm:left-[85px] absolute top-2 right-3 ${
              mobile ? "sm:left-[68px]" : null
            } `}
          />
        </div>

        <Link to="/wishList" className="mr-4">
          <FavoriteBorderOutlinedIcon
            style={{ width: "30px", height: "28px" }}
          />
        </Link>
        <Link to="/cart" className="mr-4">
          <ShoppingCartOutlinedIcon style={{ width: "30px", height: "25px" }} />
        </Link>

        <div className="relative">
          <Person2OutlinedIcon
            style={{ width: "30px", height: "32px", cursor: "pointer" }}
            onMouseOver={handleProfileSelectOptions}
          />
          {isTheDropDownActive && (
            <div
              className="options absolute top-10 right-0 bg-black text-white p-2  rounded-md shadow-md w-[300px] flex flex-col justify-center z-[999999]"
              onMouseLeave={() => setIsTheDropDownActive(false)}
              ref={dropdownRef}
            >
              <Link to="/profile">
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  Manage My Account
                </button>
              </Link>

              <Link to="/orders">
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Order
                </button>
              </Link>
              <Link to="/cancelOrders">
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Cancellations
                </button>
              </Link>
              <Link to="/reviews">
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Reviews
                </button>
              </Link>
              <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                <Logout />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
