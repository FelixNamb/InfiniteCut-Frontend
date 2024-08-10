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
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpMobile, setSignUpMobile] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");

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

  const handleSignUp = () => {
    fetch("http://10.0.2.78:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signUpEmail,
        mobile: signUpMobile,
        password: signUpPassword,
        ConfirmPassword: signUpConfirmPassword,
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
          setSignUpEmail("");
          setSignUpPassword("");
          setSignUpMobile("");
          setSignUpConfirmPassword;
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
            onChange={(e) => setSignUpEmail(e.target.value)}
            value={signUpEmail}
          ></TextInput>
          {emailError && (
            <Text style={styles.error}>Adresse mail invalide</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            placeholderTextColor="white"
            autoCapitalize="none"
            onChange={(e) => setSignUpMobile(e.target.value)}
            value={signUpMobile}
          ></TextInput>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          ></TextInput>
          <TextInput
            style={styles.inputConfirmPassword}
            secureTextEntry={true}
            placeholder="Confirmation mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
            onChange={(e) => setSignUpConfirmPassword(e.target.value)}
            value={signUpConfirmPassword}
          ></TextInput>
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
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
