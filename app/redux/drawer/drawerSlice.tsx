import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  isLoading: false,
};
const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    drawerSuccess: (state, action) => {
      state.open = action.payload;
    },
    drawerClose: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { drawerClose, drawerSuccess } = drawerSlice.actions;
export default drawerSlice.reducer;
