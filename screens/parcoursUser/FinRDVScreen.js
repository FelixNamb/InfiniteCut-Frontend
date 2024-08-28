// Importation des composants nécessaires de React Native et de bibliothèques tierces
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"; // Importation des composants pour créer l'interface utilisateur

import Octicons from "@expo/vector-icons/Octicons"; // Importation d'une bibliothèque pour les icônes
import { useState } from "react"; // Importation du hook useState pour la gestion d'état
import Header from "../../components/Header"; // Importation d'un composant personnalisé Header

// Définition du composant principal pour l'écran de fin de rendez-vous
export default function FinRDVScreen({ navigation }) {
  const [commentaire, setCommentaire] = useState(null); // État local pour le commentaire utilisateur
  const [modalVisible, setModalVisible] = useState(false); // État local pour la visibilité de la modal de confirmation
  const [formError, setFormError] = useState(""); // État local pour les erreurs de formulaire

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    if (commentaire !== null) {
      // Vérifie que le commentaire n'est pas vide
      setModalVisible(true); // Affiche la modal de confirmation
      setTimeout(() => {
        // Cache la modal après 3 secondes et redirige vers l'écran de sélection de date
        setModalVisible(false);
        navigation.navigate("DatePicker");
      }, 3000);
    } else {
      setFormError(true); // Affiche une erreur si le champ de commentaire est vide
    }
  };

  // Génération des étoiles pour l'évaluation
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />); // Ajoute 5 icônes d'étoiles remplies
  }

  // Rendu du composant
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* Permet de masquer le clavier lorsque l'utilisateur touche en dehors du clavier */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        {/* Affichage de l'en-tête personnalisé */}
        <Header
          title="INFINITY CUT"
          colorScissors={false}
          colorUser={true}
          navigation={navigation}
        />
        <View style={styles.containerPage}>
          <Text style={styles.titlePage}>Fin de {"\n"}rendez-vous</Text>
          <View style={styles.note}>
            <Text style={styles.textNote}>Note</Text>
            <View style={styles.star}>{stars}</View>
            {/* Affiche les étoiles d'évaluation */}
          </View>
          {/* Champ de texte pour que l'utilisateur entre son commentaire */}
          <TextInput
            style={styles.input}
            placeholder="Qu'en avez vous pensé ?"
            placeholderTextColor="#5E503F"
            autoCapitalize="none"
            onChangeText={(value) => setCommentaire(value)}
            // Met à jour l'état du commentaire à chaque modification
            value={commentaire}
            maxLength={280} // Limite le nombre de caractères à 280
          />
          {formError && <Text style={styles.error}>Le champ est vide.</Text>}
          {/* Affiche un message d'erreur si le champ de commentaire est vide */}

          {/* Modal de confirmation */}
          <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={styles.centeredCardView}>
              <View style={styles.modalCardView}>
                <Text style={styles.textCardModal}>
                  Merci pour votre retour. On réserve le prochain rendez-vous ?
                </Text>
              </View>
            </View>
          </Modal>
          {/* Bouton de soumission pour envoyer le commentaire */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.textButton}>Soumettre</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

// Définition des styles pour les composants de l'interface utilisateur
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  header: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  dispositionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
  containerPage: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "90%",
  },
  titlePage: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  note: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  textNote: {
    color: "#5E503F",
    fontSize: 25,
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  star: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 300,
    borderRadius: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5E503F",
    width: 200,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  textButton: {
    color: "white",
    letterSpacing: 2,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  centeredCardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCardView: {
    backgroundColor: "#C6AC8F",
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Propriété spécifique à Android pour l'ombre
  },
  textCardModal: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  error: {
    marginTop: 10,
    color: "red",
    fontFamily: "Montserrat_500Medium",
  },
});
