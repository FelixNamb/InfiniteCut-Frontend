// Importation des composants d'écran pour différentes parties de l'application
import DatePicker from "./screens/parcoursUser/DatePicker";
import SignUpScreen from "./screens/parcoursUser/SignUpScreen";
import SignUpProScreen from "./screens/parcoursUser/SignUpProScreen";
import FormulesScreen from "./screens/parcoursUser/FormulesScreen";
import ConceptPro from "./screens/profilePro/ConceptPro";
import MesRDVScreen from "./screens/parcoursUser/MesRDVScreen";
import ChooseBarberScreen from "./screens/parcoursUser/ChooseBarberScreen";
import HomeScreen from "./screens/parcoursUser/HomeScreen";
import PayScreen from "./screens/parcoursUser/PayScreen";
import FinRDVScreen from "./screens/parcoursUser/FinRDVScreen";
import MyAgenda from "./screens/profilePro/MyAgenda";
import MesInformations from "./screens/profileUser/mesInformations";
import MoyenDePaiement from "./screens/profileUser/MoyenDePaiement";
import UserFormule from "./screens/profileUser/UserFormule";
import FavoriteBarber from "./screens/profileUser/FavoriteBarber";
import MesChiffres from "./screens/profilePro/MesChiffres";
import StatScreen from "./screens/profilePro/StatScreen";
import MesInformationsPro from "./screens/profilePro/MesInformationsPro";
import ConnectionScreen from "./screens/parcoursUser/ConnectionScreen";

// Importation de modules de navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importation de composants et outils de gestion de l'état
import { View } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Importation des reducers Redux
import user from "./reducers/user";
import formules from "./reducers/formules";
import userPro from "./reducers/userPro";
import rdv from "./reducers/rdv";
import addUserPro from "./reducers/addUserPro";

// Suppression des avertissements dans les logs jaunes
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore les logs spécifiques
LogBox.ignoreAllLogs(); // Ignore tous les logs de notification

// Importation des polices personnalisées de Google Fonts via Expo
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

// Configuration de Redux Persist pour stocker l'état de l'application de manière persistante
const reducers = combineReducers({ user, formules, userPro, rdv, addUserPro }); // Combine les réducteurs en un seul
const persistConfig = { key: "faceup", storage: AsyncStorage }; // Configuration de persistance avec AsyncStorage

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers), // Applique la configuration de persistance au store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // Désactive les vérifications de série lors du middleware par défaut
});

const persistor = persistStore(store); // Crée un persistor pour le store Redux
persistor.purge(); // Purge les données persistantes au lancement de l'application
const Stack = createNativeStackNavigator(); // Crée un conteneur de navigation de pile native

export default function App() {
  // Chargement des polices personnalisées
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });

  // Retourne un écran vide tant que les polices ne sont pas chargées
  if (!fontsLoaded) {
    return <View></View>;
  } else {
    // Si les polices sont chargées, retourne l'application avec le Provider Redux et PersistGate pour persistance
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {/* Définition des routes et des composants de l'application */}
              <Stack.Screen name="Pay" component={PayScreen} />
              <Stack.Screen name="Formules" component={FormulesScreen} />
              <Stack.Screen name="FinRDVScreen" component={FinRDVScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Connection" component={ConnectionScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="DatePicker" component={DatePicker} />
              <Stack.Screen
                name="ChooseBarber"
                component={ChooseBarberScreen}
              />
              <Stack.Screen name="RDVs" component={MesRDVScreen} />
              <Stack.Screen name="ConceptPro" component={ConceptPro} />
              <Stack.Screen name="SignUpPro" component={SignUpProScreen} />
              <Stack.Screen name="MyAgenda" component={MyAgenda} />
              <Stack.Screen
                name="MesInformationsPro"
                component={MesInformationsPro}
              />
              <Stack.Screen name="StatScreen" component={StatScreen} />
              <Stack.Screen name="MesChiffres" component={MesChiffres} />
              <Stack.Screen
                name="MesInformations"
                component={MesInformations}
              />
              <Stack.Screen name="UserFormule" component={UserFormule} />
              <Stack.Screen name="FavoriteBarber" component={FavoriteBarber} />
              <Stack.Screen
                name="MoyenDePaiement"
                component={MoyenDePaiement}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
