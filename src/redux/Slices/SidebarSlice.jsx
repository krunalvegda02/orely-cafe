import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarOpen: false,
    billSiderOpen: false,
  },
  reducers: {
    openSidebar: (state, action) => {
      state.sidebarOpen = true;
      // console.log("sidebar Opned");
    },

    closeSidebar: (state, action) => {
      state.sidebarOpen = false;
      // console.log("sidebar Closed");
    },

    openBillsider: (state, action) => {
      state.billSiderOpen = true;
      // console.log("billbar Opened");
    },

    closebillsider: (state, action) => {
      state.billSiderOpen = false;
      // console.log("billbar closed");
    },
  },
});

export const { openSidebar, closeSidebar , openBillsider, closebillsider } = sidebarSlice.actions;

export default sidebarSlice.reducer;
