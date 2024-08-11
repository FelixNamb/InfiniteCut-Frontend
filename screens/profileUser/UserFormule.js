import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function UserFormule({ navigation }) {
  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            title="INFINITE CUT"
            colorScissors={false}
            colorUser={true}
            navigation={navigation}
          />
          <SubHeaderProfile
            firstText="Mes RDV"
            secondText="Mon Compte"
            navigation={navigation}
            styleFirstText="500"
          />
        </View>
        <Text style={styles.title}>Ma formule</Text>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require("../../assets/formule_essentiel.jpg")}
            style={styles.cardFormule}
            imageStyle={{ borderRadius: 20 }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "white",
                letterSpacing: 10,
                margin: 10,
                fontWeight: "bold",
              }}
            >
              ESSENTIEL
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.ButtonSection}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.textButton}>Changer d'abonnement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.textButton}>Résilier abonnement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPage}>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("FavoriteBarber")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    flexDirection: "column",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  cardContainer: {
    width: "80%",
    height: "40%",
    backgroundColor: "red",
    borderRadius: 20,
    margin: 40,
  },
  cardFormule: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#5E503F",
    width: 180,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    letterSpacing: 2,
    fontSize: 18,
    textAlign: "center",
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  bottomPage: {
    alignItems: "center",
    margin: 30,
  },
});
