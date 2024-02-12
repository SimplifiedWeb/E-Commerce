import { useState } from "react";

const UseCalculationPrice = () => {
  const [total, setTotal] = useState(0);

  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  const calculateTotal = (cartItems, quantities) => {
    const Total = cartItems.reduce((acc, item, index) => {
      return acc + calculateSubtotal(quantities[index], item.current_price);
    }, 0);

    setTotal(Total);
  };

  const mergeQuantity = (cartItems, quantities, total) => {
    const merge = cartItems.map((item, index) => {
      const updatItem = { ...item, quantity: quantities[index], total: total };
      return updatItem;
    });

    localStorage.setItem("cart-items", JSON.stringify(merge));
  };
  return { total, calculateTotal, mergeQuantity };
};

export default UseCalculationPrice;
