import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, email: null },
};

export const userProSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserPro: (state, action) => {
      state.value.token = action.payload.token;
    },
    logoutUserPro: (state) => {
      state.value.token = null;
      state.value.email = null;
    },
  },
});

export const { loginUserPro, logoutUserPro } = userProSlice.actions;
export default userProSlice.reducer;
