import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@react-navigation/native";
import { login, logout } from "../../reducers/user";
import { loginUserPro, logoutUserPro } from "../../reducers/userPro";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ConnectionScreen({navigation}) {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;
  const handleSignIn = () => {
    if (EMAIL_REGEX.test(signInEmail)) {
      fetch(`${urlBackend}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          motDePasse: signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(
              login({
                email: signInEmail,
                token: data.token,
              })
            );
            dispatch(logoutUserPro());
            navigation.navigate("DatePicker");
            setSignInEmail("");
            setSignInPassword("");
          }else {
            fetch(`${urlBackend}/userpros/signin`,{
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: signInEmail,
                motDePasse: signInPassword,
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              if(data.result){
                dispatch(loginUserPro({
                  token: data.token,
                }));
                dispatch(logout());
                navigation.navigate("MyAgenda");
                setSignInEmail("");
                setSignInPassword("");
              }
            })
          }
        });
    } else {
      setEmailError(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView
          style={styles.areaView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>On commence ?</Text>

          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              onChangeText={(value) => setSignInEmail(value)}
              value={signInEmail}
            ></TextInput>
            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              placeholder="Mot de passe"
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setSignInPassword(value)}
              value={signInPassword}
            ></TextInput>
            {emailError && (
              <Text style={styles.error}>Aucun compte trouvé</Text>
            )}
            <TouchableOpacity
              style={styles.ConnectedButton}
              onPress={() => handleSignIn()}
            >
              <Text style={styles.textButton}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomPage}>
            <View style={styles.newUser}>
              <Text style={styles.textNewUser}>
                Nouveau sur Infinite Cut ? {"\n"}
                <Link to={{ screen: "SignUp", params: { id: "SignUp" } }}>
                  <Text style={styles.createAccount}>Créer votre compte</Text>
                </Link>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => props.navigation.navigate("ConceptPro")}
            >
              <Text style={styles.lastTextButton}>
                Proposez votre {"\n"}établissement
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAE0D5",
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
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
    marginBottom: 50,
    marginTop: 20,
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
  ConnectedButton: {
    height: 70,
    width: 300,
    backgroundColor: "#C6AC8F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textNewUser: {
    color: "#5E503F",
    fontWeight: "600",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  newUser: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 300,
  },
  buttonContainer: {
    width: "90%",
    height: "40%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    height: 30,
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 2,
  },
  error: {
    marginTop: 10,
    color: "red",
    fontFamily: "Montserrat_500Medium",
  },
  bottomPage: {
    marginTop: 20,
    height: "38%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  createAccount: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#C6AC8F",
  },
});
