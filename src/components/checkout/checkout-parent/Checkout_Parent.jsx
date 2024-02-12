import { useState } from "react";
import useFormikAndYup from "../../hooks/useCustomFormikAndYup/useFormikAndYup";
import Checkout_Form from "../checkout-form/Checkout_Form";
import Checkout_Product from "../chekout-product/Checkout_Product";
import React from "react";
import { useDispatch } from "react-redux";
import { getCheckoutInputData } from "../../../redux/slices/checkoutSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Checkout_Parent = React.memo(() => {
  // const [billingData, setBillingData] = useState();
  // const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cart-items")) || []
  );

  const initialValues = {
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartMent: "",
    city: "",
    phone: "",
    email: "",
  };

  const onSubmit = (values) => {
    dispatch(getCheckoutInputData(values));
    toast.success("Submit Success!!!");

    // setBillingData(values);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    // validateForm,
    handleChange,
    handleReset,
    handleSubmit,
    isValid,
    validateForm,
  } = useFormikAndYup(initialValues, onSubmit, "checkout");

  return (
    <>
      <div className="checkout-parent min-h-[900px] relative">
        <div className="route">
          <div className="route flex gap-2 absolute top-[4%] left-[0%]">
            <Link to="/">
              <span className="text-[#868686]">Home</span>
            </Link>
            <span className="text-[#868686]">/</span>
            <Link to="/cart">
              <span className="text-[#868686]">Cart</span>
            </Link>
            <span className="text-[#868686]">/</span>
            <Link to="/checkout">
              <span className="text-[black]">Checkout</span>
            </Link>
          </div>
        </div>
        <div className="left flex-1 absolute top-[10%] left-[5%]">
          <Checkout_Form
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="right flex-2 absolute top-[5%] left-[48%] ">
          <Checkout_Product
            cartItems={cartItems}
            handleSubmit={handleSubmit}
            isValid={isValid}
            validateForm={validateForm}
            errors={errors}
            // billingData={billingData}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
});
Checkout_Parent.displayName = "Checkout_Parent";

export default Checkout_Parent;
