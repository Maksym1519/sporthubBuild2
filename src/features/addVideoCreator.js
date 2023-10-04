import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: 'yourVideo'
}

const addVideoSlice = createSlice({
    name: 'addVideoSlice',
    initialState,
    reducers: {
        showYourVideo:(state) => {
            state.currentComponent = 'yourVideo'
        },
        showAddVideo:(state) => {
            state.currentComponent = 'addVideo'
        },
        showNewVideo:(state) => {
            state.currentComponent = 'newVideo'
        },
        showDowloading:(state) => {
            state.currentComponent = 'downloading'
        },
        showPlayer:(state) => {
            state.currentComponent = 'player'
        },
      }
})

export const {
    showYourVideo,
    showAddVideo,
    showNewVideo,
    showDowloading,
    showPlayer,
    } = addVideoSlice.actions;

export default addVideoSlice.reducer