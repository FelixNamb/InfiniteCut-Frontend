import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/user";

//Grâce à ce Regex, on peut voir si l'email donné par l'utilisateur est bon ou pas
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();

  //Mise en place de tous nos états pour le bon fonctionnement de l'envoie de donnée vers le backend
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpMobile, setSignUpMobile] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

  const urlBackend = "https://infinite-cut-backend.vercel.app/";

  //Cette fonction permet de faire la requête pour inscrire un nouvel utilisateur user
  const handleSignUp = () => {
    //La condition de pouvoir continuer et de voir si les mdp sont les mêmes
    //Ainsi que la partie email valide par le REGEX
    if (signUpPassword === signUpConfirmPassword && EMAIL_REGEX.test(signUpEmail)) {
      fetch(`${urlBackend}/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signUpEmail,
          mobile: signUpMobile,
          motDePasse: signUpPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(
              login({
                email: signUpEmail,
                token: data.token,
              })
            );
            navigation.navigate("DatePicker"); //Si tout se passe bien, alors on envoie le nouvel utilisateur sur la page de réservation de date.
            setSignUpEmail("");
            setSignUpPassword("");
            setSignUpMobile("");
            setSignUpConfirmPassword("");
          }
        });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.AreaView}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Nouveau sur Infinite Cut ?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              onChangeText={(value) => setSignUpEmail(value)}
              value={signUpEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              placeholderTextColor="white"
              autoCapitalize="none"
              onChangeText={(value) => setSignUpMobile(value)}
              value={signUpMobile}
            />
            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              placeholder="Mot de passe"
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setSignUpPassword(value)}
              value={signUpPassword}
            />
            <TextInput
              style={styles.inputConfirmPassword}
              secureTextEntry={true}
              placeholder="Confirmation mot de passe"
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setSignUpConfirmPassword(value)}
              value={signUpConfirmPassword}
            />
          </View>
          <View style={styles.bottomPage}>
            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => handleSignUp()}
            >
              <Text style={styles.lastTextButton}>Créer son compte</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  AreaView: {
    backgroundColor: "#EAE0D5",
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  input: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  titleContainer: {
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
  },
  lastButton: {
    backgroundColor: "transparent",
    height: 70,
    width: 300,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
  lastTextButton: {
    color: "#5E503F",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 5,
    fontFamily: "Montserrat_500Medium",
  },
  buttonContainer: {
    width: "90%",
    height: "60%",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
  error: {
    marginTop: 10,
    color: "red",
    fontFamily: "Montserrat_500Medium",
  },
  bottomPage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
