import { createSlice } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";
const initialState = {
  store: [],
  randomData: [],
  paginatedStore: [],
  storeSortedPaginatedData: [],
  cancelOrders: [],
};

export const storeTransform = createTransform(
  (inboundState) => ({ store: inboundState.store }),
  (outboundState) => outboundState
);

const allProduct = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.store = action.payload;
    },
    storePaginatedData: (state, action) => {
      state.paginatedStore = action.payload;
    },
    storeSortedPaginatedData: (state, action) => {
      state.storeSortedPaginatedData = action.payload;
    },
    getRandomData: (state) => {
      state.randomData = Array.isArray(state.store)
        ? state.store.map((item) => {
            const category_name = Object.keys(item)[0];
            const category_data = item[category_name];

            if (category_data && category_data.length > 0) {
              const randomIndex = Math.floor(
                Math.random() * category_data.length
              );
              return category_data[randomIndex];
            }

            return null; // or some default value if category_data is empty
          })
        : [];
    },

    setCancelOrders: (state, action) => {
      state.cancelOrders = action.payload;
    },
  },
});

export const {
  getAllProduct,
  getRandomData,
  storePaginatedData,
  storeSortedPaginatedData,
  setCancelOrders,
} = allProduct.actions;
export default allProduct.reducer;
