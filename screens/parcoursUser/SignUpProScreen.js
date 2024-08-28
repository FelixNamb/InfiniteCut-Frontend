import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserPro } from "../../reducers/userPro";

//Grâce à ce Regex, on peut voir si l'email donné par l'utilisateur est bon ou pas
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function SignUpProScreen({ navigation }) {
  //Mise en place de tous nos états pour la soumission au backend de l'inscription
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mobile, setMobile] = useState("");
  const [adresse, setAdresse] = useState("");
  const [monEnseigne, setMonEnseigne] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  //Notre appel à notre .env car on a toujours une ip différente les uns des autres
  const urlBackend = "https://infinite-cut-backend.vercel.app/";

  //Cette fonction permet l'appel à la bdd pour enregistrer un nouvel userPro
  const handleSignUp = async () => {
    if (EMAIL_REGEX.test(email)) {
      await fetch(`${urlBackend}/userpros/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: prenom,
          nom: nom,
          adresse: adresse,
          mobile: mobile,
          email: email,
          nomEnseigne: monEnseigne,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            dispatch(
              loginUserPro({
                token: data.token,
              })
            );
            setModalVisible(true);
            setTimeout(() => {
              setModalVisible(false);
              navigation.navigate("Home"); //Si tout fonctionne, on renvoie l'utilisateur vers la page HomeScreen.js
            }, 3000);
          }
        });
    } else {
      setEmailError(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.globalView}>
                <Text style={styles.textModal}>
                  Merci pour votre intêret. {"\n"} {"\n"}Nous accusons bonne
                  réception de votre demande.
                </Text>
                <Text style={styles.textModal}>
                  Notre équipe commercial reviendra vers vous par téléphone afin
                  de convenir d'un premier échange.
                </Text>
                <Text style={styles.textModal}>
                  Merci pour votre confiance.
                </Text>
                <Text style={styles.textTitle}>INFINITE CUT</Text>
              </View>
            </View>
          </View>
        </Modal>
        <SafeAreaView
          style={styles.AreaView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Envie de nous rejoindre ?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="Votre Enseigne"
              placeholderTextColor="#5E503F"
              onChangeText={(value) => setMonEnseigne(value)}
              value={monEnseigne}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              placeholderTextColor="#5E503F"
              onChangeText={(value) => setPrenom(value)}
              value={prenom}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              placeholderTextColor="#5E503F"
              onChangeText={(value) => setNom(value)}
              value={nom}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              placeholderTextColor="#5E503F"
              autoCapitalize="none"
              onChangeText={(value) => setMobile(value)}
              value={mobile}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="adresse"
              placeholderTextColor="#5E503F"
              onChangeText={(value) => setAdresse(value)}
              value={adresse}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#5E503F"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              onChangeText={(value) => setEmail(value)}
              value={email}
            ></TextInput>
          </View>

          {emailError && (
            <Text style={styles.error}>Adresse mail invalide</Text>
          )}
          <View style={styles.bottomPage}>
            <TouchableOpacity
              style={styles.lastButton}
              onPress={() => handleSignUp()}
            >
              <Text style={styles.lastTextButton}>Déposer votre demande</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  AreaView: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#EAE0D5",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#22333B",
    padding: 5,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  globalView: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "95%",
    widht: "100%",
  },
  textModal: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#EAE0D5",
    letterSpacing: 5,
    fontFamily: "Montserrat_500Medium",
  },
  bottomModal: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    height: 70,
    width: 300,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#5E503F",
    padding: 10,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: 15,
    letterSpacing: 5,
  },
  titleContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  lastButton: {
    backgroundColor: "#5E503F",
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
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
  },
  buttonContainer: {
    alignItems: "center",
    height: "60%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  error: {
    marginTop: 10,
    color: "red",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  bottomPage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
