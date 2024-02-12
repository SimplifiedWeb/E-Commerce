import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../../redux/slices/addToCartSlice";
import UseCalculationPrice from "../../hooks/useCalculationTotals/UseCalculationPrice";
import CartItem_Row from "./CartItem_Row";

const Cart_Parent = () => {
  const { calculateTotal, total, mergeQuantity } = UseCalculationPrice();
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart-items"));
    return storedItems || [];
  });
  const handleProcessCheckout = () => {
    // This function will be called when the user clicks on "Process Checkout"
    mergeQuantity(cartItems, quantities, total);
  };
  const dispatch = useDispatch();
  // quantities is an array after using this cartItem.map(()=> 1)
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  const handleChange = (e, index) => {
    const newQuantity = e.target.value;
    if (newQuantity >= 1) {
      setQuantities((prevQuantities) => {
        const updatedQuantities = [...prevQuantities];
        updatedQuantities[index] = newQuantity;
        return updatedQuantities;
      });
    }
  };

  // console.log(quantities);

  useEffect(() => {
    calculateTotal(cartItems, quantities);
  }, [quantities, cartItems, calculateTotal]);

  const handleRemove = (index) => {
    dispatch(removeItem(index)); // dispatch the action immediately
    const updatedCart = cartItems?.filter((_, i) => i !== index);
    setCartItems(updatedCart); // update local state immediately
    toast.success("Removed!!!");
  };

  return (
    <>
      <div className="cart min-h-[105vh] flex flex-col flex-wrap relative sm:mt-[25%]">
        <div className="route">
          <div className="route flex gap-2 absolute top-[1%] left-[6%]">
            <Link to="/">
              <span className="text-[#868686]">Home</span>
            </Link>
            <span className="text-[#868686]">/</span>

            <span>Cart</span>
          </div>
        </div>
        <div className="mt-6 w-[70vw] h-[auto] bg-white p-6 sm:w-full shadow-md ml-auto mr-auto">
          <div className="relative overflow-x-auto mx-auto ">
            <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subtotal
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    Remove
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 &&
                  cartItems.map((currElm, index) => (
                    <CartItem_Row
                      key={index}
                      item={currElm}
                      index={index}
                      quantity={quantities[index]}
                      handleChange={handleChange}
                      handleRemove={handleRemove}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          <div className="bottom-layer flex justify-between items-center py-3">
            <Link to="/category/menClothing">
              <button className="border-[1.4px] border-gray-400 bg-inherit p-2 px-3 w-[200px] font-semibold hover:bg-slate-200 rounded-sm">
                Return to Shop
              </button>
            </Link>
            <span>
              Total: <span>${total}</span>
            </span>
          </div>
          <div className="bottom flex flex-wrap justify-between w-full pt-5 items-start gap-5">
            <div className="left flex gap-5 sm:gap-1">
              <input
                type="text"
                className="py-2 pl-3 w-[260px] sm:w-[240px] sm:py-0 focus:outline-none border-2 border-black"
                placeholder="Coupon Code"
              />
              <button className="w-[150px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000] sm:text-sm sm:w-[100px] sm:p-2">
                Apply Coupon
              </button>
            </div>
            <div className="right w-[400px] p-5 border-2 border-black">
              <div className="cart-total">
                <h1 className="text-xl">Cart Total</h1>
                <div className="flex justify-between items-center border-b border-gray-300 py-5">
                  <span>Subtotal:</span>
                  <span>{total}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 py-5">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
                <div className="text-center">
                  <Link to="/checkout">
                    <button
                      className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
                      onClick={handleProcessCheckout}
                    >
                      Process Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart_Parent;
