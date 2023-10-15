import { createSlice } from "@reduxjs/toolkit";

const getIdSlice = createSlice({
 name: "loginId",
 initialState: {value: null},
 reducers: {
    getId: (state,action) => {
      state.value = action.payload
    }
 }
 })
 export const { getId} = getIdSlice.actions
 export const selectData = (state) => state.loginId.value 
 export default getIdSlice.reducer