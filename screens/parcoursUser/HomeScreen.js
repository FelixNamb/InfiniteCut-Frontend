import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ConceptScreen from "./ConceptScreen";
import ConnectionScreen from "./ConnectionScreen";
import { LinearGradient } from "expo-linear-gradient";


const screenHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView 
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={[styles.backgroundImage, {height: screenHeight}]}
          source={require("../../assets/background_home.jpg")}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>INFINITE {"\n"}CUT</Text>
          </View>
          <View style={styles.bottomPage}>
            <Text style={styles.text}>Découvrez{"\n"} notre concept ...</Text>
          </View>
        </ImageBackground>
        <LinearGradient style={styles.gradient} colors={["#000000","#EAE0D5", "#C6AC8F"]}>
          <View style={styles.sectionContainer}>
            <ConceptScreen navigation={navigation} />
          </View>
          <View style={styles.sectionContainer}>
            <ConnectionScreen navigation={navigation} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  gradient: {
    flex:1,
    width: "100%",
  },
  sectionContainer: {
    marginTop: 20,
    flex: 1,
    width: "100%", // S'assure que les sections occupent la largeur complète
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomPage: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 40,
    color: "#C6AC8F",
    letterSpacing: 6,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  title: {
    fontSize: 50,
    color: "#C6AC8F",
    letterSpacing: 15,
    textAlign: "center",
  },
});