import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: JSON.parse(localStorage.getItem("userToken")) || false,
};

const userTokenSlice = createSlice({
  name: "userToken",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const { setUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
