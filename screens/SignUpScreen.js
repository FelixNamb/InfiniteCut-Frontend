import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        email: signUpEmail,
        mobile: signUpMobile,
        motDePasse: signUpMotDePasse,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              email: signUpEmail,
              token: data.token,
              mobile: signUpMobile,
              motDePasse: signUpMotDePasse,
            })
          );
          navigation.navigate("DatePicker");
          setSignUpEmail("");
          setSignUpMobile("");
          setSignUpMotDePasse("");
          setSignUpConfirmMotDePasse("");
        }
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nouveau sur {"\n"}Infinite Cut ?</Text>
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
          ></TextInput>
          {emailError && (
            <Text style={styles.error}>Adresse mail invalide</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            placeholderTextColor="white"
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.inputConfirmPassword}
            secureTextEntry={true}
            placeholder="Confirmation mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.bottomPage}>
          <TouchableOpacity style={styles.lastButton}>
            <Text style={styles.lastTextButton}>Créer son compte</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 130,
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 110,
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 70,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    flex: 1,
  },
  titleContainer: {
    height: "25%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexWrap: "wrap",
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
  },
  buttonContainer: {
    width: 300,
    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  bottomPage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 130,
  },
});
