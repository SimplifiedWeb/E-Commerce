import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../config/Firebase";
import { useEffect } from "react";
import { useCallback } from "react";
import { getBillingData } from "../../../redux/slices/checkoutSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const UseAddOrder = ({ fullData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);

  // Reference to the "billingData" collection
  const billingDataCollection = collection(db, "billingData");

  const addBillData = async () => {
    try {
      setIsLoading(true);

      // Map each item in fullData to ensure it's an object
      const dataObject = {
        productData: fullData.map((item) => ({ ...item })),
      };

      // Add document to the "billingData" collection
      await addDoc(billingDataCollection, dataObject);
      setCheck(true);
      setIsLoading(false);
      navigate("/orders");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getBillData = useCallback(async () => {
    try {
      setIsLoading(true);

      // Get all documents from the "billingData" collection
      const querySnapshot = await getDocs(billingDataCollection);

      // Extract data from the documents
      const billingDataArray = querySnapshot.docs.map((doc) => doc.data());

      setIsLoading(false);
      setData(billingDataArray);
      dispatch(getBillingData(billingDataArray));
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, [billingDataCollection, dispatch]);

  useEffect(() => {
    getBillData();
  }, [check]);

  return {
    data,
    loading,
    error,
    check,
    addBillData,
    getBillData,
  };
};

export default UseAddOrder;
