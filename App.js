import { StyleSheet, View } from "react-native";
// import ConnectionScreen from "./screens/ConnectionScreen";
import DatePicker from "./screens/DatePicker";
import HomeScreen from "./screens/HomeScreen";
// // import { NavigationContainer } from "@react-navigation/native";
// // import {
//   createNativeStackNavigator,
//   createTopTabNavigator,
// } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
// const Tab = createTopTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName = '';

//         if (route.name === '') {
//           iconName = '';
//         } else if (route.name === '') {
//           iconName = '';
//         }

//         return <FontAwesome name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: '',
//       tabBarInactiveTintColor: '',
//       headerShown: false,
//     })}>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Connection" component={ConnectionScreen} />
//   </Tab.Navigator>
//   );
// }

export default function App() {
  return <HomeScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
