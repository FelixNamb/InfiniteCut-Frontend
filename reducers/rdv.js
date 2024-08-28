// Importation de 'createSlice' depuis Redux Toolkit pour créer un slice
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial pour le slice
const initialState = {
  value: {
    date: null, // Date du rendez-vous, initialisée à null
    data: {
      userEmail: null, // Email de l'utilisateur, initialisé à null
      userMobile: null, // Mobile de l'utilisateur, initialisé à null
      userFormule: null, // Formule choisie par l'utilisateur, initialisée à null
      plageHoraire: null, // Plage horaire du rendez-vous, initialisée à null
    },
  },
};

// Création du slice 'rdv' avec Redux Toolkit
export const rdvSlice = createSlice({
  name: "rdv", // Nom du slice, utilisé pour identifier le slice dans le store
  initialState, // État initial du slice
  reducers: {
    // Reducer pour ajouter ou mettre à jour la date du rendez-vous
    addDateRdv: (state, action) => {
      state.value.date = action.payload; // Met à jour la date avec la valeur du payload
    },
    // Reducer pour ajouter ou mettre à jour la plage horaire du rendez-vous
    addPlageHoraireRdv: (state, action) => {
      state.value.data.plageHoraire = action.payload; // Met à jour la plage horaire avec la valeur du payload
    },
    // Reducer pour définir le statut de l'utilisateur (email, mobile, formule)
    setUserStatus: (state, action) => {
      state.value.data.userEmail = action.payload.email; // Met à jour l'email de l'utilisateur
      state.value.data.userMobile = action.payload.mobile; // Met à jour le mobile de l'utilisateur
      state.value.data.userFormule = action.payload.formule; // Met à jour la formule de l'utilisateur
    },
    // Reducer pour supprimer les informations du rendez-vous
    deleteRdv: (state) => {
      state.value.date = null; // Réinitialise la date à null
      state.value.data.userEmail = null; // Réinitialise l'email de l'utilisateur à null
      state.value.data.userMobile = null; // Réinitialise le mobile de l'utilisateur à null
      state.value.data.userFormule = null; // Réinitialise la formule de l'utilisateur à null
      state.value.data.plageHoraire = null; // Réinitialise la plage horaire à null
    },
  },
});

// Exportation des actions pour être utilisées dans les composants
export const { addDateRdv, addPlageHoraireRdv, setUserStatus, deleteRdv } =
  rdvSlice.actions;

// Exportation du reducer pour l'intégrer dans le store Redux
export default rdvSlice.reducer;
