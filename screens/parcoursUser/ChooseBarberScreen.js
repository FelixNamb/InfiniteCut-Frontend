import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native"; // Import des composants de base de React Native
import { useEffect, useState } from "react"; // Import des hooks useEffect et useState
import Octicons from "@expo/vector-icons/Octicons"; // Import d'une icône de la librairie @expo/vector-icons
import Header from "../../components/Header"; // Import du composant Header personnalisé
import Entypo from "@expo/vector-icons/Entypo"; // Import d'une icône de la librairie @expo/vector-icons
import MapView from "react-native-maps"; // Import de la carte depuis react-native-maps
import { Marker } from "react-native-maps"; // Import des marqueurs pour la carte
import { useDispatch, useSelector } from "react-redux"; // Import des hooks Redux pour gérer l'état global
import { addUser } from "../../reducers/addUserPro"; // Import de l'action addUser pour mettre à jour l'état Redux

export default function ChooseBarberScreen({ navigation }) {
  // Accès aux valeurs stockées dans le store Redux
  const addUserPro = useSelector((state) => state.addUserPro.value); // Sélectionne la valeur de addUserPro dans le store Redux
  const user = useSelector((state) => state.user.value); // Sélectionne la valeur de user dans le store Redux
  const dispatch = useDispatch(); // Crée une fonction de dispatch pour envoyer des actions à Redux

  // Déclaration des états locaux
  const [lieu, setLieu] = useState(null); // État pour stocker la localisation saisie par l'utilisateur
  const [isLiked, setIsLiked] = useState(false); // État pour gérer l'icône "j'aime"
  const [modalVisible, setModalVisible] = useState(false); // État pour gérer la visibilité du modal de détails
  const [modalData, setModalData] = useState(null); // État pour stocker les données du barbier sélectionné pour affichage dans le modal
  const [hasFormula, setHasFormula] = useState(false); // État pour savoir si l'utilisateur a une formule d'abonnement

  const [dataUsers, setDataUsers] = useState([]); // État pour stocker la liste des barbiers

  // Génération d'une liste d'étoiles pour l'évaluation
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }

  // Fonction pour fermer le modal
  const handleClose = () => {
    setModalVisible(false);
  };

  // Fonction pour gérer la navigation lorsque l'utilisateur sélectionne un barbier
  const handleNavigation = () => {
    dispatch(addUser(modalData)); // Ajoute les données du barbier sélectionné à l'état global Redux
    setModalVisible(false); // Ferme le modal
    if (hasFormula) {
      navigation.navigate("Pay"); // Si l'utilisateur a une formule d'abonnement, navigue vers l'écran de paiement
    } else {
      navigation.navigate("Formules"); // Sinon, navigue vers l'écran des formules d'abonnement
    }
  };

  // useEffect pour récupérer les données des barbiers depuis le backend et vérifier l'abonnement de l'utilisateur
  useEffect(() => {
    const urlBackend = "https://infinite-cut-backend.vercel.app/"; // URL du backend récupérée depuis les variables d'environnement
    fetch(`${urlBackend}/userPros`)
      .then((response) => response.json()) // Convertit la réponse en JSON
      .then((data) => {
        if (data.result) {
          const newUsers = [...dataUsers, ...data.users]; // Fusionne les données récupérées avec l'état local des utilisateurs
          setDataUsers(newUsers); // Met à jour l'état des utilisateurs
        }
      });
    fetch(`${urlBackend}/users/${user.token}`)
      .then((response) => response.json()) // Convertit la réponse en JSON
      .then((data) => {
        if (data.result) {
          if (data.user.formule) {
            setHasFormula(true); // Si l'utilisateur a une formule, met à jour l'état
          }
        }
      });
  }, []); // Le tableau de dépendances vide signifie que cet effet ne s'exécutera qu'une fois au montage du composant

  // Génération de la liste des barbiers sous forme de cartes
  const barbers = dataUsers.map((data, i) => {
    return (
      <TouchableOpacity
        key={i}
        onPress={() => {
          setModalData(data); // Stocke les données du barbier sélectionné
          setModalVisible(true); // Ouvre le modal pour afficher les détails
        }}
      >
        <View style={styles.card}>
          <View style={styles.leftCard}>
            <Image
              style={styles.img}
              source={require("../../assets/background_home.jpg")}
              alt="photo salon"
            />
            <View style={styles.nameAndNote}>
              <Text style={styles.barberName}>{data.nomEnseigne} </Text>
              <View style={styles.star}>{stars}</View>
            </View>
          </View>
          <Octicons
            name="heart-fill"
            size={30}
            color={isLiked ? "#C6AC8F" : "#22333B"} // Change la couleur de l'icône "j'aime" en fonction de l'état
            onPress={() => setIsLiked(!isLiked)} // Inverse l'état de "j'aime" lorsque l'utilisateur appuie
          />
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      {/* Modal pour afficher les détails du barbier */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.informationsAndImage}>
              <Image
                source={require("../../assets/background_home.jpg")}
                alt="photo salon"
                style={styles.image}
              />
              <View style={styles.informations}>
                <View style={styles.name}>
                  {modalData && (
                    <Text style={styles.barberName}>
                      {modalData.nomEnseigne}
                    </Text>
                  )}
                </View>
                <View style={styles.noteModal}>
                  <View style={styles.starsModal}>{stars}</View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleClose()} // Ferme le modal
                style={styles.button}
                activeOpacity={0.8}
              >
                <Entypo name="squared-cross" size={30} color="#C6AC8F" />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomModal}>
              <View style={styles.abonnement}>
                <Text style={styles.textAbonnement}>
                  Abonnements disponibles:
                </Text>
                <View style={styles.allFormulas}>
                  <TouchableOpacity style={styles.buttonFormula}>
                    <Text style={styles.textFormula}>Essentiel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonFormulaPremium}>
                    <Text style={styles.textFormulaPremium}>Premium</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {!hasFormula ? (
                // Affiche le bouton pour découvrir les formules si l'utilisateur n'a pas encore de formule
                <TouchableOpacity
                  style={styles.buttonToFormulas}
                  onPress={() => handleNavigation()}
                >
                  <Text style={styles.textButtonToFormula}>
                    Découvrez nos formules{"\n"}d'abonnement
                  </Text>
                </TouchableOpacity>
              ) : (
                // Affiche le bouton pour prendre rendez-vous si l'utilisateur a déjà une formule
                <TouchableOpacity
                  style={styles.buttonToFormulas}
                  onPress={() => handleNavigation()}
                >
                  <Text style={styles.textButtonToFormula}>
                    Prendre rendez-vous
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>

      {/* Affiche le composant Header */}
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={true}
        navigation={navigation}
      />
      <View style={styles.upperContainer}>
        {/* Barre de recherche pour entrer le lieu souhaité */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Où souhaitez-vous aller ?"
            value={lieu}
            onChangeText={(value) => setLieu(value)}
          />
          <Octicons name="search" size={24} color="#5E503F" />
        </View>
        {/* Liste des barbiers sous forme de cartes */}
        <ScrollView>{barbers}</ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        {/* Carte pour afficher la localisation des barbiers */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 45.75,
            longitude: 4.85,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Affiche un marqueur pour chaque barbier */}
          {dataUsers.map((data, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(data.lat),
                longitude: parseFloat(data.long),
              }}
              title={data.nomEnseigne}
              pinColor="red"
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  container: {
    height: "80%",
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
  barberName: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
  },
  textAbonnement: {
    fontFamily: "Montserrat_500Medium",
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
    letterSpacing: 3,
    fontFamily: "Montserrat_500Medium",
  },
  textFormulaPremium: {
    color: "#5E503F",
    letterSpacing: 3,
    fontFamily: "Montserrat_500Medium",
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
    letterSpacing: 3,
    fontFamily: "Montserrat_500Medium",
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
    height: "48%",
    borderTopColor: "#5E503F",
    borderTopWidth: 2,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
