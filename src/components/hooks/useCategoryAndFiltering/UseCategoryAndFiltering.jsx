import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  applyAllFilter,
  generateFilter,
} from "../../../redux/slices/filterSlice";

const UseCategoryAndFiltering = ({ store, selectedOptions }) => {
  const dispatch = useDispatch();
  // const [filter_Data, setFilter_Data] = useState([]);

  useEffect(() => {
    const handleFilterChange = () => {
      switch (selectedOptions?.category) {
        case "brand":
        case "size":
        case "discount":
        case "rating":
          dispatch(generateFilter(selectedOptions));
          break;
        default:
          console.log("something went wrong");
      }
    };

    handleFilterChange();
  }, [store, selectedOptions, dispatch]);
  useEffect(() => {
    dispatch(applyAllFilter(store));
  }, [dispatch, selectedOptions, store]);

  if (!selectedOptions) return true;

  return {
    // filter_Data,
  };
};

export default UseCategoryAndFiltering;
