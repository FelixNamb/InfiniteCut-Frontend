import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Header from "../../components/Header";
import Entypo from "@expo/vector-icons/Entypo";

export default function ChooseBarberScreen({ navigation }) {
  const [lieu, setLieu] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleNavigation = () => {
    setModalVisible(false);
    navigation.navigate("Formules");
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.informationsAndImage}>
              <Image
                source={require("../../assets/background_home.jpg")}
                style={styles.image}
              />
              <View style={styles.informations}>
                <View style={styles.name}>
                  <Text>Le Barbier de {"\n"}Lyon 7ème</Text>
                </View>
                <View style={styles.noteModal}>
                  <View style={styles.starsModal}>{stars}</View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleClose()}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Entypo name="squared-cross" size={30} color="#C6AC8F" />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomModal}>
              <View style={styles.abonnement}>
                <Text>Abonnements disponibles:</Text>
                <View style={styles.allFormulas}>
                  <TouchableOpacity style={styles.buttonFormula}>
                    <Text style={styles.textFormula}>Essentiel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFormulaPremium}>
                    <Text style={styles.textFormulaPremium}>Premium</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.buttonToFormulas}
                onPress={() => handleNavigation()}
              >
                <Text style={styles.textButtonToFormula}>
                  Découvrez nos formules{"\n"}d'abonnement
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <View style={styles.upperContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Où souhaitez-vous aller ?"
            value={lieu}
            onChangeText={(value) => setLieu(value)}
          />
          <Octicons name="search" size={24} color="#5E503F" />
        </View>
        <ScrollView>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={50}
          color="#C6AC8F"
        />
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  informationsAndImage: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flex: 1,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 20,
    marginRight: 5,
  },
  informations: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noteModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  starsModal: {
    flexDirection: "row",
  },
  bottomModal: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 175,
    width: "80%",
  },
  abonnement: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  allFormulas: {
    flexDirection: "row",
  },
  buttonFormula: {
    marginTop: 20,
    height: 40,
    width: 110,
    borderRadius: 20,
    backgroundColor: "#5E503F",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5E503F",
    borderWidth: 1,
  },
  buttonFormulaPremium: {
    marginTop: 20,
    height: 40,
    width: 110,
    borderRadius: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#5E503F",
    borderWidth: 1,
  },
  textFormula: {
    color: "white",
    letterSpacing: 2,
  },
  textFormulaPremium: {
    color: "#5E503F",
    letterSpacing: 2,
  },
  buttonToFormulas: {
    width: 250,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderColor: "#5E503F",
    borderWidth: 1,
  },
  textButtonToFormula: {
    color: "#5E503F",
    textAlign: "center",
    letterSpacing: 2,
  },
  upperContainer: {
    marginTop: 50,
    height: "55%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  input: {
    color: "#5E503F",
    fontSize: 18,
    fontWeight: "200",
    borderBottomWidth: 1,
    borderBottomColor: "#5E503F",
    letterSpacing: 2,
    margin: 10,
  },
  card: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  leftCard: {
    flexDirection: "row",
    height: 85,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  nameAndNote: {
    flexDirection: "column",
  },
  star: {
    flexDirection: "row",
  },
  img: {
    height: 85,
    width: 85,
    borderRadius: 20,
    marginRight: 5,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});
