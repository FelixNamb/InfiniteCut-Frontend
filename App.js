import { StyleSheet, View } from "react-native";
import ConnectionScreen from "./screens/ConnectionScreen";

export default function App() {
  return <ConnectionScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
});
