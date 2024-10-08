import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native"; // Importation des composants de base de 'react-native'
import { useState } from "react"; // Importation du hook useState pour gérer les états
import Header from "../../components/Header"; // Importation du composant Header
import SubHeaderProfile from "../../components/SubHeaderProfile"; // Importation du composant SubHeaderProfile
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Importation d'icônes FontAwesome
import Entypo from "@expo/vector-icons/Entypo"; // Importation d'icônes Entypo
import { StatusBar } from "expo-status-bar"; // Importation de StatusBar pour gérer la barre de statut
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Importation d'icônes MaterialIcons

// Définition du composant fonctionnel MoyenDePaiement
export default function MoyenDePaiement({ navigation }) {
  // Déclaration des états locaux pour les modaux
  const [modalVisible, setModalVisible] = useState(false); // État pour la visibilité du modal de suppression de carte
  const [modalCardVisible, setModalCardVisible] = useState(false); // État pour la visibilité du modal de confirmation de suppression de carte
  const [modalDeleteAccountVisible, setModalDeleteAccountVisible] =
    useState(false); // État pour la visibilité du modal de suppression de compte

  // Fonction pour fermer le modal de suppression de carte
  const handleClose = () => {
    setModalVisible(false);
  };

  // Fonction pour gérer la suppression de la carte
  const handleDeleteCard = () => {
    setModalVisible(false); // Ferme le modal de confirmation de suppression de carte
    setModalCardVisible(true); // Ouvre le modal de confirmation de suppression de carte
    setTimeout(() => {
      setModalCardVisible(false); // Ferme le modal de confirmation après 3 secondes
      navigation.navigate("MoyenDePaiement"); // Navigue vers la même page pour rafraîchir les données
    }, 3000);
  };

  // Fonction pour gérer la suppression du compte
  const handleDeleteAccount = () => {
    setModalDeleteAccountVisible(true); // Ouvre le modal de confirmation de suppression de compte
    setTimeout(() => {
      setModalDeleteAccountVisible(false); // Ferme le modal de confirmation après 3 secondes
      navigation.navigate("Home"); // Navigue vers la page d'accueil
    }, 3000);
  };

  return (
    <>
      <Header
        title="INFINITE CUT"
        colorUser={true}
        colorScissors={false}
        navigation={navigation}
      />
      <SubHeaderProfile
        firstText="Mes RDV"
        secondText="Mon compte"
        styleSecondText="Montserrat_600SemiBold"
        navigation={navigation}
      />
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.page}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          ></KeyboardAvoidingView>
          {/* Modal pour confirmer la suppression de la carte */}
          <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  onPress={() => handleClose()}
                  style={styles.button}
                  activeOpacity={0.8}
                >
                  <Entypo name="squared-cross" size={30} color="#C6AC8F" />
                </TouchableOpacity>
                <Text style={styles.textModal}>
                  Vous êtes sur le point de supprimer la carte bancaire de votre
                  compte.
                </Text>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => handleDeleteCard()}
                >
                  <Text style={styles.confirmButtonText}>Confirmer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Modal pour confirmer la suppression de la carte */}
          <Modal visible={modalCardVisible} animationType="fade" transparent>
            <View style={styles.centeredCardView}>
              <View style={styles.modalCardView}>
                <Text style={styles.textCardModal}>
                  Votre carte a bien été supprimée.
                </Text>
              </View>
            </View>
          </Modal>
          <View style={styles.container}>
            <View style={styles.upperContainer}>
              <View style={styles.informationPerso}>
                <Text style={styles.title}>Moyen de paiement</Text>
                <Text style={styles.subTitle}>Votre carte</Text>
                <View style={styles.creditCard}>
                  <FontAwesome name="credit-card" size={24} color="black" />
                  <Text style={styles.creditCardNumber}>
                    **** **** **** **67
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.deleteCard}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.deleteCard}>Supprimer carte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => addCreditCard()}
              >
                <Text style={styles.textButton}>Ajouter carte</Text>
              </TouchableOpacity>
            </View>
            {/* Modal pour confirmer la suppression du compte */}
            <Modal
              visible={modalDeleteAccountVisible}
              animationType="fade"
              transparent
            >
              <View style={styles.centeredCardDeleteAccountView}>
                <View style={styles.modalCardDeleteAccountView}>
                  <Text style={styles.textCardDeleteAccountModal}>
                    La suppression de votre compte a bien été prise en compte.
                  </Text>
                </View>
              </View>
            </Modal>
            <View style={styles.bottomPage}>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteAccount()}
              >
                <Text style={styles.textDeleteButton}>Supprimer compte</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomIconContainer}>
            <MaterialIcons
              name="read-more"
              size={24}
              color="#5E503F"
              onPress={() => navigation.navigate("RDVs")}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#EAE0D5",
    flex: 1,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: 15,
    letterSpacing: 5,
    marginBottom: 15,
  },
  subTitle: {
    color: "#5E503F",
    fontSize: 25,
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  creditCard: {
    backgroundColor: "white",
    height: "15%",
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  creditCardNumber: {
    letterSpacing: 8,
    margin: 10,
    fontFamily: "Montserrat_500Medium",
  },
  upperContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  deleteCard: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Montserrat_500Medium",
  },
  buttonAdd: {
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
    letterSpacing: 5,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  buttonDelete: {
    width: 200,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderColor: "red",
    borderWidth: 2,
  },
  textDeleteButton: {
    color: "red",
    letterSpacing: 2,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  bottomPage: {
    alignItems: "center",
    margin: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredCardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredCardDeleteAccountView: {
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    elevation: 5,
  },
  modalCardDeleteAccountView: {
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
    elevation: 5,
  },
  textModal: {
    color: "#5E503F",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  textCardModal: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  textCardDeleteAccountModal: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  confirmButton: {
    width: 200,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderWidth: 2,
    borderColor: "#C6AC8F",
  },
  confirmButtonText: {
    color: "#C6AC8F",
    letterSpacing: 2,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  bottomIconContainer: {
    alignItems: "center",
  },
});
