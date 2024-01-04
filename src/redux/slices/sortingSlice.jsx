import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort_store: [],
};
const sortingSlice = createSlice({
  name: "sortingSlice",
  initialState,
  reducers: {
    setAscending: (state, action) => {
      const data = action.payload;
      const asc = [...data].sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
      state.sort_store = asc;
    },

    setDescending: (state, action) => {
      const data = action.payload;
      const desc = [...data].sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
      state.sort_store = desc;
    },
    setLowToHigh: (state, action) => {
      const data = action.payload;
      const low = [...data].sort((a, b) => a.current_price - b.current_price);
      state.sort_store = low;
    },
    setHighToLow: (state, action) => {
      const data = action.payload;
      const high = [...data].sort((a, b) => b.current_price - a.current_price);
      state.sort_store = high;
    },
  },
});

export const { setAscending, setDescending, setHighToLow, setLowToHigh } =
  sortingSlice.actions;
export default sortingSlice.reducer;
