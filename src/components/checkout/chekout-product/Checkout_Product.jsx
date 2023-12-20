const Checkout_Product = () => {
  return (
    <>
      <div className="checkout-product  w-[450px] p-5 shadow-md overflow-hidden">
        <div className="cart-total">
          <div className="w-full h-[200px] overflow-y-scroll   ">
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between p-3 items-center ">
              <div className="left flex gap-2 items-center">
                <img
                  src="/images/home_harry.png"
                  alt="harry"
                  className="w-[50px] h-[50px]"
                />
                <span>Harry Styles</span>
              </div>
              <div className="right ">
                <span className="">$400</span>
              </div>
            </div>
          </div>
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

          <div className="bank flex justify-between">
            <div className="flex items-center justify-center gap-2">
              <input
                type="radio"
                name="bank"
                style={{
                  accentColor: "black",
                  border: "2px solid black",
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                }}
              />
              <span>Bank</span>
            </div>
            <img src="/images/banks.png" alt="banks" className="w-[220px]" />
          </div>
          <div className="pb-4 flex gap-2">
            <input
              type="radio"
              name="bank"
              style={{
                accentColor: "black",
                border: "2px solid black",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            />
            <span>Cash on delivery</span>
          </div>
          <div className="left flex  gap-5  ">
            <input
              type="text"
              className=" pl-3 w-[250px]   focus:outline-none border-2 border-black"
              placeholder="Coupon Code"
            />
            <button className=" w-[150px] bg-[#db4444] text-white text-sm p-2  rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
              Apply Coupon
            </button>
          </div>
          <div className="mt-4">
            <button className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
              Process Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout_Product;
