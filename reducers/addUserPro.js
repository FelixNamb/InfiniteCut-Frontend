import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {userPro: null},
};

export const addUserProSlice = createSlice({
  name: "formule",
  initialState,
  reducers: {
    addUser: (state,action) => {
        state.value.userPro = action.payload;
    }
  },
});

export const { addUser} = addUserProSlice.actions;
export default addUserProSlice.reducer;
