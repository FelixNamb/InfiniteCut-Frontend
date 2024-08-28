// Importation de 'createSlice' depuis Redux Toolkit pour créer un slice
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial pour le slice
const initialState = {
  // La clé 'value' contient les informations de l'utilisateur
  value: {
    token: null, // Jeton d'authentification de l'utilisateur, initialisé à null
    email: null, // Email de l'utilisateur, initialisé à null
  },
};

// Création du slice 'user' avec Redux Toolkit
export const userSlice = createSlice({
  name: "user", // Nom du slice, utilisé pour identifier le slice dans le store
  initialState, // État initial du slice
  reducers: {
    // Reducer pour gérer la connexion de l'utilisateur
    login: (state, action) => {
      state.value.token = action.payload.token; // Mise à jour du token avec la valeur du payload
      state.value.email = action.payload.email; // Mise à jour de l'email avec la valeur du payload
    },
    // Reducer pour gérer la déconnexion de l'utilisateur
    logout: (state) => {
      state.value.token = null; // Réinitialisation du token à null
      state.value.email = null; // Réinitialisation de l'email à null
    },
  },
});

// Exportation des actions 'login' et 'logout' pour être utilisées dans les composants
export const { login, logout } = userSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default userSlice.reducer;
