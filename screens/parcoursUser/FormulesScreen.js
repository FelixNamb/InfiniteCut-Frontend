import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Header from "../../components/Header";
import CardFlip from "react-native-card-flip";
import React, { useRef} from "react";
import { useDispatch} from "react-redux";
import { addFormule } from "../../reducers/formules";
import { StatusBar } from "expo-status-bar";

export default function FormulesScreen({ navigation }) {
  const cardEssentielRef = useRef(null);
  const cardPremiumRef = useRef(null);
  const cardExclusifRef = useRef(null);
  const dispatch = useDispatch()
  const essentiel = "ESSENTIEL";
  const premium = "PREMIUM";
  const exclusif = "EXCLUSIF";
  const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;

  const handleTakeFormula = (name) => {
    fetch(`${urlBackend}/formules/${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if(data.result) {
        const newObj = {
          nom : data.formule.nom,
          prix: data.formule.prix,
          details: data.formule.details,
        }
        dispatch(addFormule(newObj));
      }
    })
    navigation.navigate("Pay");
  }

  return (
    <>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nos Formules</Text>
        </View>
        <CardFlip style={styles.cardsContainer} ref={cardEssentielRef}>
          <TouchableOpacity
            style={styles.cardVerso}
            onPress={() => cardEssentielRef.current.flip()}
          >
            <View style={styles.cardEssentielContainer}>
              <ImageBackground
                source={require("../../assets/formule_essentiel.jpg")}
                alt="formule essentiel"
                style={styles.cardEssentiel}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardEssentielView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      letterSpacing: 15,
                      fontFamily: "Montserrat_500Medium",
                      margin: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {essentiel}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => cardEssentielRef.current.flip()}
                  >
                    <Text style={styles.textButton}>VOIR PLUS</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardEssentielContainer}
            onPress={() => cardEssentielRef.current.flip()}
          >
            <View style={styles.contentCardVerso}>
              <Text style={styles.textContentCardverso}>
                Fréquence : 3 / mois {"\n"} Engagement : 6 mois minimum {"\n"}
                Prestations : shampooing - coupe - coiffage
              </Text>
              <Text style={styles.price}>39.99 €</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleTakeFormula(essentiel)}
              >
                <Text style={styles.textButton}>CHOISIR</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>

        <CardFlip style={styles.cardsContainer} ref={cardPremiumRef}>
          <TouchableOpacity
            style={styles.cardVerso}
            onPress={() => cardPremiumRef.current.flip()}
          >
            <View style={styles.cardEssentielContainer}>
              <ImageBackground
                source={require("../../assets/formule_premium.jpg")}
                alt="formule premium"
                style={styles.cardPremium}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardPremiumView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      letterSpacing: 15,
                      fontFamily: "Montserrat_500Medium",
                      margin: 10,
                      fontWeight: "bold",
                    }}
                  >
                    PREMIUM
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => cardPremiumRef.current.flip()}
                  >
                    <Text style={styles.textButton}>VOIR PLUS</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardEssentielContainer}
            onPress={() => cardPremiumRef.current.flip()}
          >
            <View style={styles.contentCardVerso}>
              <Text style={styles.textContentCardverso}>
                Fréquence : 4 / mois {"\n"} Engagement : aucun {"\n"}Prestations
                : shampooing - coupe - coiffage {"\n"}massage cuir chevelu -
                barbe
              </Text>
              <Text style={styles.price}>49.99 €</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleTakeFormula(premium)}
              >
                <Text style={styles.textButton}>CHOISIR</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>

        <CardFlip style={styles.cardsContainer} ref={cardExclusifRef}>
          <TouchableOpacity
            style={styles.cardVerso}
            onPress={() => cardExclusifRef.current.flip()}
          >
            <View style={styles.cardEssentielContainer}>
              <ImageBackground
                source={require("../../assets/formule_exclusif.jpg")}
                alt="formule exclusif"
                style={styles.cardExclusif}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardExclusifView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      letterSpacing: 15,
                      fontFamily: "Montserrat_500Medium",
                      letterSpacing: 10,
                      margin: 10,
                      fontWeight: "bold",
                    }}
                  >
                    EXCLUSIF
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => cardExclusifRef.current.flip()}
                  >
                    <Text style={styles.textButton}>VOIR PLUS</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardEssentielContainer}
            onPress={() => cardExclusifRef.current.flip()}
          >
            <View style={styles.contentCardVerso}>
              <Text style={styles.textContentCardverso}>
                Fréquence : 4 / mois {"\n"} Engagement : aucun {"\n"}Prestations
                : shampooing - coupe - coiffage {"\n"}massage cuir chevelu -
                barbe - soin du visage {"\n"} épilation (nez, oreilles)
              </Text>
              <Text style={styles.price}>54.99 €</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleTakeFormula(exclusif)}
              >
                <Text style={styles.textButton}>CHOISIR</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EAE0D5",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
    marginTop: 10,
  },
  cardEssentiel: {
    height: "100%",
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
    height: "100%",
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
    height: "100%",
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
    marginBottom: 15,
  },
  textButton: {
    color: "white",
    letterSpacing: 5,
    fontFamily: "Montserrat_500Medium",
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
    fontFamily: "Montserrat_500Medium",
  },
  textContentCardverso: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
});
