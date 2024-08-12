import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const screenHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={[styles.backgroundImage, { height: screenHeight }]}
          source={require("../../assets/background_home.jpg")}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>INFINITE {"\n"}CUT</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Connection")}>
              <MaterialIcons name="ads-click" size={50} color="#C6AC8F" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  sectionContainer: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomPage: {
    margin: 30,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  text: {
    color: "#C6AC8F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 10,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    color: "#C6AC8F",
    fontSize: 60,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 10,
  },
});
