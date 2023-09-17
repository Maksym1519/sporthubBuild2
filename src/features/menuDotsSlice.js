import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentMenu: '1'
}

const menuDotsSlice = createSlice({
    name: 'menuDots',
    initialState,
    reducers: {
        show1:(state) => {
            state.currentComponent = '1'
        },
        show2:(state) => {
            state.currentComponent = '2'
        },
        show3:(state) => {
            state.currentComponent = '3'
        },
        show4:(state) => {
            state.currentComponent = '4'
        },
        show5:(state) => {
            state.currentComponent = '5'
        },
        show6:(state) => {
            state.currentComponent = '6'
        },
        show7:(state) => {
            state.currentComponent = '7'
        },
        show8:(state) => {
            state.currentComponent = '8'
        },
        show9:(state) => {
            state.currentComponent = '9'
        },
    }
})

export const {
   show1,
   show2,
   show3,
   show4,
   show5,
   show6,
   show7,
   show8,
   show9,
} = menuDotsSlice.actions;

export default menuDotsSlice.reducer