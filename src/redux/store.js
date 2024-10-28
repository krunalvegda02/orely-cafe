import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/Slices/SidebarSlice"

export const store = configureStore({
    reducer: { 
        sidebar: sidebarReducer,
    },
});