import ConnectionScreen from "./screens/parcoursUser/ConnectionScreen";
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
import MesInformationsPro from "./screens/profilePro/MesInformationsPro";
import ConceptScreen from "./screens/parcoursUser/ConceptScreen";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./reducers/user";
import formules from "./reducers/formules";
import userPro from "./reducers/userPro";

const reducers = combineReducers({ user, formules, userPro });
const persistConfig = { key: "faceup", storage: AsyncStorage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ConceptPro" component={ConceptPro} />
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="MesInformationsPro" component={MesInformationsPro} />
            <Stack.Screen name="Connection" component={ConnectionScreen} />
            <Stack.Screen name="Formules" component={FormulesScreen} />
            <Stack.Screen name="MesInformations" component={MesInformations} />
            <Stack.Screen name="RDVs" component={MesRDVScreen} />
            <Stack.Screen name="DatePicker" component={DatePicker} />
            <Stack.Screen name="Concept" component={ConceptScreen} />
            <Stack.Screen name="ChooseBarber" component={ChooseBarberScreen} />
            <Stack.Screen name="Pay" component={PayScreen} />
            <Stack.Screen name="FavoriteBarber" component={FavoriteBarber} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
