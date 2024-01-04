import { createSlice } from "@reduxjs/toolkit";
import { createTransform } from "redux-persist";
const initialState = {
  store: [],
  randomData: [],
  filterData: [],
  sortingData: [],
};

export const storeTransform = createTransform(
  (inboundState) => ({ store: inboundState.store }),
  (outboundState) => outboundState

  // for entire state
  // (inboundState) => ({ ...inboundState })
);

const allProduct = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.store = action.payload;
    },

    getRandomData: (state) => {
      // Use map to create a new array with the random items
      state.randomData = state.store.map((item) => {
        const category_name = Object.keys(item)[0];
        const category_data = item[category_name];

        if (category_data && category_data.length > 0) {
          const randomIndex = Math.floor(Math.random() * category_data.length);
          return category_data[randomIndex];
        }

        return null; // or some default value if category_data is empty
      });
    },
  },
});

export const { getAllProduct, getRandomData } = allProduct.actions;
export default allProduct.reducer;
