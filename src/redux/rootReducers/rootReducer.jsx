import { combineReducers } from "@reduxjs/toolkit";
import addProducts from "../slices/addProducts";
import addToCartSlice from "../slices/addToCartSlice";
import addWishListSlice from "../slices/addWishListSlice";
import allProducts from "../slices/allProducts";
import arrowSlice from "../slices/arrowSlice";
import checkoutSlice from "../slices/checkoutSlice";
import filterSlice from "../slices/filterSlice";
import sortingSlice from "../slices/sortingSlice";
import viewSlice from "../slices/viewSlice";
// import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  allProducts: allProducts,
  arrowSlice: arrowSlice,
  sortingSlice: sortingSlice,
  filterSlice: filterSlice,
  viewSlice: viewSlice,
  addToCartSlice: addToCartSlice,
  addWishListSlice: addWishListSlice,
  checkoutSlice: checkoutSlice,
  addProducts: addProducts,
});
export default rootReducer;
