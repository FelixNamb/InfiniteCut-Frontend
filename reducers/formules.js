import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const formuleSlice = createSlice({
  name: "formule",
  initialState,
  reducers: {
    addFormule: (state, action) => {
        state.value.push(action.payload);
    },
  },
});

export const { addFormule } = formuleSlice.actions;
export default formuleSlice.reducer;
