// Importation de 'createSlice' depuis Redux Toolkit pour créer un slice
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial pour le slice
const initialState = {
  // La clé 'value' contient les informations de l'utilisateur professionnel
  value: {
    token: null, // Jeton d'authentification de l'utilisateur professionnel, initialisé à null
    email: null, // Email de l'utilisateur professionnel, initialisé à null
    userId: null, // Identifiant de l'utilisateur professionnel, initialisé à null
  },
};

// Création du slice 'userPro' avec Redux Toolkit
export const userProSlice = createSlice({
  name: "userPro", // Nom du slice, utilisé pour identifier le slice dans le store
  initialState, // État initial du slice
  reducers: {
    // Reducer pour gérer la connexion de l'utilisateur professionnel
    loginUserPro: (state, action) => {
      state.value.token = action.payload.token; // Mise à jour du token avec la valeur du payload
      state.value.email = action.payload.email; // Mise à jour de l'email avec la valeur du payload
      state.value.userId = action.payload.userId; // Mise à jour de l'identifiant avec la valeur du payload
    },
    // Reducer pour gérer la déconnexion de l'utilisateur professionnel
    logoutUserPro: (state) => {
      state.value.token = null; // Réinitialisation du token à null
      state.value.email = null; // Réinitialisation de l'email à null
      state.value.userId = null; // Réinitialisation de l'identifiant à null
    },
  },
});

// Exportation des actions 'loginUserPro' et 'logoutUserPro' pour être utilisées dans les composants
export const { loginUserPro, logoutUserPro } = userProSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default userProSlice.reducer;
