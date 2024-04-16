import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAscending,
  setDescending,
  setHighToLow,
  setLowToHigh,
} from "../../../redux/slices/sortingSlice";

const UseSorting = ({ data }) => {
  const dispatch = useDispatch();
  //   const [sorted, setSorting] = useState([]);
  const [sortingName, setSortingName] = useState("");
  // const sortedData = useSelector((state) => state.sortingSlice.sort_store);

  useEffect(() => {
    switch (sortingName) {
      case "ascending":
        console.log("this is ascending");
        dispatch(setAscending(data));
        // setSorting(sortedData);
        break;
      case "descending":
        console.log("this is descending");
        dispatch(setDescending(data));
        // setSorting(sortedData);

        break;
      case "lowPrice":
        console.log("this is lowPrice");
        console.log(data);
        dispatch(setLowToHigh(data));
        // setSorting(sortedData);

        break;
      case "highPrice":
        console.log("this is highPrice");
        dispatch(setHighToLow(data));
        // setSorting(sortedData);
        break;

      default:
        break;
    }
  }, [data, sortingName, dispatch]);

  const handleSort = useCallback(
    (elementName) => {
      setSortingName(elementName);
    },
    [setSortingName]
  );

  return { handleSort };
};

export default UseSorting;
