import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentComponent: 'signIn'
}

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    showSignInForm: (state) => {
      state.currentComponent = 'signIn';
    },
    showSignUpForm: (state) => {
      state.currentComponent = 'signUp';
    },
    showForgotPasswordForm: (state) => {
      state.currentComponent = 'forgotPassword';
    },
    showCheckInboxForm: (state) => {
      state.currentComponent = 'checkInbox';
    },
    showRestorePasswordForm: (state) => {
      state.currentComponent = 'restorePassword';
    },
  },
});

export const {
  showSignInForm,
  showSignUpForm,
  showForgotPasswordForm,
  showCheckInboxForm,
  showRestorePasswordForm
} = signInSlice.actions;

export default signInSlice.reducer;
