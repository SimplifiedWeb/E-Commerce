import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billDetails: [],
  checkoutInputData: [],
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    getBillingData: (state, action) => {
      state.billDetails = Array.isArray(state.billDetails)
        ? state.billDetails
        : [];

      state.billDetails = [...state.billDetails, action.payload];
    },
    getCheckoutInputData: (state, action) => {
      state.checkoutInputData = action.payload;
    },
  },
});

export const { getBillingData, getCheckoutInputData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
