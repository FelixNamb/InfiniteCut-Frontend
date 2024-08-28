import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, email: null, userId: null },
};

export const userProSlice = createSlice({
  name: "userPro",
  initialState,
  reducers: {
    loginUserPro: (state, action) => {
      state.value.token = action.payload.token;
      state.value.email = action.payload.email;
      state.value.userId = action.payload.userId;
    },
    logoutUserPro: (state) => {
      state.value.token = null;
      state.value.email = null;
      state.value.userId = null;
    },
  },
});

export const { loginUserPro, logoutUserPro } = userProSlice.actions;
export default userProSlice.reducer;
