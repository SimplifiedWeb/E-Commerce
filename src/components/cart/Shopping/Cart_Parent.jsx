import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
const Cart_Parent = () => {
  return (
    <>
      <div className="cart min-h-[100vh] flex flex-col  flex-wrap relative">
        <div className="route">
          <div className="route flex gap-2 absolute top-[4%] left-[6%]">
            <span className="text-[#868686]">Home</span>
            <span className="text-[#868686]">/</span>
            <span>Cart</span>
          </div>
        </div>
        <div className="absolute top-12 left-7 w-[70vw] bg-white p-6 shadow-md">
          <div className="cart-heading flex justify-between items-center font-[600] mb-4 ">
            <div className="product flex-1 text-center">Product</div>
            <div className="price flex-1 text-center">Price</div>
            <div className="quantity flex-1 text-center">Quantity</div>
            <div className="subtotal flex-1.5 text-center">Subtotal</div>
          </div>
          <div className="cart-items">
            <div className="cart-item flex justify-between items-center border-b border-gray-300 py-5">
              <div className="product flex-1 flex justify-center items-center gap-4 text-center relative ">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[60px] h-[60px] "
                />
                <span>Harry styles</span>
                <button className="absolute top-[-19%]  left-[21%]">
                  <HighlightOffOutlinedIcon />
                </button>
              </div>
              <div className="price flex-1 text-center">$20.00</div>

              <div className="quantity flex-1 text-center">
                <input
                  type="number"
                  className="w-[60px] text-center p-2 border-[1.4px] border-gray-400"
                  min="1"
                  max="3"
                />
              </div>

              <div className="subtotal flex-1.5 text-center">$40.00</div>
            </div>
            <div className="cart-item flex justify-between items-center border-b border-gray-300 py-5">
              <div className="product flex-1 flex justify-center items-center gap-4 text-center relative ">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[60px] h-[60px] "
                />
                <span>Harry styles</span>
                <button className="absolute top-[-19%]  left-[21%]">
                  <HighlightOffOutlinedIcon />
                </button>
              </div>
              <div className="price flex-1 text-center">$20.00</div>

              <div className="quantity flex-1 text-center">
                <input
                  type="number"
                  className="w-[60px] text-center p-2 border-[1.4px] border-gray-400"
                  min="1"
                  max="3"
                />
              </div>

              <div className="subtotal flex-1.5 text-center">$40.00</div>
            </div>

            {/* Add more cart items as needed */}
          </div>
          <div className="bottom-layer flex justify-between items-center  py-3">
            <button className="border-[1.4px] border-gray-400 bg-inherit p-2 px-3 w-[200px] font-semibold hover:bg-slate-200 rounded-sm">
              Return to Shop
            </button>
            <span>
              Total: <span>$800</span>
            </span>
          </div>
          <div className="bottom flex flex-wrap justify-between w-full pt-5 items-start gap-5">
            <div className="left flex gap-5  ">
              <input
                type="text"
                className="py-2 pl-3 w-[260px]  focus:outline-none border-2 border-black"
                placeholder="Coupon Code"
              />
              <button className=" w-[150px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
                Apply Coupon
              </button>
            </div>
            <div className="right  w-[400px] p-5 border-2 border-black">
              <div className="cart-total">
                <h1 className="text-xl">Cart Total</h1>
                <div className="flex justify-between items-center border-b border-gray-300 py-5">
                  <span>Subtotal:</span>
                  <span>$800</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 py-5">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center  py-5">
                  <span>Total:</span>
                  <span>$800</span>
                </div>
                <div className="text-center">
                  <button className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
                    Process Checkout
                  </button>
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
