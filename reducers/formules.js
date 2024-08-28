// Importation de 'createSlice' depuis Redux Toolkit pour créer un slice
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial pour le slice
const initialState = {
  // La clé 'value' contient les informations liées à une formule
  value: {
    details: {}, // Détails de la formule, initialisé comme un objet vide
    nom: null, // Nom de la formule, initialisé à null
    prix: null, // Prix de la formule, initialisé à null
  },
};

// Création du slice 'formule' avec Redux Toolkit
export const formuleSlice = createSlice({
  name: "formule", // Nom du slice, utilisé pour identifier le slice dans le store
  initialState, // État initial du slice
  reducers: {
    // Définition du reducer 'addFormule' pour mettre à jour l'état
    addFormule: (state, action) => {
      // Met à jour les propriétés de 'value' dans l'état avec les données du payload
      state.value.details = action.payload.details; // Mise à jour des détails de la formule
      state.value.nom = action.payload.nom; // Mise à jour du nom de la formule
      state.value.prix = action.payload.prix; // Mise à jour du prix de la formule
    },
  },
});

// Exportation de l'action 'addFormule' pour pouvoir l'utiliser dans les composants
export const { addFormule } = formuleSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default formuleSlice.reducer;
