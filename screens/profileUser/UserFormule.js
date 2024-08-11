import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function UserFormule({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeleteFormuleVisible, setModalDeleteFormuleVisible] =
    useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleDeleteCard = () => {
    setModalVisible(true);
  };

  const handleDeleteFormule = () => {
    setModalVisible(false);
    setModalDeleteFormuleVisible(true);
    setTimeout(() => {
      setModalDeleteFormuleVisible(false);
    }, 2400);
    setTimeout(() => {
      navigation.navigate("DatePicker");
    }, 2500);
  };

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
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
            styleFirstText="500"
          />
        </View>
        <Text style={styles.title}>Ma formule</Text>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require("../../assets/formule_essentiel.jpg")}
            style={styles.cardFormule}
            imageStyle={{ borderRadius: 20 }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "white",
                letterSpacing: 10,
                margin: 10,
                fontWeight: "bold",
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
                  Vous êtes sur le point de supprimer la formule d'abonnement de
                  votre compte.
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
          <Modal
            visible={modalDeleteFormuleVisible}
            animationType="fade"
            transparent
          >
            <View style={styles.centeredCardView}>
              <View style={styles.modalCardView}>
                <Text style={styles.textCardModal}>
                  Votre formule a bien été supprimée. {"\n"}Et si on prenait un
                  rendez-vous ?
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
        <View style={styles.bottomPage}>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("FavoriteBarber")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  bottomPage: {
    alignItems: "center",
    margin: 30,
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
});
