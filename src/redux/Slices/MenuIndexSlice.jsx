import { createSlice } from "@reduxjs/toolkit";

// ?Note: For menu index which changes twice on model table click and on tablesList table click
const menuIndexSlice = createSlice({
    name: "menuIndex",
    initialState : 0,
    reducers: {
        setMenuIndex(state, action)  {
           return action.payload
        } 
    }
})

export const {setMenuIndex} =  menuIndexSlice.actions;

export default menuIndexSlice.reducer;