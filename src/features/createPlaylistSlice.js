import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 'init',
}

const createPlaylistSlice = createSlice({
    name: 'createPlaylistSlice',
    initialState,
    reducers: {
        showPlaylist:(state) => {
            state.currentStep = 'init'
        },
        showEditPlaylist:(state) => {
            state.currentStep = 'edit'
        },
        showResultPlaylist:(state) => {
            state.currentStep = 'result'
        },
    }
})

export const {
    showPlaylist,
    showEditPlaylist,
    showResultPlaylist
 } = createPlaylistSlice.actions;

export default createPlaylistSlice.reducer