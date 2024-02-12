import React, { useState } from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const CartItem_Row = ({
  item,
  index,
  quantity,
  handleChange,
  handleRemove,
}) => {
  const { image, product_name, current_price } = item;
  const [showTooltip, setShowTooltip] = useState(false);
  const handleEnter = () => {
    // console.log("enter");
    setShowTooltip(true);
  };
  const handleLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center gap-4 text-center relative">
            <img src={image} alt={product_name} className="w-[60px] h-[60px]" />
            <button
              className="absolute top-[-15%] sm:bg-black sm:rounded-full left-[-4%]"
              onClick={() => handleRemove(index)}
            >
              <HighlightOffOutlinedIcon />
            </button>
            <span className="sm:w-[180px]">{product_name}</span>
          </div>
        </td>
        <td className="px-6 py-4">{current_price}</td>
        <td
          className="px-6 py-4 relative"
          onClick={handleEnter}
          onMouseLeave={handleLeave}
        >
          <input
            type="number"
            className="w-[60px] text-center p-2 border-[1.4px] border-gray-400"
            min="1"
            max="3"
            value={quantity}
            onChange={(e) => handleChange(e, index)}
          />
          {showTooltip && (
            <div className="absolute text-sm top-[-35%] sm:top-[-40%] sm:left-[-50%] sm:w-[200px] bg-black text-white rounded-md shadow-lg transition-opacity duration-300 left-[-8%] ml-1 p-2 ">
              add the value first then remove the previous one.
            </div>
          )}
        </td>
        <td className="px-6 py-4">{quantity * current_price}</td>
      </tr>
    </>
  );
};

export default CartItem_Row;
