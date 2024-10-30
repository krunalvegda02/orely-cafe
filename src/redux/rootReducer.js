// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/Slices/SidebarSlice";
import tablesReducer from "../redux/Slices/TableSlices";

// Combine reducers without extra nesting
const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    tables: tablesReducer,
});

export default rootReducer;
