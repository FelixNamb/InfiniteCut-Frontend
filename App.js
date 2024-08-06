import { StyleSheet, View } from "react-native";
import ConnectionScreen from "./screens/ConnectionScreen";
import DatePicker from "./screens/DatePicker";

export default function App() {
  return <DatePicker />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 0,
    padding: 0,
  },
});
