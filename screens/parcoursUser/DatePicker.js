// Importation des composants nécessaires de React Native et de bibliothèques tierces
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker"; // Importation du sélecteur de date/heure
import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect pour la gestion d'état et les effets de cycle de vie
import Header from "../../components/Header"; // Importation d'un composant personnalisé Header
import {
  addDateRdv,
  addPlageHoraireRdv,
  setUserStatus,
} from "../../reducers/rdv"; // Importation des actions Redux pour gérer les rendez-vous
import { useDispatch, useSelector } from "react-redux"; // Importation des hooks useDispatch et useSelector pour l'utilisation de Redux

// Composant principal de l'écran de sélection de date
export default function DatePicker({ navigation }) {
  const user = useSelector((state) => state.user.value); // Sélection de l'utilisateur connecté depuis le store Redux
  const dispatch = useDispatch(); // Obtention de la méthode dispatch pour déclencher des actions Redux
  const rdv = useSelector((state) => state.rdv.value); // Sélection des informations de rendez-vous depuis le store Redux

  // États locaux pour la gestion de la date et de la sélection des boutons
  const [dateTaken, setDateTaken] = useState(null); // Stocke la date sélectionnée
  const [selectDatePicker, setSelectDatePicker] = useState(false); // Détermine si le date picker doit être affiché
  const [morningButton, setMorningButton] = useState(false); // État pour le bouton "Matin"
  const [eveningButton, setEveningButton] = useState(false); // État pour le bouton "Après-midi"

  // Styles dynamiques pour les boutons de demi-journée
  let styleButton = {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    bordeColor: "#5E503F",
    height: 70,
    width: 150,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 20,
  };
  let styleTextButton = {
    color: "#5E503F",
  };

  console.log(rdv); // Affiche les informations de rendez-vous dans la console pour le débogage

  // Utilisation de useEffect pour récupérer les informations utilisateur lors du montage du composant
  useEffect(() => {
    const urlBackend = "https://infinite-cut-backend.vercel.app/"; // URL du backend provenant des variables d'environnement
    fetch(`${urlBackend}/users/${user.token}`) // Envoie une requête pour récupérer les détails de l'utilisateur
      .then((response) => response.json()) // Convertit la réponse en JSON
      .then((data) => {
        if (data.result) {
          const newObj = {
            email: data.user.email,
            mobile: data.user.mobile,
            formule: data.user.formule?.nom,
          };
          dispatch(setUserStatus(newObj)); // Met à jour le statut de l'utilisateur dans le store Redux
        }
      });
  }, []);

  // Fonction appelée lors de la sélection d'une date
  const onChangeDate = (value) => {
    setSelectDatePicker(false); // Cache le sélecteur de date
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDateTaken(
      new Date(value.nativeEvent.timestamp).toLocaleDateString("fr-FR", options) // Convertit et formate la date sélectionnée
    );
    dispatch(
      addDateRdv(
        new Date(value.nativeEvent.timestamp).toISOString().split("T")[0] // Ajoute la date du rendez-vous au store Redux
      )
    );
  };

  // Gestion de l'appui sur le bouton "Matin"
  const handleMorningButton = () => {
    setMorningButton(true); // Active le bouton "Matin"
    setEveningButton(false); // Désactive le bouton "Après-midi"
    dispatch(addPlageHoraireRdv("Matin")); // Envoie une action pour définir la plage horaire "Matin"
  };

  // Gestion de l'appui sur le bouton "Après-midi"
  const handleEveningButton = () => {
    setMorningButton(false); // Désactive le bouton "Matin"
    setEveningButton(true); // Active le bouton "Après-midi"
    dispatch(addPlageHoraireRdv("Après-midi")); // Envoie une action pour définir la plage horaire "Après-midi"
  };

  // Rendu du composant
  return (
    <View style={styles.page}>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={true}
        navigation={navigation}
      />
      <View style={styles.container}>
        {/* Affichage du sélecteur de date et des boutons de demi-journée */}
        <View style={styles.upperView}>
          <Text style={styles.title}>Votre {"\n"}rendez-vous</Text>
          <Text style={styles.subtitle}>Choisissez une date</Text>
          <TouchableOpacity
            style={styles.buttonDate}
            onPress={() => setSelectDatePicker(true)} // Affiche le sélecteur de date lorsque le bouton est pressé
          >
            <Text style={styles.textDate}>
              {dateTaken ? dateTaken : "Sélectionner une date"}
            </Text>
          </TouchableOpacity>
          {selectDatePicker && ( // Affiche le sélecteur de date si selectDatePicker est vrai
            <RNDateTimePicker
              mode="date"
              display="default"
              value={new Date()}
              maximumDate={new Date(2030, 10, 20)}
              onChange={(value) => onChangeDate(value)} // Appelle onChangeDate lorsque la date est modifiée
            />
          )}
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.subtitle}>Choisissez une demi journée</Text>
          <View style={styles.ButtonSection}>
            {/* Boutons pour choisir "Matin" ou "Après-midi" */}
            <TouchableOpacity
              style={morningButton ? styleButton : styles.button} // Applique le style dynamique si le bouton "Matin" est actif
              onPress={() => handleMorningButton()} // Appelle handleMorningButton lorsque pressé
            >
              <Text style={morningButton ? styleTextButton : styles.textButton}>
                Matin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={eveningButton ? styleButton : styles.button} // Applique le style dynamique si le bouton "Après-midi" est actif
              onPress={() => handleEveningButton()} // Appelle handleEveningButton lorsque pressé
            >
              <Text style={eveningButton ? styleTextButton : styles.textButton}>
                Après-midi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bouton de confirmation pour passer à l'étape suivante */}
        <TouchableOpacity
          style={styles.lastButton}
          onPress={() => navigation.navigate("ChooseBarber")} // Navigation vers l'écran "ChooseBarber"
        >
          <Text style={styles.textLastButton}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Définition des styles pour les composants de l'interface utilisateur
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  upperView: {
    height: "50%",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: 70,
    width: 150,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
    fontWeight: "bold",
  },
  textButton: {
    color: "#5E503F",
    fontFamily: "Montserrat_500Medium",
  },
  bottomView: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 15,
    padding: 10,
  },
  buttonDate: {
    width: 300,
    height: 70,
    backgroundColor: "#C6AC8F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textDate: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Montserrat_500Medium",
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
  textLastButton: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
  },
});
