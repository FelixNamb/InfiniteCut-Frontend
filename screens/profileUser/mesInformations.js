import Header from "../../components/Header"; // Importation du composant Header
import SubHeaderProfile from "../../components/SubHeaderProfile"; // Importation du composant SubHeaderProfile
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"; // Importation des composants de base de 'react-native'
import { useState } from "react"; // Importation du hook useState pour gérer les états
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Importation d'icônes Material Icons

// Expression régulière pour valider les adresses email
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Définition du composant fonctionnel MesInformations
export default function MesInformations({ navigation }) {
  // Déclaration des états locaux pour gérer les champs de formulaire et les modifications
  const [email, setEmail] = useState(""); // État pour l'email
  const [adresse, setAdresse] = useState(""); // État pour l'adresse
  const [mobile, setMobile] = useState(""); // État pour le numéro de mobile
  const [isModified, setIsModified] = useState(false); // État pour savoir si le formulaire est en mode modification

  // Fonction pour activer le mode modification
  const handleModifier = () => {
    setIsModified(true);
  };

  // Fonction pour enregistrer les modifications
  const handleEnregister = () => {
    // Si l'email est valide, on pourrait envoyer les données au serveur
    // if (EMAIL_REGEX.test(email)){
    //   fetch(`${URL_BACKEND}/users/data`, {
    //     method:'PUT',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       adresse: adresse,
    //       mobile: mobile,
    //       email: email,
    //     }),
    //   }).then(response => response.json())
    //   .then(data => {
    //     if(data.result) {
    //       dispatch(update(adresse,mobile,email))
    //     }
    //   })
    // }
    setIsModified(false); // Réinitialisation du mode modification après l'enregistrement
  };

  // Fonction pour annuler les modifications et réinitialiser les champs
  const handleAnnuler = () => {
    setAdresse("");
    setEmail("");
    setMobile("");
    setIsModified(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.total}>
        {/* En-tête du composant */}
        <View style={styles.header}>
          <Header
            style={styles.header}
            title="INFINITE CUT"
            navigation={navigation}
            colorScissors={false}
            colorUser={true}
          />
          <SubHeaderProfile
            firstText="Mes RDV"
            secondText="Mon compte"
            styleSecondText="Montserrat_600SemiBold"
            navigation={navigation}
          />
        </View>
        {/* Éviter les problèmes de clavier avec KeyboardAvoidingView */}
        <KeyboardAvoidingView style={styles.keyboard}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Mon compte</Text>
          </View>
          {isModified ? (
            // Affichage des champs de formulaire en mode modification
            <View style={styles.bottomContainer}>
              <View style={styles.globalInput}>
                <Text style={styles.sousText}>Mes informations</Text>
                <View style={styles.modifieView}>
                  <Text>Email : </Text>
                  <TextInput
                    placeholder="andre@touffe.com"
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                  ></TextInput>
                </View>
                <View style={styles.modifieView}>
                  <Text>Adresse : </Text>
                  <TextInput
                    placeholder="XXX rue de la chapelle, Lyon"
                    onChangeText={(value) => setAdresse(value)}
                    value={adresse}
                  ></TextInput>
                </View>
                <View style={styles.modifieView}>
                  <Text>Mobile : </Text>
                  <TextInput
                    placeholder="06 00 00 00 00"
                    onChangeText={(value) => setMobile(value)}
                    value={mobile}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.bottomPageModifie}>
                <TouchableOpacity
                  style={styles.buttonModifie}
                  onPress={() => handleEnregister()}
                >
                  <Text style={styles.final}>Enregistrer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonModifie}
                  onPress={() => handleAnnuler()}
                >
                  <Text style={styles.final}>Annuler</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // Affichage des informations en mode lecture seule
            <View style={styles.bottomContainer}>
              <View style={styles.globalInput}>
                <Text style={styles.sousText}>Mes informations</Text>
                <View style={styles.modifieView}>
                  <Text>andre@touffe.com</Text>
                </View>
                <View style={styles.modifieView}>
                  <Text>XXX rue de la chapelle, Lyon</Text>
                </View>
                <View style={styles.modifieView}>
                  <Text>06 00 00 00 00</Text>
                </View>
              </View>
              <View style={styles.bottomPage}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleModifier()}
                >
                  <Text style={styles.final}>Modifier</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* Icône pour naviguer vers une autre page */}
          <MaterialIcons
            name="read-more"
            size={24}
            color="#5E503F"
            onPress={() => navigation.navigate("UserFormule")}
            style={styles.icon}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  total: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  keyboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    width: "100%",
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  bottomContainer: {
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modifieView: {
    height: "16%",
    width: 300,
    backgroundColor: "#C6AC8F",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#5E503F",
    flexDirection: "row",
  },
  buttonModifie: {
    height: "30%",
    borderWidth: 1,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5E503F",
  },
  globalInput: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "16%",
    width: "85%",
    backgroundColor: "#C6AC8F",
    borderRadius: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#5E503F",
    fontSize: 16,
    textAlign: "left",
  },
  bottomPage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPageModifie: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    height: "30%",
  },
  button: {
    height: "30%",
    borderWidth: 1,
    width: 300,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5E503F",
  },
  text: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: 15,
    letterSpacing: 5,
  },
  sousText: {
    fontSize: 24,
    color: "#5E503F",
    alignSelf: "flex-start",
    fontFamily: "Montserrat_500Medium",
  },
  final: {
    color: "#5E503F",
    fontSize: 20,
    letterSpacing: 2,
    fontFamily: "Montserrat_500Medium",
  },
  icon: {
    marginBottom: 40,
  },
});
