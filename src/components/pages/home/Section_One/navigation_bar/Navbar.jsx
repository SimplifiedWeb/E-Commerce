// import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex ">
        <img
          src="images/Logo.png"
          alt="logo"
          className="w-[5.1vw] h-[10.4vh]"
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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <div className="flex justify-end  items-center w-[55%] pr-3">
          <div className="pr-2 cursor-pointer">
            <input
              type="text"
              placeholder="What are you looking for"
              className="border border-gray-400 p-2 outline-none focus:border-black transition-all duration-300 w-48 sm:w-64 md:w-96"
            />

            <SearchIcon
              style={{ width: "50px", height: "30px", marginRight: "50px" }}
            />
            <FavoriteBorderOutlinedIcon
              style={{ width: "50px", height: "28px" }}
            />
            <ShoppingCartOutlinedIcon
              style={{ width: "40px", height: "25px" }}
            />
          </div>
          <div className="w-[38px] cursor-pointer rounded-full h-[43px]">
            {/* <img
              src="images/profile_logo.png"
              alt="profile_logo"
              className="w-[90%] h-[90%]"
            /> */}
            <Person2OutlinedIcon
              style={{ width: "50px", height: "32px", marginTop: "7px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
