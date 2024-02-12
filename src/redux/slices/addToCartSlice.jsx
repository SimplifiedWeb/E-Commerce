import { createSlice } from "@reduxjs/toolkit";
import {
  removeElementsFromLocalStorage,
  storingDataOnLocalStorage,
} from "../../components/utils";

const initialState = {
  addToCartStore: JSON.parse(localStorage.getItem("cart-items")) || [],
};

const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    storeAddToCart: (state, action) => {
      const newItem = action.payload;

      // Pass the entire state to the utility function
      storingDataOnLocalStorage(state, "cart-items", newItem, "addToCartStore");

      // Get the updated cart from local storage
      const updatedCart = JSON.parse(localStorage.getItem("cart-items")) || [];

      // Update state immutably
      return {
        ...state,
        addToCartStore: updatedCart,
      };
    },

    removeItem: (state, action) => {
      const removeId = action.payload;

      removeElementsFromLocalStorage(
        state,
        "cart-items",
        removeId,
        "addToCartStore"
      );
      // Make sure addToCartStore is an array

      const updatedCart = JSON.parse(localStorage.getItem("cart-items")) || [];

      // Update state immutably
      return {
        ...state,
        addToCartStore: updatedCart,
      };
      // state.addToCartStore = Array.isArray(state.addToCartStore)
      //   ? state.addToCartStore
      //   : [];

      // // Filter out the item to be removed
      // const updatedCart = state.addToCartStore.filter(
      //   (_, index) => index !== removeId
      // );

      // // Update state and localStorage
      // state.addToCartStore = updatedCart;
      // localStorage.setItem("cart-items", JSON.stringify(updatedCart));
    },
  },
});

export const { storeAddToCart, removeItem } = addToCartSlice.actions;
export default addToCartSlice.reducer;
