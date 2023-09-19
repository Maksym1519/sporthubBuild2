import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'subscribe'
}

const videoPlayerSlice = createSlice({
    name: 'videoPlayer',
    initialState,
    reducers: {
        currentPage:(state) => {
            state.currentComponent = 'currentPage'
        },
        showVideo1:(state) => {
            state.currentComponent = 'video1'
        },
        showVideo2:(state) => {
            state.currentComponent = 'video2'
        },
        showVideo3:(state) => {
            state.currentComponent = 'video3'
        },
        showVideo4:(state) => {
            state.currentComponent = 'video4'
        },
        showVideo5:(state) => {
            state.currentComponent = 'video5'
        },
        showVideo6:(state) => {
            state.currentComponent = 'video6'
        },
        showVideo7:(state) => {
            state.currentComponent = 'video7'
        },
        showVideo8:(state) => {
            state.currentComponent = 'video8'
        },
        showVideo9:(state) => {
            state.currentComponent = 'video9'
        },
       
    }
})

export const {
    showVideo1,
    showVideo2,
    showVideo3,
    showVideo4,
    showVideo5,
    showVideo6,
    showVideo7,
    showVideo8,
    showVideo9,
    
} = videoPlayerSlice.actions;

export default videoPlayerSlice.reducer