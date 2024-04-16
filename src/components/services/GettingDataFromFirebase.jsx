import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/Firebase"; // Import your Firebase configuration
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/slices/allProducts";
const GettingDataFromFirebase = () => {
  const [data, setData] = useState(null);
  const stateChanges = useSelector((state) => state.addProducts.stateChanges);
  const [isFetchedData, setIsFetchedData] = useState(
    localStorage.getItem("apiFetched") === "true" || false
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isFetchedData || stateChanges) {
          const productCollection = collection(db, "products");
          const querySnapshot = await getDocs(productCollection);

          if (querySnapshot.size > 0) {
            // Map through the documents in the snapshot and create an array of data
            const newData = querySnapshot.docs.map((doc) => ({
              [doc.id]: doc.data().data,
            }));

            setData(newData);

            // Use the callback function to get the updated state value
            dispatch(getAllProduct(newData));
            setIsFetchedData((prevIsFetchedData) => {
              if (!prevIsFetchedData) {
                localStorage.setItem("apiFetched", "true");
              }
              return true;
            });
          } else {
            console.log("No documents found in the 'product' collection");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Optionally return a cleanup function
    return () => {};
  }, [isFetchedData, stateChanges, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Render your component with the fetched data
  return <div>{/* Render your component using the 'data' state */}</div>;
};

export default GettingDataFromFirebase;
