import { createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";


const initialState = {
    screenWidth: window.innerWidth,
};
const screenWithSlice = createSlice({
name: 'screenWidth',
initialState,
reducers: {
    updateScreenWidth: (state, action) => {
        state.screenWidth = action.payload
    }
}
})

export const {updateScreenWidth} = screenWithSlice.actions
export default screenWithSlice.reducer