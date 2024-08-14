import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { CreditCardInput } from "react-native-credit-card-input";

export default function PayScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  const rdv = useSelector((state) => state.rdv.value);
  const formule = useSelector((state) => state.formules.value);

  const [creditCard, setCreditCard] = useState("**** **** **** ****");
  const [cvc, setCvc] = useState("CVC");
  const [expiration, setExpiration] = useState("MM/YY");
  const [visa, setVisa] = useState(false);
  const [masterCard, setMasterCard] = useState(false);
  const [error, setError] = useState(false);

  const whatIcon = () => {
    setVisa(false);
    setMasterCard(false);
    if (creditCard.charAt(0) === "4" && creditCard?.charAt(1) === "2") {
      setVisa(true);
    }
    if (creditCard.charAt(0) === "5" && creditCard?.charAt(1) === "5") {
      setMasterCard(true);
    }
  };

  const handleNavigation = () => {
    const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;
    if (
      (visa || masterCard) &&
      creditCard.length === 19 &&
      cvc.length === 3 &&
      expiration.length === 5 &&
      cvc !== "CVC" &&
      expiration !== "MM/YY"
    ) {
      fetch(`${urlBackend}/rdv`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: rdv.date,
          ObjectId: "66b0ecb8d43fe65b724e6082",
          plageHoraire: rdv.data.plageHoraire,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            fetch(`${urlBackend}/users/myCard`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: user.token,
                numCarte: creditCard,
                dateExpiration: expiration,
                cvc: cvc,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.result) {
                  fetch(`${urlBackend}/formules/${formule.nom}`)
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.result) {
                        fetch(`${urlBackend}/users/formule`, {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            token: user.token,
                            formule: data.formule._id,
                          }),
                        })
                          .then((response) => response.json())
                          .then((data) => {
                            if (data.result) {
                              console.log("Commande validée !");
                              navigation.navigate("RDVs");
                            } else {
                              console.log("Erreur lors de la commande");
                              setError(true);
                            }
                          })
                          .catch((error) => {
                            console.error(
                              "Erreur lors de la requête POST:",
                              error
                            );
                            setError(true);
                          });
                      }
                    });
                } else {
                  setError(true);
                }
              });
          }
        });
    }
  };

  const handleOnChange = async (form) => {
    setError(false);
    if (form.values.cvc !== "") {
      await setCvc(form.values.cvc);
    }
    if (form.values.number !== "") {
      await setCreditCard(form.values.number);
    }
    if (form.values.expiry !== "") {
      await setExpiration(form.values.expiry);
    }
    await whatIcon();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Ajustez la valeur selon vos besoins
      >
        <Header
          title="INFINITE CUT"
          colorScissors={false}
          colorUser={true}
          navigation={navigation}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Confirmer votre abonnement</Text>
        </View>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.card}>
            <View style={styles.viewIcon}>
              {visa ? (
                <Image
                  source={require("../../assets/Visa.png")}
                  style={styles.image}
                  alt="visa"
                  resizeMode="contain"
                />
              ) : (
                <View></View>
              )}
              {masterCard ? (
                <Image
                  source={require("../../assets/masterCard.png")}
                  style={styles.image}
                  alt="mastercard"
                  resizeMode="contain"
                />
              ) : (
                <View></View>
              )}
            </View>
            <View style={styles.creditCard}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat_500Medium",
                  fontSize: 20,
                }}
              >
                {creditCard}
              </Text>
            </View>
            <View style={styles.cvcAndExpiration}>
              <Text
                style={{ color: "white", fontFamily: "Montserrat_500Medium" }}
              >
                {expiration}
              </Text>
              <Text
                style={{ color: "white", fontFamily: "Montserrat_500Medium" }}
              >
                {cvc}
              </Text>
            </View>
          </View>
          {error ? (
            <Text style={{ color: "red", fontFamily: "Montserrat_500Medium" }}>
              Erreur sur la saisie de votre carte.
            </Text>
          ) : (
            <></>
          )}
          <CreditCardInput
            style={styles.safeArea}
            onChange={(form) => handleOnChange(form)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigation()}
          >
            <Text style={styles.textButton}>
              Valider{"\n"}
              {formule.prix}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    height: 680,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
  },
  safeAreaView: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginBottom: 70,
  },
  card: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
  },
  viewIcon: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  cvcAndExpiration: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 10,
    width: "100%",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  card: {
    width: "100%",
    height: "35%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#A9A9A9",
    borderRadius: 20,
    marginBottom: 10,
  },
  safeArea: {
    height: "35%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "white",
    margin: 10,
    borderColor: "#5E503F",
    borderWidth: 1,
    marginBottom: 15,
  },
  icon: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },

  expiration: {
    backgroundColor: "white",
    height: 25,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  inputCvc: {
    backgroundColor: "white",
    padding: 5,
    width: 40,
    height: 25,
  },
  button: {
    backgroundColor: "#5E503F",
    width: 200,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
    fontSize: 20,
  },
});
