import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPasswordVisible: false
}

const inputTypeSlice = createSlice ({
name: 'inputType',
initialState, 
reducers: {
    showPassword: (state) => {
        state.isPasswordVisible = true
    },
    hidePassword: (state) => {
        state.isPasswordVisible = false
    }
}
})

export const {
    showPassword,
    hidePassword
} = inputTypeSlice.actions;

export default inputTypeSlice.reducer;