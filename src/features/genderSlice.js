import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentComponent: ''
}

const genderSlice = createSlice({
    name: 'genderSlice',
    initialState,
    reducers: {
        showMale:(state) => {
            state.currentComponent = 'male'
        },
        showFemale:(state) => {
            state.currentComponent = 'female'
        },
        showNone:(state) => {
            state.currentComponent = 'none'
        },
        }
})

export const {
    showMale,
    showFemale,
    showNone
} = genderSlice.actions;

export default genderSlice.reducer