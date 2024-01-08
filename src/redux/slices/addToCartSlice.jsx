import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCartStore: [],
};

const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    storeAddToCart: (state, action) => {
      const itemToAdd = action.payload;

      // Check if the item is not already in the cart
      if (!state.addToCartStore.includes(itemToAdd)) {
        // Update the state by creating a new array with the new item
        state.addToCartStore = [...state.addToCartStore, itemToAdd];
      }

      // You can keep your localStorage logic here if needed
      // localStorage.setItem("cart", JSON.stringify(state.addToCartStore));
    },
  },
});

export const { storeAddToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
