import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "../features/addToCart/cartSlice";
import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
