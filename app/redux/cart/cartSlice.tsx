import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartSuccess: (state, action) => {
      state.data = action.payload;
    },
    cartLoading: (state, action) => {
      state.loading = action.payload;
    },

    cartFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { cartFailure, cartLoading, cartSuccess } = cartSlice.actions;
export default cartSlice.reducer;
