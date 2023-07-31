import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default addToCartSlice.reducer;
export const { addToCart } = addToCartSlice.actions;
