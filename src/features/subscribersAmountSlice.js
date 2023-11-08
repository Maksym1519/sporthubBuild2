import { createSlice } from "@reduxjs/toolkit";

export const subscribersAmountSlice = createSlice({
  name: "subscribersAmount",
  initialState: {
    emptyList: null,
  },
  reducers: {
    setSubscribersAmount: (state, action) => {
      state.emptyList = action.payload;
    },
  },
});

export const { setSubscribersAmount } = subscribersAmountSlice.actions;

export const selectSubscribersAmount= (state) => state.subscribersAmount.emptyList;

export default subscribersAmountSlice.reducer;
