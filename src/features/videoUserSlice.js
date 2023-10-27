import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'home'
}

const videoUserSlice = createSlice({
    name: 'videoUser',
    initialState,
    reducers: {
        showHome:(state) => {
            state.currentComponent = 'home'
        },
        showLatest:(state) => {
            state.currentComponent = 'latest'
        },
        showViewLater:(state) => {
            state.currentComponent = 'viewLater'
        },
        showSubscribe:(state) => {
            state.currentComponent = 'subscribe'
        }
        }
})

export const {
    showHome,
    showLatest,
    showViewLater,
    showSubscribe
} = videoUserSlice.actions;

export default videoUserSlice.reducer