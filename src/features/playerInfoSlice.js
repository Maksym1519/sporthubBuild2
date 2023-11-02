import { createSlice } from "@reduxjs/toolkit";

export const playerInfoSlice = createSlice({
  name: "playerInfoUser",
  initialState: {
    playerInfo: null,
  },
  reducers: {
    setPlayerInfo: (state, action) => {
      state.playerInfo = action.payload;
    },
  },
});

export const { setPlayerInfo } = playerInfoSlice.actions;

export const selectPlayerInfo = (state) => state.playerInfoUser.playerInfo;

export default playerInfoSlice.reducer;
