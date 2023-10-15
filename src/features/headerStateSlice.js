import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'logout'
}

const headerStateSlice = createSlice({
    name: 'headerStateSlice',
    initialState,
    reducers: {
        showLogOut:(state) => {
            state.currentComponent = 'logout'
        },
        showLogIn:(state) => {
            state.currentComponent = 'login'
        },
      }
})

export const {
    showLogOut,
    showLogIn,
} = headerStateSlice.actions;

export default headerStateSlice.reducer