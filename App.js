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
import ConnectionScreen from "./screens/parcoursUser/ConnectionScreen";
import StatScreen from "./screens/profilePro/StatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./reducers/user";
import formules from "./reducers/formules";
import userPro from "./reducers/userPro";
import StatScreen from "./screens/profilePro/StatScreen";

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

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="StatPro" component={StatScreen} />
              <Stack.Screen name="ConceptPro" component={ConceptPro} />
              <Stack.Screen
                name="ChooseBarber"
                component={ChooseBarberScreen}
              />
              <Stack.Screen name="RDVs" component={MesRDVScreen} />
              <Stack.Screen
                name="MesInformationsPro"
                component={MesInformationsPro}
              />
              <Stack.Screen name="FinRDVScreen" component={FinRDVScreen} />
              <Stack.Screen name="DatePicker" component={DatePicker} />
              <Stack.Screen name="Pay" component={PayScreen} />
              <Stack.Screen name="MyAgenda" component={MyAgenda} />
              <Stack.Screen name="MesChiffres" component={MesChiffres} />
              <Stack.Screen
                name="MesInformations"
                component={MesInformations}
              />
              <Stack.Screen
                name="MoyenDePaiement"
                component={MoyenDePaiement}
              />
              <Stack.Screen name="SignUpPro" component={SignUpProScreen} />
              <Stack.Screen name="UserFormule" component={UserFormule} />
              <Stack.Screen name="FavoriteBarber" component={FavoriteBarber} />
              <Stack.Screen name="Formules" component={FormulesScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Connection" component={ConnectionScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
