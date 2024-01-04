import { useEffect } from "react";
// import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomData } from "../../../redux/slices/allProducts";

import { getCategoryData } from "../../helper";

const ProductsHook = (category) => {
  const dispatch = useDispatch();
  const [getStore, setStore] = useState([]);

  const dataStore = useSelector((state) => state.allProducts.store);
  const randomProducts = useSelector((state) => state.allProducts.randomData);
  // console.log(randomProducts)
  useEffect(() => {
    dispatch(getRandomData());
  }, [dispatch]);

  useEffect(() => {
    const returnedData = getCategoryData(dataStore, category);
    if (category === "randomProducts") {
      setStore(randomProducts);
    } else {
      setStore(returnedData);
    }
  }, [category, dataStore, dispatch, randomProducts]);

  return {
    getStore,
  };
};

export default ProductsHook;
