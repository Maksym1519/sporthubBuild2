import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'video'
}

const videoSwitcherSlice = createSlice({
    name: 'videoSwitcher',
    initialState,
    reducers: {
        showVideo:(state) => {
            state.currentComponent = 'home'
        },
        showBio:(state) => {
            state.currentComponent = 'bio'
        },
        showStore:(state) => {
            state.currentComponent = 'store'
        },
        showPlaylist:(state) => {
            state.currentComponent = 'playlist'
        }
    }
})

export const {
    showVideo,
    showBio,
    showStore,
    showPlaylist
} = videoSwitcherSlice.actions;

export default videoSwitcherSlice.reducer