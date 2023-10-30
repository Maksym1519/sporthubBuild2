import { createSlice } from "@reduxjs/toolkit";

export const videoInfoSlice = createSlice({
  name: "videoInfoUser",
  initialState: {
    videoInfo: null,
  },
  reducers: {
    setVideoInfo: (state, action) => {
      state.videoInfo = action.payload;
    },
  },
});

export const { setVideoInfo } = videoInfoSlice.actions;

export const selectVideoInfo = (state) => state.videoInfoUser.videoInfo;

export default videoInfoSlice.reducer;
