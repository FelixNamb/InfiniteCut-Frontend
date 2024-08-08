import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CardFlip from "react-native-card-flip";

export default function FormuleScreen({ navigation }) {
  // const [isButtonClickedEssentiel, setIsButtonClickedEssentiel] =
  //   useState(false);
  // const [isButtonClickedPremium, setIsButtonClickedPremium] = useState(false);
  // const [isButtonClickedExclusif, setIsButtonClickedExclusif] = useState(false);

  // const buttonClickedEssentiel = () => {
  //   setIsButtonClickedEssentiel(!isButtonClickedEssentiel);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nos Formules</Text>
      </View>
      <CardFlip
        style={styles.cardsContainer}
        ref={(card) => (this.card = card)}
      >
        <TouchableOpacity
          style={styles.cardEssentielContainer}
          onPress={() => this.card.flip()}
        >
          <View style={styles.cardEssentielContainer}>
            <ImageBackground
              source={require("../assets/formule_essentiel.jpg")}
              style={styles.cardEssentiel}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardEssentielView}>
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Pay")}
                >
                  <Text style={styles.textButton}>VOIR PLUS</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardVerso}
          onPress={() => this.card.flip()}
        >
          <View style={styles.cardEssentielContainer}>
            <ImageBackground
              source={require("../assets/formule_essentiel.jpg")}
              style={styles.cardEssentiel}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardEssentielView}>
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Pay")}
                >
                  <Text style={styles.textButton}>CHOISIR</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </CardFlip>
      {/* <View style={styles.cardsContainer}>
        <View style={styles.cardEssentielContainer}>
          <ImageBackground
            source={require("../assets/formule_essentiel.jpg")}
            style={styles.cardEssentiel}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.cardEssentielView}>
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
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pay")}
              >
                <Text style={styles.textButton}>VOIR PLUS</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cardEssentielContainer}>
          <ImageBackground
            source={require("../assets/formule_premium.jpg")}
            style={styles.cardEssentiel}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.cardEssentielView}>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  letterSpacing: 10,
                  margin: 10,
                  fontWeight: "bold",
                }}
              >
                PREMIUM
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pay")}
              >
                <Text style={styles.textButton}>VOIR PLUS</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cardEssentielContainer}>
          <ImageBackground
            source={require("../assets/formule_exclusif.jpg")}
            style={styles.cardEssentiel}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.cardEssentielView}>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  letterSpacing: 10,
                  margin: 10,
                  fontWeight: "bold",
                }}
              >
                EXCLUSIF
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Pay")}
              >
                <Text style={styles.textButton}>VOIR PLUS</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View> */}
      <View style={styles.bottomPage}>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={30}
          color="#C6AC8F"
          onPress={() => navigation.navigate("CompareFormules")}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EAE0D5",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
  },

  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  cardsContainer: {
    flexDirection: "column",
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardEssentielContainer: {
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  cardEssentiel: {
    height: "100%",
    width: 300,
  },
  background: {
    backgroundColor: "green",
    borderRadius: 20,
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 3,
  },
  cardPremiumContainer: {
    width: "100%",
    height: "33%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  cardPremium: {
    height: "100%",
    width: "80%",
    borderRadius: 20,
    margin: 5,
  },
  cardExclusifContainer: {
    width: "100%",
    height: "33%",
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  cardExclusif: {
    height: "100%",
    width: "80%",
    borderRadius: 20,
    margin: 5,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50,
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    margin: 10,
  },
  textButton: {
    color: "white",
    letterSpacing: 5,
  },
  cardEssentielView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPage: {
    alignItems: "center",
    margin: 30,
  },
});
