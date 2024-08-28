// Importation des composants et modules nécessaires de React Native et d'autres bibliothèques
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
import { useState } from "react"; // Importation du hook useState pour gérer l'état local
import { useDispatch } from "react-redux"; // Importation du hook useDispatch pour déclencher des actions Redux
import { Link } from "@react-navigation/native"; // Importation de Link pour la navigation
import { login, logout } from "../../reducers/user"; // Importation des actions login et logout pour les utilisateurs
import { loginUserPro, logoutUserPro } from "../../reducers/userPro"; // Importation des actions pour les utilisateurs professionnels

// Définition d'une expression régulière pour valider le format de l'adresse e-mail
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Définition du composant principal de l'écran de connexion
export default function ConnectionScreen({ navigation }) {
  // Utilisation de useDispatch pour obtenir la méthode de dispatch des actions Redux
  const dispatch = useDispatch();
  // État pour gérer l'affichage des erreurs liées à l'email
  const [emailError, setEmailError] = useState("");

  // États pour stocker l'e-mail et le mot de passe de l'utilisateur
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // URL du backend récupérée des variables d'environnement
  const urlBackend = "https://infinite-cut-backend.vercel.app/";

  // Fonction pour gérer la tentative de connexion
  const handleSignIn = () => {
    // Vérification du format de l'e-mail à l'aide de l'expression régulière
    if (EMAIL_REGEX.test(signInEmail)) {
      // Envoi de la requête de connexion pour les utilisateurs standards
      fetch(`${urlBackend}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          motDePasse: signInPassword,
        }),
      })
        .then((response) => response.json()) // Conversion de la réponse en JSON
        .then((data) => {
          if (data.result) {
            // Si la connexion est réussie, déclenche l'action login et redirige l'utilisateur
            dispatch(
              login({
                email: signInEmail,
                token: data.token,
              })
            );
            dispatch(logoutUserPro()); // Déconnecte les utilisateurs professionnels si connectés
            navigation.navigate("DatePicker"); // Redirige vers l'écran "DatePicker"
            setSignInEmail(""); // Réinitialise les champs d'e-mail et de mot de passe
            setSignInPassword("");
          } else {
            // Si l'utilisateur standard n'est pas trouvé, tente de se connecter en tant qu'utilisateur professionnel
            fetch(`${urlBackend}/userpros/signin`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: signInEmail,
                motDePasse: signInPassword,
              }),
            })
              .then((response) => response.json())
              .then((secondData) => {
                console.log(secondData);
                if (secondData.result) {
                  // Si la connexion utilisateur professionnel est réussie, déclenche l'action loginUserPro
                  dispatch(
                    loginUserPro({
                      token: secondData.token,
                    })
                  );
                  dispatch(logout()); // Déconnecte les utilisateurs standards
                  navigation.navigate("MyAgenda"); // Redirige vers l'écran "MyAgenda"
                  setSignInEmail(""); // Réinitialise les champs d'e-mail et de mot de passe
                  setSignInPassword("");
                } else {
                  setEmailError(true); // Affiche un message d'erreur si la connexion échoue
                }
              });
          }
        });
    } else {
      setEmailError(true); // Affiche un message d'erreur si l'e-mail est au mauvais format
    }
  };

  // Retourne le composant de l'interface utilisateur pour l'écran de connexion
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <KeyboardAvoidingView style={styles.areaView}>
          <Text style={styles.title}>On commence ?</Text>

          {/* Conteneur pour les champs de saisie et le bouton de connexion */}
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
            />
            <TextInput
              style={styles.inputPassword}
              secureTextEntry={true}
              placeholder="Mot de passe"
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => setSignInPassword(value)}
              value={signInPassword}
            />
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

          {/* Conteneur pour les liens et les boutons de navigation */}
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
              onPress={() => navigation.navigate("ConceptPro")}
            >
              <Text style={styles.lastTextButton}>
                Proposez votre {"\n"}établissement
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

// Définition des styles pour les différents éléments de l'interface utilisateur
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
