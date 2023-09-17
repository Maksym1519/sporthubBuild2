import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'mind'
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        showMind:(state) => {
            state.currentComponent = 'mind'
        },
        showBody:(state) => {
            state.currentComponent = 'body'
        },
        showSoul:(state) => {
            state.currentComponent = 'soul'
        }
       }
})

export const {
    showMind,
    showBody,
    showSoul
} = playlistSlice.actions;

export default playlistSlice.reducer