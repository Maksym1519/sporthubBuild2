import { createSlice } from "@reduxjs/toolkit";

export const userPlaylistSlice = createSlice({
  name: "userPlaylistInfo",
  initialState: {
    userPlaylist: null,
  },
  reducers: {
    setUserPlaylist: (state, action) => {
      state.videoInfo = action.payload;
    },
  },
});

export const { setUserPlaylist } = userPlaylistSlice.actions;

export const selectUserPlaylist = (state) => state.userPlaylistInfo.userPlaylist;

export default userPlaylistSlice.reducer;
