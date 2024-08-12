import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Modal,
  ImageBackground,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

export default function MesInformationsPro() {
  const [isModalVisible, setIsModalIvisible] = useState(false);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={32} color="#22333B" />);
  }

  const changeFormules = () => {
    setIsModalIvisible(true);
  };
  return (
    <SafeAreaView style={styles.page}>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View syle={styles.upperModal}>
              <Text style={styles.subtitle}>Quels sont vos choix ?</Text>
              <TouchableOpacity
                onPress={() => setIsModalIvisible(false)}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Entypo name="squared-cross" size={30} color="#C6AC8F" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.allFormules} horizontal={true}>
              <ImageBackground
                style={styles.backgroundImage}
                source={require("../../assets/formule_essentiel.jpg")}
              >
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.textModalButton}>Choisir</Text>
                </TouchableOpacity>
              </ImageBackground>
              <ImageBackground
                style={styles.backgroundImage}
                source={require("../../assets/formule_essentiel.jpg")}
              >
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.textModalButton}>Choisir</Text>
                </TouchableOpacity>
              </ImageBackground>
              <ImageBackground
                style={styles.backgroundImage}
                source={require("../../assets/formule_essentiel.jpg")}
              >
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.textModalButton}>Choisir</Text>
                </TouchableOpacity>
              </ImageBackground>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Header title="INFINITE CUT" colorScissors={true} colorUser={false} />
        <SubHeaderProfile
          firstText="Mes informations"
          secondText="Mes chiffres"
          styleFirstText="600"
        />
      </View>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            source={require("../../assets/formule_essentiel.jpg")}
            alt="Photo coiffeur"
            style={styles.img}
          />
          <View style={styles.informations}>
            <Text style={styles.subtitle}> Le Barbier de Lyon 7ème</Text>
            <Text>
              {"\n"}35 rue de Marseille, 69007 Lyon{"\n"}
              {"\n"}04 01 02 03 05{"\n"}
              {"\n"}Du mardi au dimanche, de 9h à 19h{"\n"}
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Prestations :</Text>
        <View style={styles.formules}>
          <TouchableOpacity style={styles.nomFormuleEssentiel}>
            <Text style={styles.textNomFormule}>ESSENTIEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nomFormulePremium}>
            <Text style={styles.textNomFormulePremium}>PREMIUM</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => changeFormules()}
        >
          <Text style={styles.textButton}>Modifier</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Note :</Text>
        <View style={styles.stars}>{stars}</View>
        <TouchableOpacity style={styles.button} onPress={() => showNotes()}>
          <Text style={styles.textButton}>Tous les avis</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
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
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    marginTop: "5%",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 10,
  },
  informations: {
    width: "50%",
  },
  subtitle: {
    fontWeight: "500",
    textAlign: "center",
  },
  formules: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  nomFormuleEssentiel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E503F",
    borderRadius: 20,
    height: 35,
    width: 120,
  },
  textNomFormule: {
    color: "white",
    letterSpacing: 3,
    fontWeight: "700",
  },
  nomFormulePremium: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 35,
    width: 120,
    borderWidth: 2,
    borderColor: "#5E503F",
  },
  textNomFormulePremium: {
    color: "#C6AC8F",
    letterSpacing: 3,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#5E503F",
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  textButton: {
    color: "#EAE0D5",
  },
  stars: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
