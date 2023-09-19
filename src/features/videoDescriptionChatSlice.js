import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'showAll'
}

const videoDescriptionChat = createSlice({
    name: 'videoDescriptionChat',
    initialState,
    reducers: {
        showAll:(state) => {
            state.currentComponent = 'showAll'
        },
        showLess:(state) => {
            state.currentComponent = 'showLess'
        },
        showChat:(state) => {
            state.currentComponent = 'chat'
        },
        }
})

export const {
    showAll,
    showLess,
    showChat
} = videoDescriptionChat.actions;

export default videoDescriptionChat.reducer