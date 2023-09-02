import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productSuccess: (state, action) => {
      state.data = action.payload;
    },
    productLoading: (state, action) => {
      state.loading = action.payload;
    },

    productFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { productFailure, productLoading, productSuccess } =
  productSlice.actions;
export default productSlice.reducer;
