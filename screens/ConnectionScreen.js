import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@react-navigation/native";
import Header from "../components/Header";
import { login } from "../reducers/user";
import { URL_BACKEND } from "@env";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ConnectionScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSignIn = () => {
    if (EMAIL_REGEX.test(signInEmail)) {
      fetch(`${URL_BACKEND}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          motDePasse: signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            dispatch(
              login({
                email: email,
                token: data.token,
              })
            );
            navigation.navigate("DatePicker");
            setSignInEmail("");
            setSignInPassword("");
          }
        });
    } else {
      setEmailError(true);
    }
  };

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header
          title="INFINITE CUT"
          colorUser={false}
          colorScissors={false}
          navigation={navigation}
        />
        <SafeAreaView
          style={styles.areaView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Maintenant que vous savez tout,{"\n"} rejoignez nous.
            </Text>
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
              onChangeText={(value) => setSignInEmail(value)}
              value={signInEmail}
            ></TextInput>
            {emailError && (
              <Text style={styles.error}>Aucun compte trouvé</Text>
            )}
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
              onPress={() => navigation.navigate("SignUpPro")}
            >
              <Text style={styles.lastTextButton}>
                Proposez votre {"\n"}établissement
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    areaView: {
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
    title: {
      flex: 1,
      color: "#5E503F",
      fontSize: 40,
      textAlign: "center",
    },
    titleContainer: {
      height: "25%",
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
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
    ConnectedButton: {
      height: 60,
      width: 200,
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
    },
    newUser: {
      justifyContent: "center",
      alignItems: "center",
      height: 80,
      width: 300,
    },
    buttonContainer: {
      width: 300,
      height: 250,
      justifyContent: "space-around",
      alignItems: "center",
    },
    textButton: {
      color: "white",
      height: 30,
      fontSize: 18,
    },
    error: {
      marginTop: 10,
      color: "red",
    },
    bottomPage: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 70,
    },
    createAccount: {
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      color: "#C6AC8F",
    },
  });
