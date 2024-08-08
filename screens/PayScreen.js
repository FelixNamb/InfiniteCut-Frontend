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
import Header from "../components/Header";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default function PayScreen({ navigation }) {
  const [creditCard, setCreditCard] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiration, setExpiration] = useState('');

  const handleOnChange = async (form) => {
    console.log(form);
    if(form.status.cvc === 'valid'){
      await setCvc(form.values.cvc);
    };
    if(form.status.number === 'valid'){
      await setCreditCard(form.values.number);
    };
    if(form.status.expiry === 'valid'){
      await setExpiration(form.values.expiry);
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <Text style={styles.title}>Confirmer votre {"\n"}abonnement</Text>
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
          </View>
        </ImageBackground>
      </View>
      <View style={styles.priceContainer}>
        <Text>39,99€</Text>
      </View>
      <CreditCardInput style={styles.safeArea} onChange={(form) => handleOnChange(form)}/>
      
      {/* <View style={styles.safeArea}>
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
              placeholder="0123 4567 8901 2345"
              onChangeText={(value) => setCreditCard(value)}
              value={creditCard}
            />
          </View>
          <TextInput
            style={styles.inputCvc}
            placeholder="123"
            onChangeText={(value) => setCvc(value)}
            value={cvc}
          />
        </View>
      </View> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RDVs")}
      >
        <Text style={styles.textButton}>Payer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    backgroundColor: "#EAE0D5",
  },
  container: {
    flex:1,
    backgroundColor:"#EAE0D5",
    height: 680,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
  },
  cardEssentielContainer: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  cardEssentiel: {
    height: "100%",
    width: 300,
  },
  cardEssentielView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  priceContainer: {
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#5E503F",
    borderWidth: 1,
  },
  safeArea: {
    height: 200,
    width: 300,
    borderRadius: 20,
    backgroundColor: "white",
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
