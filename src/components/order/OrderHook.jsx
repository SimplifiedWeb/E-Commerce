import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, writeBatch } from "firebase/firestore";
import { getInnerData } from "../helper";
import { db } from "../../../config/Firebase";
const OrderHook = ({ selectedCancelId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [refetch, setRefetch] = useState(false);

  // This function for Getting the Bill Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const billingDataCollection = collection(db, "billingData");

        const querySnapshot = await getDocs(billingDataCollection);
        const billingDataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(billingDataArray);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (refetch) {
      fetchData();
      // Reset refetch state to false after fetching data
      setRefetch(false);
    }
  }, [refetch]);

  // This function is for getting the inner Data from the complex flattened array
  useEffect(() => {
    const convertedData = getInnerData(data);
    setData(convertedData);
  }, []); // Empty dependency array to run the effect only once

  // This function for Deleting the Bill Data and adding it on the cancel collection.
  useEffect(() => {
    const moveCancelledDataToCancellationCollection = async () => {
      const cancellation = collection(db, "cancelOrders");
      const billingData = collection(db, "billingData");

      try {
        setLoading(true);
        const querySnapShot = await getDocs(billingData);

        // Step 2: Prepare batched writes to delete the item from each document
        const batch = writeBatch(db);

        querySnapShot.forEach((doc) => {
          const newData = doc
            .data()
            .productData.filter((item) => item.id !== selectedCancelId);
          batch.update(doc.ref, { productData: newData });
        });
        setRefetch(true);

        // Step 3: Execute the batched writes
        await batch.commit();

        // Step 4: Add the deleted data to the cancellation collection
        await addDoc(cancellation, {
          deletedItemId: selectedCancelId,
          cancelTime: Date.now(),
        });

        console.log(
          "Data deletion and addition to cancellation collection successful"
        );
      } catch (error) {
        console.error("Error:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    moveCancelledDataToCancellationCollection();
  }, [selectedCancelId]);

  return { data, error, loading };
};

export default OrderHook;
