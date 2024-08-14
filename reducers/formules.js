import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {details: {}, nom : null, prix : null},
};

export const formuleSlice = createSlice({
  name: "formule",
  initialState,
  reducers: {
    addFormule: (state, action) => {
        state.value.details = action.payload.details;
        state.value.nom = action.payload.nom;
        state.value.prix = action.payload.prix;
    },
  },
});

export const { addFormule } = formuleSlice.actions;
export default formuleSlice.reducer;