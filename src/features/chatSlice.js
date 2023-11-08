import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: "slider"
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        showSlider:(state) => {
            state.currentComponent = 'slider'
        },
        showChat:(state) => {
            state.currentComponent = 'chat'
        }
        }
})

export const {
    showSlider,
    showChat,
    } = chatSlice.actions;

export default chatSlice.reducer