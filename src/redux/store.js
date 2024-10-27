import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/SidebarSlice"

export const store = configureStore({
    reducer: { 
        sidebar: sidebarReducer,
    },
});