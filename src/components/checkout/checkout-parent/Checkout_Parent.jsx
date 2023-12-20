import Checkout_Form from "../checkout-form/Checkout_Form";
import Checkout_Product from "../chekout-product/Checkout_Product";

const Checkout_Parent = () => {
  return (
    <>
      <div className="checkout-parent min-h-[110vh] relative">
        <div className="route">
          <div className="route flex gap-2 absolute top-[4%] left-[0%]">
            <span className="text-[#868686]">Account</span>
            <span className="text-[#868686]">/</span>
            <span className="text-[#868686]">My Account</span>
            <span className="text-[#868686]">/</span>
            <span className="text-[#868686]">Product</span>
            <span className="text-[#868686]">/</span>
            <span className="text-[#868686]">View Cart</span>
            <span className="text-[#868686]">/</span>
            <span className="text-[black]">Checkout</span>
          </div>
        </div>
        <div className="left flex-1 absolute top-[10%] left-[5%]">
          <Checkout_Form />
        </div>
        <div className="right flex-1 absolute top-[13%] left-[55%] ">
          <Checkout_Product />
        </div>
      </div>
    </>
  );
};

export default Checkout_Parent;
