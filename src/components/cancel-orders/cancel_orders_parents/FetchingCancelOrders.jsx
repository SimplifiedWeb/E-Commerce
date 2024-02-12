import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../../config/Firebase"; // Import your Firebase configuration
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../helper";
import { setCancelOrders } from "../../../redux/slices/allProducts";

const FetchingCancelOrders = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.allProducts.store);
  console.log(allData);

  const allTheData = getAllData(allData);
  console.log(allTheData);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const cancelOrdersSnapshot = await getDocs(
          collection(db, "cancelOrders")
        );

        const cancelOrdersData = [];
        for (const doc of cancelOrdersSnapshot.docs) {
          const cancelOrder = doc.data();
          const productId = cancelOrder.deletedItemId;

          if (!productId && productId === null) {
            // Skip entries with null IDs
            continue;
          }

          // Find the product with matching ID in filteredData

          const matchingProduct = allTheData?.find((product) => {
            if (product.id && product.id !== null) {
              return product.id === productId;
            }
          });
          if (matchingProduct) {
            // Push the matching product to cancelOrdersData array
            cancelOrdersData.push(matchingProduct);
          }
        }

        // Set the state with the filtered cancel orders data
        setData(cancelOrdersData);
        dispatch(setCancelOrders(cancelOrdersData));
      } catch (error) {
        console.error("Error fetching cancel orders:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [allData]); // Include allData in the dependency array to trigger the effect when allData changes

  return { data, isLoading, isError, isLoading };
};

export default FetchingCancelOrders;
