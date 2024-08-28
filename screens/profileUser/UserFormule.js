import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native"; // Importation des composants de base de 'react-native'
import Entypo from "@expo/vector-icons/Entypo"; // Importation d'icônes Entypo
import { useState } from "react"; // Importation du hook useState pour gérer les états
import Header from "../../components/Header"; // Importation du composant Header
import SubHeaderProfile from "../../components/SubHeaderProfile"; // Importation du composant SubHeaderProfile
import { StatusBar } from "expo-status-bar"; // Importation de StatusBar pour gérer la barre de statut
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Importation d'icônes MaterialIcons

// Définition du composant fonctionnel UserFormule
export default function UserFormule({ navigation }) {
  // Déclaration des états locaux pour les modaux
  const [modalVisible, setModalVisible] = useState(false); // État pour la visibilité du modal de confirmation de suppression
  const [modalDeleteFormuleVisible, setModalDeleteFormuleVisible] =
    useState(false); // État pour la visibilité du modal de succès de suppression de formule

  // Fonction pour fermer le modal de confirmation de suppression
  const handleClose = () => {
    setModalVisible(false);
  };

  // Fonction pour ouvrir le modal de confirmation de suppression
  const handleDeleteCard = () => {
    setModalVisible(true);
  };

  // Fonction pour gérer la suppression de la formule
  const handleDeleteFormule = () => {
    setModalVisible(false); // Ferme le modal de confirmation de suppression
    setModalDeleteFormuleVisible(true); // Ouvre le modal de succès de suppression
    setTimeout(() => {
      setModalDeleteFormuleVisible(false); // Ferme le modal de succès après 2.4 secondes
    }, 2400);
    setTimeout(() => {
      navigation.navigate("DatePicker"); // Navigue vers l'écran de sélection de date après 2.5 secondes
    }, 2500);
  };

  return (
    <>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={true}
        navigation={navigation}
      />
      <SubHeaderProfile
        firstText="Mes RDV"
        secondText="Mon Compte"
        navigation={navigation}
        styleFirstText="Montserrat_600SemiBold"
      />
      <StatusBar style="light" />

      <SafeAreaView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Text style={styles.title}>Ma formule</Text>
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("../../assets/formule_essentiel.jpg")}
              alt="formule essentiel"
              style={styles.cardFormule}
              imageStyle={{ borderRadius: 20 }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  letterSpacing: 12,
                  margin: 10,
                  fontFamily: "Montserrat_500Medium",
                }}
              >
                ESSENTIEL
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.ButtonSection}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate("Formules")}
            >
              <Text style={styles.textButton}>Changer d'abonnement</Text>
            </TouchableOpacity>

            {/* Modal de confirmation de suppression */}
            <Modal visible={modalVisible} animationType="fade" transparent>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    onPress={() => handleClose()}
                    style={styles.iconContainer}
                    activeOpacity={0.8}
                  >
                    <Entypo name="squared-cross" size={30} color="#C6AC8F" />
                  </TouchableOpacity>
                  <Text style={styles.textModal}>
                    Vous êtes sur le point de supprimer la formule d'abonnement
                    de votre compte.
                  </Text>
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => handleDeleteFormule()}
                  >
                    <Text style={styles.confirmButtonText}>Confirmer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            {/* Modal de succès de suppression */}
            <Modal
              visible={modalDeleteFormuleVisible}
              animationType="fade"
              transparent
            >
              <View style={styles.centeredCardView}>
                <View style={styles.modalCardView}>
                  <Text style={styles.textCardModal}>
                    Votre formule a bien été supprimée. {"\n"} {"\n"}Et si on
                    prenait un rendez-vous ?
                  </Text>
                </View>
              </View>
            </Modal>

            <TouchableOpacity
              style={styles.Button}
              onPress={() => handleDeleteCard()}
            >
              <Text style={styles.textButton}>Résilier abonnement</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomIconContainer}>
          <MaterialIcons
            name="read-more"
            size={24}
            color="#5E503F"
            onPress={() => navigation.navigate("FavoriteBarber")}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    flexDirection: "column",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    marginTop: 15,
    letterSpacing: 5,
  },
  cardContainer: {
    width: "80%",
    height: "40%",
    borderRadius: 20,
    margin: 40,
  },
  cardFormule: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#5E503F",
    width: 180,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    letterSpacing: 2,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
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
    elevation: 5,
  },
  textCardModal: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  iconContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  bottomIconContainer: {
    alignItems: "center",
  },
});
