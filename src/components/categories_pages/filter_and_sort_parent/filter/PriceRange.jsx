import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { filterPriceRange } from "../../../../redux/slices/filterSlice";
const PriceRange = ({ store }) => {
  const dispatch = useDispatch();
  const [range, setRange] = useState([0, 149999]); // Initial range

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleApplyClick = () => {
    dispatch(filterPriceRange({ range, store }));
    toast.success("Applied!!!");
  };
  if (!store || store.length === 0) {
    return null;
  }

  return (
    <div className="main-price-range-content bg-gray-100  rounded-lg w-[100%] py-5">
      <h2 className="text-lg font-bold mb-4">Price Range</h2>

      {/* Slider */}
      <div className="mb-4">
        <Slider
          range
          min={0}
          max={149999}
          step={10000} // Set your desired step value
          dots
          value={range}
          onChange={handleSliderChange}
        />
      </div>

      {/* Input Fields */}
      <div className="flex space-x-2 mb-4">
        <input
          type="number"
          placeholder="Min"
          className="input-sort w-1/2"
          value={range[0]}
          onChange={(e) => setRange([+e.target.value, range[1]])}
        />
        <input
          type="number"
          placeholder="Max"
          className="input-sort w-1/2"
          value={range[1]}
          onChange={(e) => setRange([range[null], +e.target.value])}
        />
      </div>

      {/* Apply Button */}
      <button
        className="btn-apply text-[13.6px] bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};

export default PriceRange;
