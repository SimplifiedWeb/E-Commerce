import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
const PriceRange = () => {
  const [range, setRange] = useState([0, 50000]); // Initial range

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const handleApplyClick = () => {
    // Handle the apply button click
    console.log("Applied Range:", range);
  };
  return (
    <div className="main-price-range-content bg-gray-100  rounded-lg w-[100%]">
      <h2 className="text-lg font-bold mb-4">Price Range</h2>

      {/* Slider */}
      <div className="mb-4">
        <Slider
          range
          min={0}
          max={50000}
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
      <button className="btn-apply" onClick={handleApplyClick}>
        Apply
      </button>
    </div>
  );
};

export default PriceRange;
