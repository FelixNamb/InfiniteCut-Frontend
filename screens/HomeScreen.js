import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background_home.jpg")}
    >
      <SafeAreaView styles={styles.container}>
        <LinearGradient
          colors={["#EAE0D5", "#C6AC8F"]}
          style={styles.gradient}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>INFINITE CUT</Text>
        </View>
        <View style={styles.bottomPage}>
          <Text style={styles.text}>Découvrez notre {"\n"} concept ...</Text>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            margin="10"
            onPress={() => navigation.navigate("Concept")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bottomPage: {
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    margin: 20,
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
    paddingBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#C6AC8F",
    letterSpacing: 5,
    textAlign: "justify",
    marginBottom: 0,
  },
  titleContainer: {
    width: 360,
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginLeft: 30,
  },
  title: {
    color: "white",
    fontSize: 50,
    color: "#C6AC8F",
    letterSpacing: 5,
  },
});
