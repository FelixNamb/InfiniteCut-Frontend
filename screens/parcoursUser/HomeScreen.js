import { StyleSheet, Text, View, ImageBackground } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/background_home.jpg")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>INFINITE {"\n"}CUT</Text>
      </View>
      <View style={styles.bottomPage}>
        <Text style={styles.text}>Découvrez{"\n"} notre concept ...</Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("Concept")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomPage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  container: {
    height: "90%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#C6AC8F",
    letterSpacing: 6,
    textAlign: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  title: {
    color: "white",
    fontSize: 50,
    color: "#C6AC8F",
    letterSpacing: 15,
    textAlign: "center",
  },
  header: {
    width: "100%",
    height: "10%",
    marginTop: 250,
  },
});
