import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStyle: 'all',
}

const videoStyleSlice = createSlice({
    name: 'videoStyleSlice',
    initialState,
    reducers: {
        showAll:(state) => {
            state.currentStyle = 'all'
        },
        showMind:(state) => {
            state.currentStyle = 'mind'
        },
        showBody:(state) => {
            state.currentStyle = 'body'
        },
        showSoul:(state) => {
            state.currentStyle = 'soul'
        },
        }
})

export const {
    showAll,
    showMind,
    showBody,
    showSoul
 } = videoStyleSlice.actions;

export default videoStyleSlice.reducer