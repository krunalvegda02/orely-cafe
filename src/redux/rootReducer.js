// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/Slices/SidebarSlice";
import tablesReducer from "../redux/Slices/TableSlices";
import menuIndexReducer from "../redux/Slices/MenuIndexSlice";

// Combine reducers without extra nesting
const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    tables: tablesReducer,
    menuIndex: menuIndexReducer,
});

export default rootReducer;
