import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categorySuccess: (state, action) => {
      state.data = action.payload;
    },
    categoryLoading: (state, action) => {
      state.loading = action.payload;
    },

    categoryFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { categoryFailure, categoryLoading, categorySuccess } =
  categorySlice.actions;
export default categorySlice.reducer;
