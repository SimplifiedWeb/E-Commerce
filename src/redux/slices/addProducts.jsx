import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  stateChanges: false,
  myAddedProducts: [],
  deleteProducts: undefined,
};

const addProducts = createSlice({
  name: "addProducts",
  initialState,
  reducers: {
    addDataToFirebase: (state, action) => {
      state.product = action.payload;
      // console.log(state.product);
    },
    stateChangesForAdd: (state, action) => {
      state.stateChanges = action.payload;
    },
    gettingMyAddedProducts: (state, action) => {
      state.myAddedProducts = Array.isArray(state.myAddedProducts)
        ? state.myAddedProducts
        : [];
      const existingProductIds = new Set(
        state.myAddedProducts.map((product) => product.id)
      );
      const newProducts = action.payload.filter(
        (product) => !existingProductIds.has(product.id)
      );
      state.myAddedProducts = [...state.myAddedProducts, ...newProducts];
    },

    deleteProduct: (state, action) => {
      state.deleteProduct = action.payload;
      console.log(state.deleteProduct);
    },
  },
});

export const {
  addDataToFirebase,
  stateChangesForAdd,
  deleteProduct,
  gettingMyAddedProducts,
} = addProducts.actions;
export default addProducts.reducer;
