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
import { useDispatch } from "react-redux";
import { URL_BACKEND } from "@env";


export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpMobile, setSignUpMobile] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");


  const handleSignUp = () => {
    if (signUpPassword === signUpConfirmPassword) {
      fetch(`${URL_BACKEND}/users/signup`, {
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
                mobile: signUpMobile,
              })
            );
            navigation.navigate("DatePicker");
            setSignUpEmail("");
            setSignUpPassword("");
            setSignUpMobile("");
            setSignUpConfirmPassword("");
          }
        });
    };
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.AreaView}>
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
            <Text style={styles.lastTextButton}>Créer son {"\n"}compte</Text>
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
    textAlign: "center",
    color: "white", // Ajout de cette ligne pour que le texte soit visible
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white", // Ajout de cette ligne pour que le texte soit visible
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white", // Ajout de cette ligne pour que le texte soit visible
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    flex: 1,
    textAlign: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    letterSpacing: 2,
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
