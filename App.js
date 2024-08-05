import { StyleSheet, View } from "react-native";
import ConnectionScreen from "./screens/ConnectionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ConnectionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
