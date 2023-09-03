import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSuccess: (state, action) => {
      state.data = action.payload;
    },
    searchLoading: (state, action) => {
      state.loading = action.payload;
    },

    searchFaliure: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { searchFaliure, searchLoading, searchSuccess } =
  searchSlice.actions;
export default searchSlice.reducer;
