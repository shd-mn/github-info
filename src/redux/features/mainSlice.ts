import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isSidebarOpen: boolean;
};
const initialState: InitialStateType = {
  isSidebarOpen: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = mainSlice.actions;
export default mainSlice.reducer;
