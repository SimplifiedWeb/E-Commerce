import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
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
    <>
      <ul className="categories flex flex-col gap-3 p-4 pl-6 items-start">
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
          <ul className="options w-3/4 px-2 mt-[-7px]">
            <li>Mobile</li>
            <li>Computers</li>
            <li>Other</li>
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
          <ul className="options w-3/4 px-2 mt-[-7px] ">
            <li>Men</li>
            <li>Women</li>
            <li>Other</li>
          </ul>
        )}
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Home interior</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Computer and tech</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Tools, equipments</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Sports and outdoor</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Animals and pets</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Machinery tools</button>
        </li>
        <li className="hover:bg-gray-200 p-1 rounded cursor-pointer w-[230px]">
          <button>Other products</button>
        </li>
      </ul>
    </>
  );
};

export default Category;
