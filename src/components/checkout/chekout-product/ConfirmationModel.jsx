import React from "react";

const ConfirmationModel = ({
  onClose,
  onConfirm,
  details,
  isTotal,
  paymentMethod,
  cartItems,
  firstAttempt,
}) => {
  return (
    <>
      <div className="fixed inset-0 flex transition-all duration-200 items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div className="modal-content bg-white p-8 rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#db4444]">
            Order Confirmation
          </h2>

          {/* Order Summary */}
          {cartItems?.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-gray-800 font-medium">
                {item.product_name} x {item.quantity}
              </span>
              <span>${item.current_price * item.quantity}</span>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center border-b border-gray-300 py-3">
            <span className="text-gray-800">Total:</span>
            <span className="text-green-600">${isTotal}</span>
          </div>

          {/* Billing Details */}
          <div className="mt-4">
            <p className="text-gray-600">Billing Details:</p>
            <p className="text-gray-800">Name: {details?.name}</p>
            <p className="text-gray-800">Email: {details?.email}</p>
          </div>

          {/* Delivery Information */}
          <div className="mt-4">
            <p className="text-gray-600">Delivery Address:</p>
            <p className="text-gray-800">
              {details?.apartMent}, {details?.city}
            </p>
          </div>

          {/* Payment Information */}
          <div className="mt-4 flex gap-2 ">
            <p className="text-gray-600">Payment Method:</p>
            <p className="capitalize text-gray-800">{paymentMethod}</p>
          </div>

          {/* Thank You Message */}
          <p className="text-green-600 mt-4">
            Thank you for your order! We appreciate your business.
          </p>

          {/* Close Button */}
          <div className="flex gap-3 justify-evenly">
            <button
              className="mt-6 flex-1  bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
              onClick={onClose}
            >
              Go Back
            </button>
            {firstAttempt ? (
              <h1>Please Fill the Form Before Proceeding</h1>
            ) : (
              <button
                onClick={onConfirm}
                className="mt-6  bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
              >
                Proceed To Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModel;
