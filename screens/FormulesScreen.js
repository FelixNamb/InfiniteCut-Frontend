import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import CardFlip from "react-native-card-flip";

export default function FormulesScreen({ navigation }) {
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
        ref={(card) => (this.cardEssentiel = card)}
      >
        <TouchableOpacity
          style={styles.cardEssentielContainer}
          onPress={() => {
            this.cardEssentiel.flip();
          }}
        >
          <View style={styles.contentCardVerso}>
            <Text style={styles.textContentCardverso}>
              Fréquence : 3 {"\n"} Engagement : 6 mois minimum {"\n"}
              Prestations : shampooing - coupe - coiffage
            </Text>
            <Text style={styles.price}>39.99 €</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Pay")}
            >
              <Text style={styles.textButton}>CHOISIR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardVerso}
          onPress={() => this.cardEssentiel.flip()}
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
                  onPress={() => {
                    this.cardEssentiel.flip();
                  }}
                >
                  <Text style={styles.textButton}>VOIR PLUS</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </CardFlip>
      <CardFlip
        style={styles.cardsContainer}
        ref={(card) => (this.cardPremium = card)}
      >
        <TouchableOpacity
          style={styles.cardEssentielContainer}
          onPress={() => {
            this.cardPremium.flip();
            console.log(this.card);
          }}
        >
          <View style={styles.contentCardVerso}>
            <Text style={styles.textContentCardverso}>
              Fréquence : 4 {"\n"} Engagement : aucun {"\n"}Prestations :
              shampooing - coupe - coiffage {"\n"}massage cuir chevelu - barbe
            </Text>
            <Text style={styles.price}>49.99 €</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Pay")}
            >
              <Text style={styles.textButton}>CHOISIR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardVerso}
          onPress={() => this.cardPremium.flip()}
        >
          <View style={styles.cardEssentielContainer}>
            <ImageBackground
              source={require("../assets/formule_premium.jpg")}
              style={styles.cardPremium}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardPremiumView}>
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
                  onPress={() => {
                    this.cardPremium.flip();
                  }}
                >
                  <Text style={styles.textButton}>VOIR PLUS</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </CardFlip>
      <CardFlip
        style={styles.cardsContainer}
        ref={(card) => (this.cardExclusif = card)}
      >
        <TouchableOpacity
          style={styles.cardEssentielContainer}
          onPress={() => {
            this.cardExclusif.flip();
          }}
        >
          <View style={styles.contentCardVerso}>
            <Text style={styles.textContentCardverso}>
              Fréquence : 4 {"\n"} Engagement : aucun {"\n"}Prestations :
              shampooing - coupe - coiffage {"\n"}massage cuir chevelu - barbe -
              soin du visage {"\n"} épilation (nez, oreilles)
            </Text>
            <Text style={styles.price}>54.99 €</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Pay")}
            >
              <Text style={styles.textButton}>CHOISIR</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardVerso}
          onPress={() => this.cardExclusif.flip()}
        >
          <View style={styles.cardEssentielContainer}>
            <ImageBackground
              source={require("../assets/formule_exclusif.jpg")}
              style={styles.cardExclusif}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.cardExclusifView}>
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
                  onPress={() => {
                    this.cardExclusif.flip();
                  }}
                >
                  <Text style={styles.textButton}>VOIR PLUS</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </CardFlip>
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
    marginBottom: 80,
    marginTop: 10,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#C6AC8F",
    borderColor: "#5E503F",
    borderWidth: 1,
  },
  cardEssentiel: {
    height: 200,
    width: "100%",
  },
  cardPremiumContainer: {
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  cardPremium: {
    height: 200,
    width: "100%",
  },
  cardExclusifContainer: {
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  cardExclusif: {
    height: 200,
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 2,
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
  cardPremiumView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardExclusifView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentCardVerso: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 170,
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textContentCardverso: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});
