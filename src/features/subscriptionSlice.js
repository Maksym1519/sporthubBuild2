import { createSlice } from "@reduxjs/toolkit";

export const subscriptionSlice = createSlice({
  name: "mySubscriptions",
  initialState: {
    subscriptions: null,
  },
  reducers: {
    setSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
  },
});

export const { setSubscriptions } = subscriptionSlice.actions;

export const selectSubscription = (state) => state.mySubscriptions.subscriptions;

export default subscriptionSlice.reducer;
