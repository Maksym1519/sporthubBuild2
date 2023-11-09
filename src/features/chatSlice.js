import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatSliceCurrentComponent: "slider"
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        showSlider:(state) => {
            state.chatSliceCurrentComponent = 'slider'
        },
        showChat:(state) => {
            state.chatSliceCurrentComponent = 'chat'
        }
        }
})

export const {
    showSlider,
    showChat,
    } = chatSlice.actions;

export default chatSlice.reducer