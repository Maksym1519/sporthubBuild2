// getIdSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getIdSlice = createSlice({
  name: "loginId",
  initialState: { value: null },
  reducers: {
    getId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getId } = getIdSlice.actions;
export const selectData = (state) => {
  const value = state.loginId.value;
  console.log("Selector value:", value); // Вставляем отладочный вывод
  return value;
};
export default getIdSlice.reducer;
