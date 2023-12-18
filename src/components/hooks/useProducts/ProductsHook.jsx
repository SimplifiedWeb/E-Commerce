import { useEffect } from "react";
// import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../redux/slices/productSlice";
import { flash_sales_data } from "../../../Data/Flash_Sales";
import { computer_tech_data } from "../../../Data/Computer_And_Tech";
import { other_products_data } from "../../../Data/Other_Products";
import { our_products_data } from "../../../Data/Our_Products";

const ProductsHook = (category) => {
  const dispatch = useDispatch();
  const [store, setStore] = useState([]);
  const data = useSelector((state) => state.productSlice[category]);
  useEffect(() => {
    switch (category) {
      case "flash_sales_data":
        setStore(flash_sales_data);
        break;
      case "computer_tech_data":
        setStore(computer_tech_data);
        break;
      case "animals_pets_data":
        setStore();
        break;
      case "electronics_data":
        setStore();
        break;
      case "tools_equipment_data":
        setStore();
        break;
      case "home_interior_data":
        setStore();
        break;
      case "machinery_tools_data":
        setStore();
        break;
      case "men_clothing_data":
        setStore();
        break;
      case "other_products_data":
        setStore(other_products_data);
        break;
      case "smartPhones_data":
        setStore();
        break;
      case "sports_outdoors_data":
        setStore();
        break;
      case "women_clothing_data":
        setStore();
        break;
      case "our_products_data":
        setStore(our_products_data);
        break;
      default:
        setStore([]);
        break;
    }
  }, [category, data]);

  useEffect(() => {
    const fetchData = () => {
      dispatch(setProduct({ category, data: store }));
    };
    if (!data && store.length > 0) {
      fetchData();
    }
  }, [category, store, dispatch, data]);

  return {
    data,
  };
};

export default ProductsHook;
