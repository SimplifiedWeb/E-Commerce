import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { storeTransform } from "./slices/allProducts";
// import { cartTransform } from "./slices/addToCartSlice";

// Configure Redux Persist
const persistConfig = {
  key: "root", // key for the localStorage entry
  storage, // use the specified storage engine
  transforms: [storeTransform], // only persist the specified reducers

  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignore specific action types
      ignoredActions: ["persist/PERSIST"],
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
