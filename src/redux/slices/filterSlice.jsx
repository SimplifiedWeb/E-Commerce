import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currFilter: [],
  allFilterOptions: [],
  priceRange: [],
  filterRange: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    generateFilter: (state, action) => {
      const selectedValue = action.payload?.selectedName;

      // Ensure state.brand is always treated as an array
      state.allFilterOptions = Array.isArray(state.allFilterOptions)
        ? state.allFilterOptions
        : [];

      // Check if selectedValue is truthy
      if (selectedValue) {
        // If selectedValue is already present, remove it
        if (state.allFilterOptions.includes(selectedValue)) {
          state.allFilterOptions = state.allFilterOptions.filter(
            (value) => value !== selectedValue
          );
        } else {
          // If selectedValue is not present, add it
          state.allFilterOptions = [...state.allFilterOptions, selectedValue];
        }
      }
    },

    filterPriceRange: (state, action) => {
      const { range, store } = action.payload;

      state.priceRange = Array.isArray(state.priceRange)
        ? state.priceRange
        : [];
      state.filterRange = Array.isArray(state.filterRange)
        ? state.filterRange
        : [];

      if (range && Array.isArray(range) && range.length === 2) {
        state.priceRange = [...state.priceRange, ...range];
        // Filter products based on the selected price range
        state.filterRange = store.filter((currElm) => {
          return (
            state.priceRange[0] <= currElm.current_price &&
            currElm.current_price <= state.priceRange[1]
          );
        });
        state.priceRange = [];
      } else {
        // Handle the case where range is not a valid array (e.g., show all products)
        state.priceRange = [];
        state.filterRange = store;

        console.log("Invalid or missing price range");
      }
    },

    applyAllFilter: (state, action) => {
      state.allFilterOptions = Array.isArray(state.allFilterOptions)
        ? state.allFilterOptions
        : [];
      // const selectedOptions = state.allFilterOptions;
      const selectedOptions = state.allFilterOptions;
      // console.log("applyAll ", JSON.parse(JSON.stringify(selectedOptions)));

      const selectedCategoryStore = action.payload;
      if (!selectedOptions) return false;
      state.currFilter = selectedCategoryStore?.filter((item) =>
        selectedOptions?.some((option) => {
          const isString = (value) => typeof value === "string";
          const toLowerCaseAndIncludes = (value, query) =>
            isString(value) &&
            isString(query) &&
            value.toLowerCase().includes(query.toLowerCase());

          return (
            toLowerCaseAndIncludes(item.brand, option) ||
            toLowerCaseAndIncludes(item.size, option) ||
            (typeof item.discount === "number" &&
              selectedOptions.includes(item.discount)) ||
            (typeof item.rating === "number" &&
              selectedOptions.includes(item.rating))
          );
        })
      );
    },

    resetFilters: (state) => {
      // Reset all filter-related states to their initial values
      state.currFilter = initialState.currFilter;
      state.allFilterOptions = initialState.allFilterOptions;
      state.priceRange = initialState.priceRange;
      state.filterRange = initialState.filterRange;
    },
  },
});

export const {
  generateFilter,
  applyAllFilter,
  filterPriceRange,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
