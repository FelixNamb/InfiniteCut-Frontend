import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

export default function PayScreen({ navigation }) {
  const [creditCard, setCreditCard] = useState(null);
  const [cvc, setCvc] = useState(null);
  const [moisExpiration, setMoisExpiration] = useState(null);
  const [anneeExpiration, setAnneeExpiration] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zone de Paiement</Text>
      <ImageBackground
        style={styles.image}
        source={require("../assets/Formule1.jpg")}
      >
        <Text style={styles.nameFormula}>ESSENTIEL</Text>
      </ImageBackground>
      <Text>39,99€</Text>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.icon}>
          <FontAwesome name="cc-visa" size={20} color="black" />
          <FontAwesome name="cc-mastercard" size={20} color="black" />
        </View>
        <View style={styles.creditCard}>
          <AntDesign name="creditcard" size={20} color="black" />
          <TextInput
            placeholder="0123 4567 8901 2345"
            onChangeText={(value) => setCreditCard(value)}
            value={creditCard}
          />
        </View>
        <View style={styles.cvcAndExpiration}>
          <View style={styles.expiration}>
            <TextInput
              style={styles.mois}
              placeholder="01"
              onChangeText={(value) => setMoisExpiration(value)}
              value={moisExpiration}
            />
            <Text>/</Text>
            <TextInput
              style={styles.annee}
              placeholder="01"
              onChangeText={(value) => setAnneeExpiration(value)}
              value={anneeExpiration}
            />
          </View>
          <TextInput
            style={styles.inputCvc}
            placeholder="123"
            onChangeText={(value) => setCvc(value)}
            value={cvc}
          />
        </View>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MesRdv")}
      >
        <Text style={styles.textButton}>Payer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EAE0D5",
  },
  title: {
    fontSize: 24,
    fontWeight: "300",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  nameFormula: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    margin: 10,
  },
  safeArea: {
    borderWidth: 2,
    height: 200,
    width: 300,
    padding: 10,
    justifyContent: "space-around",
    borderColor: "black",
    borderRadius: 20,
  },
  icon: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  creditCard: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cvcAndExpiration: {
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
  mois: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  annee: {
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
    width: 148.62,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
