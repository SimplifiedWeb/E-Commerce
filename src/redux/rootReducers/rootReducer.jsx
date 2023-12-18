import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";

const rootReducer = combineReducers({
  productSlice: productSlice,
});
export default rootReducer;
