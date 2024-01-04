import { combineReducers } from "@reduxjs/toolkit";
import allProducts from "../slices/allProducts";
import arrowSlice from "../slices/arrowSlice";
import sortingSlice from "../slices/sortingSlice";
// import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  // productSlice: productSlice,
  allProducts: allProducts,
  arrowSlice: arrowSlice,
  sortingSlice: sortingSlice,
});
export default rootReducer;
