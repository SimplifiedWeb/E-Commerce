import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, actions) => {
      const { category, data } = actions.payload;
      state[category] = data;
      console.log(state[category]);
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
