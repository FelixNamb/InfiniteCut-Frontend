//Ce reducer permet de prendre les données d'un userPro sélectionné par un user
import { createSlice } from "@reduxjs/toolkit";
//On initialise l'état à null, et on mettra le userPro à l'intérieur
const initialState = {
  value: {userPro: null},
};

export const addUserProSlice = createSlice({
  name: "addUserPro",
  initialState,
  reducers: {
    addUser: (state,action) => { //Rajoute un userPro dans le reducer
        state.value.userPro = action.payload;
    }
  },
});

export const { addUser} = addUserProSlice.actions;
export default addUserProSlice.reducer;
