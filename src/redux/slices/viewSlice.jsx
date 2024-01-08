import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: false,
  grid: true,
};

const viewSlice = createSlice({
  name: "viewSlice",
  initialState,
  reducers: {
    handleViews: (state, action) => {
      const { list, grid } = action.payload;
      state.list = list;
      state.grid = grid;
      console.log(state.list, state.grid);
    },
  },
});

export const { handleViews } = viewSlice.actions;
export default viewSlice.reducer;
