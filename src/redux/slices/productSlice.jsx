import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, actions) => {
      const { category, data } = actions.payload;
      state[category] = data;
    },

    // All the admin Parts
    // setUpdateProduct: (state, actions) => {
    //   const { category, data, dataToAdd } = actions.payload;
    //   state[category] += data;
    // },
    // setDeleteProduct: (state, actions) => {
    //   const { category, data, id } = actions.payload;
    //   state[category].filter((_, id) => id !== id);
    // },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
