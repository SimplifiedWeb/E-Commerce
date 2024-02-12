import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import UseAddOrder from "../../hooks/useAddOrderOnFirebase/UseAddOrder";
import ConfirmationModel from "./ConfirmationModel";
import { useSelector } from "react-redux";
import Display_checkout_Product from "./Display_checkout_Product";
import Checkout_Total from "./Checkout_Total";
import { useDispatch } from "react-redux";
import { getBillingData } from "../../../redux/slices/checkoutSlice";
import toast from "react-hot-toast";
const Checkout_Product = React.memo(
  ({ cartItems, handleSubmit, isValid, validateForm, errors }) => {
    // state hooks
    const [isTotal, setIsTotal] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [firstAttempt, setFirstAttempt] = useState(true); // New state

    // User typed form data
    const typedInputData = useSelector(
      (state) => state.checkoutSlice.checkoutInputData
    );
    const fullData = cartItems.map((item) => {
      const updatedItem = { ...item, billData: typedInputData };
      return updatedItem;
    });
    // custom hook for add the user typed data inside the firebase
    const { data, addBillData } = UseAddOrder({ fullData });

    useEffect(() => {
      dispatch(getBillingData(data));
    }, [data, dispatch]);

    // calculating total quantity of items and overall total.
    useEffect(() => {
      const total = cartItems
        .map((item) => {
          return item.current_price * item.quantity;
        })
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);

      setIsTotal(total);
    }, [cartItems]);

    const handleRadioChange = (elm) => {
      setPaymentMethod(elm);
    };
    const handleCheckout = useCallback(
      async (e) => {
        e.preventDefault();
        if (!paymentMethod) {
          alert("Please select the payment method before checking out. ");
          return;
        }

        await validateForm();

        if (Object.keys(errors).length === 0 && errors !== null) {
          handleSubmit();

          setShowConfirmation(true);
          // Form is valid, proceed with submission
        } else if (Object.keys(errors).length > 0) {
          // Validation errors exist, display an error message
          alert("Please fill in all required fields correctly.");
        }

        setIsLoading(false);
      },
      [errors, paymentMethod, handleSubmit, validateForm]
    );
    const closeModal = () => {
      setShowConfirmation(false);
      setFirstAttempt(false);
    };

    const handleConfirmation = async () => {
      try {
        // Show loading state
        setIsLoading(true);
        // Wait for the addBillData to resolve
        const valid = await addBillData();

        // Hide the confirmation modal
        setIsLoading(false);
        setShowConfirmation(false);
        toast.success("Success!!!");

        // Navigate to the "/orders" page
        // <Navigate to="/orders" />;
        if (valid) {
          navigate("/orders");
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        // Handle any errors that occur during the confirmation process
        console.error("Error confirming order:", error);
        // Optionally, you can show an error message to the user
        setShowConfirmation(false);
      }
    };

    const inputStyle = {
      accentColor: "black",
      border: "2px solid black",
      width: "20px",
      height: "20px",
      cursor: "pointer",
    };
    if (isLoading) {
      return <h1>Loading....</h1>;
    }

    return (
      <div className="checkout-product w-[700px] p-5 shadow-md overflow-hidden">
        <div className="cart-total">
          <Display_checkout_Product cartItems={cartItems} />

          <Checkout_Total
            isTotal={isTotal}
            inputStyle={inputStyle}
            handleRadioChange={handleRadioChange}
          />

          <div className="left flex gap-5">
            <input
              type="text"
              className="pl-3 w-[250px] focus:outline-none border-2 border-black"
              placeholder="Coupon Code"
            />
            <button className="w-[150px] bg-[#db4444] text-white text-sm p-2 rounded-md hover:scale-[0.97] hover:bg-[#f00000]">
              Apply Coupon
            </button>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
              onClick={handleCheckout}
            >
              Check Credentials
            </button>
          </div>
          {showConfirmation && (
            <ConfirmationModel
              onClose={closeModal}
              onConfirm={handleConfirmation}
              details={{
                name: typedInputData?.firstName,
                email: typedInputData?.email,
                apartMent: typedInputData?.apartMent,
                city: typedInputData?.city,
              }}
              paymentMethod={paymentMethod}
              cartItems={cartItems}
              isTotal={isTotal}
              firstAttempt={firstAttempt}
            />
          )}
        </div>
      </div>
    );
  }
);

Checkout_Product.displayName = "Checkout_Product";

export default Checkout_Product;
