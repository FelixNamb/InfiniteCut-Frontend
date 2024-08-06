import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../assets/background_home.jpg")}
    >
      <View styles={styles.container}>
        <LinearGradient
          colors={["#EAE0D5", "#C6AC8F"]}
          style={styles.gradient}
        />
        
        <View style={styles.bottomPage}>
            <Text style={styles.text}>Découvrez notre concept</Text>
            <MaterialCommunityIcons
                
                name="chevron-double-down"
                size={50}
                color="white"
            />
        </View>
      </View>
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
  bottomPage : {
    justifyContent:'center',
    alignItems: 'center',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#C6AC8F",
  },
});
