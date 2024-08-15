import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    date: null,
    data: {
      userEmail: null,
      userMobile: null,
      userFormule: null,
      plageHoraire: null,
    },
  },
};

export const rdvSlice = createSlice({
  name: "formule",
  initialState,
  reducers: {
    addDateRdv: (state, action) => {
      state.value.date = action.payload;
    },
    addPlageHoraireRdv: (state, action) => {
      state.value.data.plageHoraire = action.payload;
    },
    setUserStatus: (state, action) => {
      state.value.data.userEmail = action.payload.email;
      state.value.data.userMobile = action.payload.mobile;
      state.value.data.userFormule = action.payload.formule;
    },
    deleteRdv: (state) => {
      state.value.date = null;
      state.value.data.userEmail = null;
      state.value.data.userMobile = null;
      state.value.data.userFormule = null;
      state.value.data.plageHoraire = null;
    },
  },
});

export const { addDateRdv, addPlageHoraireRdv, setUserStatus, deleteRdv } =
  rdvSlice.actions;
export default rdvSlice.reducer;
