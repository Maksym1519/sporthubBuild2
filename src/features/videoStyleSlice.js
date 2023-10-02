import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'all'
}

const videoStyleSlice = createSlice({
    name: 'videoStyleSlice',
    initialState,
    reducers: {
        showAll:(state) => {
            state.currentComponent = 'all'
        },
        showMind:(state) => {
            state.currentComponent = 'mind'
        },
        showBody:(state) => {
            state.currentComponent = 'body'
        },
        showSoul:(state) => {
            state.currentComponent = 'soul'
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