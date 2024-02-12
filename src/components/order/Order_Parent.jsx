import React, { useState, useEffect } from "react";

import Loading from "../common/spinner/Loading";
import { getProductData } from "../helper";
import OrderHook from "./OrderHook";

const Order_Parent = () => {
  const [cancellingOrder, setCancellingOrder] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelItemId, setCancelItemId] = useState(null);
  const [newConvertedData, setNewData] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const initialValue = {
    productName: true,
    shippingAddress: false,
    UserAddress: false,
  };
  const [show, setShow] = useState(initialValue);
  const smallScreen = window.innerWidth <= 786;
  const { data, error, loading } = OrderHook({
    selectedCancelId: cancelItemId,
  });

  const handleModel = () => {
    setShowModel(!showModel);
  };

  const closeModal = () => {
    setShowModel(false);
  };

  const handleCancelOrder = (orderId) => {
    setShowModel(true);
    setSelectedOrder(orderId);
  };

  const handleConfirmCancelOrder = async () => {
    setCancelItemId(selectedOrder);
    setShowModel(false);
  };

  const handleShow = (elm) => {
    setShow((prev) => ({
      productName: false,
      shippingAddress: false,
      UserAddress: false,
      [elm]: true,
    }));
  };

  useEffect(() => {
    const newData = getProductData(data);
    setNewData(newData);
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error || !data) {
    return <p>Error: Failed to fetch data</p>;
  }

  return (
    <div className="container mx-auto min-h-[100vh] mt-3 flex-col lg:flex-row bg-white rounded-md shadow-md  sm:mt-[28%]">
      <div className="flex flex-col flex-wrap mb-4">
        <h1 className="text-2xl font-semibold  text-gray-800 sm:mb-[2%] sm:p-2 ">
          Your Order
        </h1>

        {newConvertedData?.length === 0 ? (
          <p className="text-gray-600">
            Your cart is empty. Add items to place an order.
          </p>
        ) : (
          <>
            {newConvertedData?.map((items, index) => {
              return (
                <div className="flex  sm:flex-col " key={index}>
                  <div className="bg-gray-100 p-4 h-[250px] flex  sm:flex-col sm:h-auto  sm:p-2    w-full">
                    <div className="h-[200px] w-full sm:w-[165px] sm:h-auto mb-4 sm:flex sm:gap-3">
                      <img
                        src={items?.image}
                        alt={items?.product_name}
                        className="h-full w-full object-contain sm:w-[300px] sm:object-contain sm:mix-blend-multiply"
                      />
                      {smallScreen && (
                        <div className=" sm:mx-3 sm:pb-3 sm:shadow-none sm:border-none sm:rounded-none ">
                          <h2 className="text-xl font-semibold mb-2 text-gray-800 sm:pb-2">
                            Shipping Progress
                          </h2>
                          <div className="flex items-center space-x-2">
                            <div
                              className={` flex-1 w-full h-2 bg-blue-500 ${
                                currentStep >= 1 ? "bg-blue-500" : "bg-gray-300"
                              }`}
                            ></div>
                            <div
                              className={` flex-1 w-full h-2 bg-blue-500 ${
                                currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"
                              }`}
                            ></div>
                            <div
                              className={`flex-1 w-full h-2 bg-blue-500 ${
                                currentStep === 3
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                              }`}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2">
                            <p className="text-gray-600">Order Placed</p>
                            <p className="text-gray-600">Shipped</p>
                            <p className="text-gray-600">Delivered</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {smallScreen ? (
                      <div className="flex text-sm ">
                        <div className="productName">
                          <button
                            className={`px-2 py-1  ${
                              show.productName && "bg-white "
                            }`}
                            onClick={() => handleShow("productName")}
                          >
                            Product Name
                          </button>
                        </div>
                        <div className="shippingAddress">
                          <button
                            className={`px-2 py-1     ${
                              show.shippingAddress && "bg-white "
                            }`}
                            onClick={() => handleShow("shippingAddress")}
                          >
                            Shipping Address
                          </button>
                        </div>
                        <div className="userAddress">
                          <button
                            className={`px-2 py-1  ${
                              show.UserAddress && "bg-white "
                            }`}
                            onClick={() => handleShow("UserAddress")}
                          >
                            User Address
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {smallScreen && show.productName && (
                      <div className="min-h-[120px] w-full mb-4 p-4   bg-white  border-t-0  border-r-none ">
                        <h2 className="text-lg font-bold mb-2">Product Name</h2>
                        <p className="text-sm">
                          {items?.description?.slice(0, 150)}...
                        </p>
                      </div>
                    )}
                    {smallScreen && show.shippingAddress && (
                      <div className="min-h-[120px] w-full mb-4 p-4 bg-white   border-r-none ">
                        <h2 className="text-lg font-bold mb-2">
                          Shipping Address
                        </h2>
                        <p className="text-sm">{items?.shipping_address}</p>
                      </div>
                    )}
                    {smallScreen && show.UserAddress && (
                      <div className="min-h-[120px] w-full mb-4 p-4 bg-white   border-r-none ">
                        <h2 className="text-lg font-bold mb-2">User Address</h2>
                        <p className="text-sm">
                          {items?.billData?.apartMent}
                          {items?.billData?.streetAddress}
                          {items?.billData?.city}
                        </p>
                      </div>
                    )}
                    <div className="h-[200px] w-full mb-4 p-4   bg-white border border-gray-200 shadow-sm border-r-none sm:hidden md:hidden">
                      <h2 className="text-lg font-bold mb-2">Product Name</h2>
                      <p className="text-sm">
                        {items?.description?.slice(0, 150)}...
                      </p>
                    </div>
                    <div className="h-[200px] w-full mb-4 p-4 bg-white border border-gray-200 shadow-sm border-r-none sm:hidden md:hidden">
                      <h2 className="text-lg font-bold mb-2">
                        Shipping Address
                      </h2>
                      <p className="text-sm">{items?.shipping_address}</p>
                    </div>
                    <div className="h-[200px] w-full mb-4 p-4 bg-white border border-gray-200 shadow-sm border-r-none sm:hidden md:hidden">
                      <h2 className="text-lg font-bold mb-2">User Address</h2>
                      <p className="text-sm">
                        {items?.billData?.apartMent}
                        {items?.billData?.streetAddress}
                        {items?.billData?.city}
                      </p>
                    </div>
                    <div className="h-[200px] w-full p-4 sm:text-sm sm:p-3 sm:h-auto sm:mt-[-8px] sm:mb-3 bg-white border border-gray-200 shadow-sm">
                      <h2 className="text-lg font-bold mb-2">Order Details</h2>
                      <table className="table-auto w-full">
                        <thead>
                          <tr>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Quantity</th>
                            <th className="border px-4 py-2">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 sm:text-center">
                              {items?.current_price}
                            </td>
                            <td className="border px-4 py-2 sm:text-center">
                              {items?.quantity}
                            </td>
                            <td className="border px-4 py-2 sm:text-center">
                              {items?.current_price * items?.quantity}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        className="mt-3 ml-3 w-[200px] bg-[#db4444] sm:w-[100px] sm:float-right text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000]"
                        onClick={() => handleCancelOrder(items?.id)}
                      >
                        Cancel Order
                      </button>
                    </div>
                    {smallScreen && (
                      <div className=" w-full border mt-3 mb-3 border-b-black"></div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {showModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="relative p-8 mx-auto max-w-sm bg-white rounded-md shadow-lg">
            <button
              className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={handleModel}
            >
              &times;
            </button>
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to cancel this order?
            </p>
            <div className="flex justify-end">
              {cancellingOrder ? (
                <div className="loader inline-block h-[300px]"></div> // Loading spinner while cancellingOrder is true
              ) : (
                <>
                  <button
                    className="px-4 py-2 text-sm text-white bg-gray-500 rounded-md mr-2 hover:bg-gray-600 focus:outline-none"
                    onClick={closeModal}
                  >
                    No
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                    onClick={handleConfirmCancelOrder}
                  >
                    Yes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 sm:mx-2 sm:my-3 sm:pb-3 sm:shadow-none sm:border-none sm:rounded-none ">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 sm:pb-2">
          Shipping Progress
        </h2>
        <div className="flex items-center space-x-4">
          <div
            className={` flex-1 w-1/4 h-2 bg-blue-500 ${
              currentStep >= 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={` flex-1 w-1/4 h-2 bg-blue-500 ${
              currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`flex-1 w-1/4 h-2 bg-blue-500 ${
              currentStep === 3 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">Order Placed</p>
          <p className="text-gray-600">Shipped</p>
          <p className="text-gray-600">Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Order_Parent;
