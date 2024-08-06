import { StyleSheet, View } from "react-native";
// import ConnectionScreen from "./screens/ConnectionScreen";
import DatePicker from "./screens/DatePicker";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        <Stack.Screen name="DatePicker" component={DatePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
