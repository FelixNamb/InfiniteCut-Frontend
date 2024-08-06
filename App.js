import { StyleSheet, View } from "react-native";
import ConnectionScreen from "./screens/ConnectionScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DatePicker from "./screens/DatePicker";

export default function App() {
  return <SignUpScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
});
