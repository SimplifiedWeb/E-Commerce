import React from "react";

const Display_checkout_Product = ({ cartItems }) => {
  return (
    <>
      <div className="w-full h-[300px] overflow-y-scroll p-2 rounded-md">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.product_name}
                className="w-20 h-20 object-cover rounded-md "
              />
              <div>
                <span className="text-lg text-gray-800 font-medium">
                  {item.product_name}
                </span>
                {/* Uncomment the next line if you want to show the description */}
                {/* <p className="text-sm text-gray-500 mt-1">{item.description}</p> */}
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-red-300">
                <span className="font-semibold">Quantity:</span>
                {item.quantity}
              </div>
              <div className="text-green-600 font-semibold">
                <span className="font-semibold">Actual Price:</span> $
                {item.current_price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display_checkout_Product;
