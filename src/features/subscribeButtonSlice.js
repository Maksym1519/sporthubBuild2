import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSubscribeButton: 'subscribe'
}

const subscribeButtonSlice = createSlice({
    name: 'subscribeButton',
    initialState,
    reducers: {
        subscribe: (state) => {
            state.currentSubscribeButton = 'subscribe'
        },
        unsubscribe: (state) => {
            state.currentSubscribeButton = 'unsubscribe'
        }
    }
})

export const {
    subscribe,
    unsubscribe,
 } = subscribeButtonSlice.actions;

export default subscribeButtonSlice.reducer