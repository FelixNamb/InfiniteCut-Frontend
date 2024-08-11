import ConnectionScreen from "./screens/ConnectionScreen";
import DatePicker from "./screens/DatePicker";
import SignUpScreen from "./screens/SignUpScreen";
import SignUpProScreen from "./screens/SignUpProScreen";
import FormulesScreen from "./screens/FormulesScreen";
import MesRDVScreen from "./screens/MesRDVScreen";
import ChooseBarberScreen from "./screens/ChooseBarberScreen";
import HomeScreen from "./screens/HomeScreen";
import PayScreen from "./screens/PayScreen";
import FinRDVScreen from "./screens/FinRDVScreen";
import { StyleSheet } from "react-native";
import ConceptScreen from "./screens/ConceptScreen";
import MyAgenda from "./screens/profilePro/MyAgenda";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MesInformations from "./screens/profileUser/mesInformations";
import MoyenDePaiement from "./screens/MoyenDePaiement";

//Rajout des reducers

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
            <Stack.Screen name="MoyenDePaiement" component={MoyenDePaiement} />
            <Stack.Screen name="Connection" component={ConnectionScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Formules" component={FormulesScreen} />
            <Stack.Screen name="MesInformations" component={MesInformations} />
            <Stack.Screen name="RDVs" component={MesRDVScreen} />
            <Stack.Screen name="DatePicker" component={DatePicker} />
            <Stack.Screen name="Concept" component={ConceptScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignUpPro" component={SignUpProScreen} />
            <Stack.Screen name="ChooseBarber" component={ChooseBarberScreen} />
            <Stack.Screen name="Pay" component={PayScreen} />
            <Stack.Screen name="FinRdvs" component={FinRDVScreen} />
            <Stack.Screen name="MyAgenda" component={MyAgenda} />
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
