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
        showEditResultPlaylist:(state) => {
            state.currentStep = 'editResult'
        },
    }
})

export const {
    showPlaylist,
    showEditPlaylist,
    showResultPlaylist,
    showEditResultPlaylist
 } = createPlaylistSlice.actions;

export default createPlaylistSlice.reducer