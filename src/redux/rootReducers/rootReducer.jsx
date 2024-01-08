import { combineReducers } from "@reduxjs/toolkit";
import addToCartSlice from "../slices/addToCartSlice";
import allProducts from "../slices/allProducts";
import arrowSlice from "../slices/arrowSlice";
import filterSlice from "../slices/filterSlice";
import sortingSlice from "../slices/sortingSlice";
import viewSlice from "../slices/viewSlice";
// import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  // productSlice: productSlice,
  allProducts: allProducts,
  arrowSlice: arrowSlice,
  sortingSlice: sortingSlice,
  filterSlice: filterSlice,
  viewSlice: viewSlice,
  addToCartSlice: addToCartSlice,
});
export default rootReducer;
