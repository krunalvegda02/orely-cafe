import { createSlice } from "@reduxjs/toolkit";

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