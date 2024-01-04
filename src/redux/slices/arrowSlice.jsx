import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftSideController: null,
  rightSideController: null,
  hiddenOffsetValue: 0,
};

const arrowSlice = createSlice({
  name: "arrowSlice",
  initialState,
  reducers: {
    setLeftSideController: (state, action) => {
      state.leftSideController = action.payload;
    },
    setRightSideController: (state, action) => {
      state.rightSideController = action.payload;
    },
  },
});

// export const selectAllState = (state) => state.arrowSlice;

export const { setLeftSideController, setRightSideController } =
  arrowSlice.actions;
export default arrowSlice.reducer;
