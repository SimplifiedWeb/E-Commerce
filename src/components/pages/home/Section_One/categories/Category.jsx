import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const [showOptionsForElectronics, setShowOptionsForElectronics] =
    useState(false);
  const [showOptionsForClothes, setShowOptionsForClothes] = useState(false);

  const handleCategoryButtons = (category) => {
    if (category === "Electronics") {
      setShowOptionsForElectronics(!showOptionsForElectronics);

      setShowOptionsForClothes(false);
    } else if (category === "Clothes") {
      setShowOptionsForClothes(!showOptionsForClothes);
      setShowOptionsForElectronics(false);
    } else {
      return;
    }
  };

  return (
    <div className="relative">
      {/* clip-path: polygon(100% 0, 0 100%, 100% 100%); */}
      <div
        className="clip-path-background-mobile sm:block md:hidden 2xl:hidden lg:hidden absolute inset-0 bg-your_color_here"
        style={{
          clipPath: "polygon(130% 100%, 10% 100%, 30% 30%)",
          zIndex: -1, // Move the background behind the list
          backgroundColor: "#f56e6e",
          position: "absolute",
          right: -110,
          top: 0,
          overflow: "hidden",
        }}
      ></div>

      <ul
        className="categories flex flex-col gap-3 p-4 pl-6 items-start"
        // style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
      >
        <li
          className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px] "
          onClick={() => handleCategoryButtons("Electronics")}
        >
          <button>Electronics</button>
          <ArrowForwardIosIcon
            style={{
              width: "17px",
              marginLeft: "50%",
              transform: showOptionsForElectronics
                ? "rotate(90deg)"
                : "rotate(0deg)",
            }}
          />
        </li>
        {showOptionsForElectronics && (
          <ul className="options">
            <Link to="/category/smartphones">
              <button className="hover:bg-slate-100 w-[200px]">
                <li className="p-2  text-left   ">Mobile</li>
              </button>
            </Link>
            <Link to="/category/computerTech">
              <button className="hover:bg-slate-100 w-[200px]">
                <li className="p-2  text-left   ">Computer</li>
              </button>
            </Link>
          </ul>
        )}
        <li
          className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]"
          onClick={() => handleCategoryButtons("Clothes")}
        >
          <button>Clothes and wear</button>
          <ArrowForwardIosIcon
            style={{
              width: "17px",
              marginLeft: "29%",
              transform: showOptionsForClothes
                ? "rotate(90deg)"
                : "rotate(0deg)",
            }}
          />
        </li>
        {showOptionsForClothes && (
          <ul className="options ">
            <Link to="/category/menClothing">
              <button className="hover:bg-slate-100 w-[200px]">
                <li className="p-2  text-left   ">Mens</li>
              </button>
            </Link>
            <Link to="/category/womenClothing">
              <button className="hover:bg-slate-100 w-[200px]">
                <li className="p-2  text-left   ">Womans</li>
              </button>
            </Link>
          </ul>
        )}
        <Link to="/category/homeInterior">
          <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
            <button>Home interior</button>
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
    </div>
  );
};

export default Category;
