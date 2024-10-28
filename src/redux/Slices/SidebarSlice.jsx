import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState : {
        sidebarOpen : false
    },
    reducers: {
      
        openSidebar : (state, action) =>  {
             state.sidebarOpen = true;
            console.log("sidebar Opened" );
        },

        closeSidebar : (state, action) => {
            state.sidebarOpen = false;
            console.log("sidebar Closed");
        }
    }
})

export const { openSidebar , closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
