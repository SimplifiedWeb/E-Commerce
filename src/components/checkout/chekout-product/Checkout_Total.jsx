import React from "react";

const Checkout_Total = ({ isTotal, inputStyle, handleRadioChange }) => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-300 py-5">
        <span>Subtotal:</span>
        <span>${isTotal}</span>
      </div>

      <div className="flex justify-between items-center border-b border-gray-300 py-5">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between items-center py-5">
        <span>Total:</span>
        <span>${isTotal}</span>
      </div>
      <div className="bank flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <input
            type="radio"
            name="bank"
            style={inputStyle}
            onChange={() => handleRadioChange("bank")}
          />
          <span>Bank</span>
        </div>
        <img
          src="/images/banks.png"
          alt="banks"
          className="w-[220px] shadow-md rounded-md"
        />
      </div>

      <div className="pb-4 flex gap-2">
        <input
          type="radio"
          name="bank"
          style={inputStyle}
          onChange={() => handleRadioChange("cash")}
        />
        <span>Cash on delivery</span>
      </div>
    </>
  );
};

export default Checkout_Total;
