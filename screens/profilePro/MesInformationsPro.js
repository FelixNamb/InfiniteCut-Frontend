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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function MesInformationsPro({ navigation }) {
  const userPro = useSelector((state) => state.userPro.value);
  const [isModalVisible, setIsModalvisible] = useState(false);
  const [infoUserPro, setInfoUserPro] = useState({});

  const essentiel = "ESSENTIEL";
  const premium = "PREMIUM";
  const exclusif = "EXCLUSIF";

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < 4) {
      stars.push(
        <Octicons key={i} name="star-fill" size={32} color="#C6AC8F" />
      );
    } else {
      stars.push(
        <Octicons key={i} name="star-fill" size={32} color="#22333B" />
      );
    }
  }

  useEffect(() => {
    const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;
    fetch(`${urlBackend}/userpros/${userPro.token}`)
    .then(response => response.json())
    .then(data => {
      if(data.result){
        setInfoUserPro(data.user);
      }
    })
  }, [])

  const formules = infoUserPro["formules"]?.map((data,i) => {
    if(data.nom === "ESSENTIEL"){
      return (
        <TouchableOpacity key={i} style={styles.nomFormuleEssentiel}>
          <Text style={styles.textNomFormule}>{data.nom}</Text>
        </TouchableOpacity>
      )
    } else if (data.nom === "PREMIUM"){
      return(
        <TouchableOpacity key={i} style={styles.nomFormulePremium}>
          <Text style={styles.textNomFormulePremium}>{data.nom}</Text>
        </TouchableOpacity>
      )
    } else {
      return(
        <TouchableOpacity key={i} style={styles.nomFormuleExclusif}>
          <Text style={styles.textNomFormuleExclusif}>{data.nom}</Text>
        </TouchableOpacity>
      )
    }
  })
  // console.log(infoUserPro["formules"]);
  const changeFormules = () => {
    setIsModalvisible(true);
  };

  const handleChoisirFormule = (name) => {
    const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;
    fetch(`${urlBackend}/formules/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          fetch(`${urlBackend}/userpros`, {
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: infoUserPro.token,
              _ObjectId: data._id,
            }),
          })
          .then(response => response.json())
          .then(newData => {
            console.log(newData);
          })
        }
      });
      setIsModalvisible(false);
  }

  return (
    <View style={styles.page}>
      <Modal visible={isModalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.cross}>
              <TouchableOpacity
                onPress={() => setIsModalvisible(false)}
                activeOpacity={0.8}
              >
                <Entypo name="squared-cross" size={30} color="#C6AC8F" />
              </TouchableOpacity>
            </View>
            <View syle={styles.upperModal}>
              <Text style={styles.subtitle}>Quels sont vos choix ?</Text>
            </View>
            <ScrollView style={styles.allFormules} horizontal={true}>
              <View style={styles.formules}>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={require("../../assets/formule_essentiel.jpg")}
                >
                  <Text style={styles.textModal}>{essentiel}</Text>
                  <TouchableOpacity style={styles.modalButton} onPress={() => handleChoisirFormule(essentiel)}>
                    <Text style={styles.textModalButton}>Choisir</Text>
                  </TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={require("../../assets/formule_premium.jpg")}
                >
                  <Text style={styles.textModal}>{premium}</Text>
                  <TouchableOpacity style={styles.modalButton} onPress={() => handleChoisirFormule(premium)}>
                    <Text style={styles.textModalButton}>Choisir</Text>
                  </TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={require("../../assets/formule_exclusif.jpg")}
                >
                  <Text style={styles.textModal}>{exclusif}</Text>
                  <TouchableOpacity style={styles.modalButton} onPress={() => handleChoisirFormule(exclusif)}>
                    <Text style={styles.textModalButton}>Choisir</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Header
          title="INFINITE CUT"
          colorScissors={true}
          colorUser={false}
          navigation={navigation}
        />
        <SubHeaderProfile
          firstText="Mes informations"
          secondText="Mes chiffres"
          styleFirstText="600"
          navigation={navigation}
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
            <Text style={styles.subtitle}>{infoUserPro.nomEnseigne}</Text>
            <Text style={{ fontFamily: "Montserrat_400Regular" }}>
              {"\n"}{infoUserPro.adresse}{"\n"}
              {"\n"}{infoUserPro.mobile}{"\n"}
              {"\n"}Du mardi au dimanche, de 9h à 19h{"\n"}
            </Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Prestations :</Text>
        <View style={styles.formules}>
          {formules}
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
    </View>
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
    width: "90%",
    height: 330,
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
  formules: {
    flexDirection: "row",
  },
  cross: {
    width: "90%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 300,
    height: 250,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textModal: {
    color: "white",
    fontSize: 32,
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 5,
  },
  modalButton: {
    width: 150,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textModalButton: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 4,
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
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
    letterSpacing: 2,
  },
  formules: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  nomFormuleEssentiel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5E503F",
    borderRadius: 20,
    height: 50,
    width: 150,
    marginTop: 10,
  },
  textNomFormule: {
    color: "white",
    letterSpacing: 5,
    fontFamily: "Montserrat_700Bold",
  },
  nomFormulePremium: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    width: 150,
    borderWidth: 2,
    borderColor: "#5E503F",
  },
  textNomFormulePremium: {
    color: "#C6AC8F",
    letterSpacing: 5,
    fontFamily: "Montserrat_700Bold",
  },
  nomFormuleExclusif:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 50,
    width: 150,
    borderWidth: 2,
    backgroundColor:"#C6AC8F",
    borderColor: "#5E503F",
  },
  textNomFormuleExclusif:{
    color: "white",
    letterSpacing: 5,
    fontFamily: "Montserrat_700Bold",
  },
  button: {
    backgroundColor: "#5E503F",
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  textButton: {
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 3,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
