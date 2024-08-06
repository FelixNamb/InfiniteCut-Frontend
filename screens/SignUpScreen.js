import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useState } from "react";
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ConnectionScreen() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [signUpMobile, setSignUpMobile] = useState("");
  const [signUpMotDePasse, setSignUpMotDePasse] = useState("");
  const [signUpConfirmMotDePasse, setSignUpConfirmMotDePasse] = useState("");

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      dispatch(updateEmail(email));
    } else {
      setEmailError(true);
    }
  };
}

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
        setSignUpEmail("");
        setSignUpMobile("");
        setSignUpMotDePasse("");
        setSignUpConfirmMotDePasse("");
      }
    });
};

return (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Nouveau sur Infinite Cut ?</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Mobile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Mot de passe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Confirmation mot de passe</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.lastButton}>
      <Text style={styles.lastTextButton}>Créer son compte</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
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
  button: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    height: 30,
    fontSize: 18,
  },
  title: {
    color: "#5E503F",
    fontSize: "40",
    flexWrap: "wrap",
  },
  titleContainer: {
    height: 150,
    width: 300,
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
  },
  buttonContainer: {
    width: 300,
    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
