import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/addToCart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
