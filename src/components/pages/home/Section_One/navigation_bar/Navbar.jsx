// import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Logout from "../../../auth/logout/Logout";
const Navbar = () => {
  const [isTheDropDownActive, setIsTheDropDownActive] = useState(false);
  const dropdownRef = useRef();

  const handleProfileSelectOptions = () => {
    setIsTheDropDownActive(!isTheDropDownActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTheDropDownActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex ">
        <img
          src="images/Logo.png"
          alt="logo"
          className="w-[5.1vw] h-[10.4vh] "
        />
        <ul className="flex items-center pl-10 justify-between w-[45%]  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>

        <div className="flex justify-end  items-center w-[55%] pr-3 relative">
          <div className="pr-2 cursor-pointer">
            <input
              type="text"
              placeholder="What are you looking for"
              className="border border-gray-400 p-2 outline-none focus:border-black transition-all duration-300 w-48 sm:w-64 md:w-96 "
            />

            <SearchIcon
              style={{ width: "50px", height: "30px", marginRight: "50px" }}
            />
            <Link to="/wishList">
              <FavoriteBorderOutlinedIcon
                style={{ width: "50px", height: "28px" }}
              />
            </Link>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon
                style={{ width: "40px", height: "25px" }}
              />
            </Link>
          </div>
          <div
            className="w-[38px] cursor-pointer rounded-full h-[43px] "
            ref={dropdownRef}
          >
            {/* <Link to="/profile">
              <Person2OutlinedIcon
                style={{ width: "50px", height: "32px", marginTop: "7px" }}
              />
            </Link> */}
            <Person2OutlinedIcon
              style={{
                width: "50px",
                height: "32px",
                marginTop: "7px",
                cursor: "pointer",
              }}
              onClick={handleProfileSelectOptions}
            />
            {isTheDropDownActive ? (
              <div className="options flex flex-col p-2 w-[250px] absolute left-[60%] top-[75%] justify-start items-start border-2 bg-black text-white border-black gap-3 z-[9999999999] rounded-md shadow-md">
                <Link to="/profile">
                  <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                    Manage My Account
                  </button>
                </Link>
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Order
                </button>
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Cancellations
                </button>
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  My Reviews
                </button>
                <button className="hover:bg-gray-800 p-2 rounded-md transition duration-300">
                  <Logout />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
