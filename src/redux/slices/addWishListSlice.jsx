import { createSlice } from "@reduxjs/toolkit";
import {
  removeElementsFromLocalStorage,
  storingDataOnLocalStorage,
} from "../../components/utils";

const initialState = {
  storeAddWishList: JSON.parse(localStorage.getItem("wishList-items")) || [],
};

const addWishListSlice = createSlice({
  name: "addWishListSlice",
  initialState,
  reducers: {
    addOnWishList: (state, action) => {
      const newItem = action.payload;

      storingDataOnLocalStorage(
        state,
        "wishList-items",
        newItem,
        "storeAddWishList"
      );

      const updatedWishList =
        JSON.parse(localStorage.getItem("wishList-items")) || [];

      return {
        ...state,
        storeAddWishList: updatedWishList,
      };
    },
    removeWishList: (state, action) => {
      const removeId = action.payload;

      removeElementsFromLocalStorage(
        state,
        "wishList-items",
        removeId,
        "storeAddWishList"
      );

      const updatedWishList =
        JSON.parse(localStorage.getItem("wishList-items")) || [];
      return {
        ...state,
        storeAddWishList: updatedWishList,
      };
    },
  },
});

export const { addOnWishList, removeWishList } = addWishListSlice.actions;
export default addWishListSlice.reducer;
