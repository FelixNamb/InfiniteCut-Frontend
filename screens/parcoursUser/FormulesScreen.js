import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native"; // Import des composants de base de React Native
import Header from "../../components/Header"; // Import du composant Header personnalisé
import CardFlip from "react-native-card-flip"; // Import de la bibliothèque pour l'animation de flip des cartes
import React, { useRef } from "react"; // Import de React et de l'utilisation des références
import { useDispatch } from "react-redux"; // Import de l'utilisation de dispatch pour Redux
import { addFormule } from "../../reducers/formules"; // Import de l'action addFormule du reducer formules
import { StatusBar } from "expo-status-bar"; // Import du composant StatusBar d'Expo

export default function FormulesScreen({ navigation }) {
  // Définition du composant principal FormulesScreen
  // Références pour chaque carte afin de permettre l'animation de flip
  const cardEssentielRef = useRef(null);
  const cardPremiumRef = useRef(null);
  const cardExclusifRef = useRef(null);

  // Variables contenant le nom des formules
  const essentiel = "ESSENTIEL";
  const premium = "PREMIUM";
  const exclusif = "EXCLUSIF";

  // URL du backend pour l'API, récupérée depuis les variables d'environnement
  const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;

  // Utilisation du hook useDispatch de Redux pour dispatcher les actions
  const dispatch = useDispatch();

  // Fonction de gestion de la prise d'une formule
  const handleTakeFormula = (name) => {
    fetch(`${urlBackend}/formules/${name}`) // Appel à l'API pour récupérer les détails de la formule
      .then((response) => response.json()) // Conversion de la réponse en JSON
      .then((data) => {
        console.log(data); // Affichage des données récupérées dans la console
        if (data.result) {
          // Vérifie si le résultat est valide
          const newObj = {
            // Création d'un nouvel objet formule avec les détails récupérés
            nom: data.formule.nom,
            prix: data.formule.prix,
            details: data.formule.details,
          };
          dispatch(addFormule(newObj)); // Dispatch de l'action addFormule avec l'objet créé
        }

        navigation.navigate("Pay"); // Navigation vers l'écran de paiement
      });
  };

  return (
    <>
      <Header
        title="INFINITE CUT" // Affiche le titre dans le header
        colorScissors={false} // Définition des couleurs pour les icônes
        colorUser={true}
        navigation={navigation}
      />
      <StatusBar style="light" /> {/* Statut de la barre de style */}
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nos Formules</Text>{" "}
          {/* Titre de la page */}
        </View>

        {/* Début de la carte Essentiel */}
        <CardFlip style={styles.cardsContainer} ref={cardEssentielRef}>
          <TouchableOpacity
            style={styles.cardVerso}
            onPress={() => cardEssentielRef.current.flip()} // Animation de flip au clic
          >
            <View style={styles.cardEssentielContainer}>
              <ImageBackground
                source={require("../../assets/formule_essentiel.jpg")} // Image de fond de la carte
                alt="formule essentiel"
                style={styles.cardEssentiel}
                imageStyle={{ borderRadius: 20 }}
              >
                <View style={styles.cardEssentielView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "white",
                      letterSpacing: 15,
                      fontFamily: "Montserrat_500Medium",
                      margin: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {essentiel} {/* Affichage du nom de la formule */}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => cardEssentielRef.current.flip()} // Flip de la carte sur "Voir Plus"
                  >
                    <Text style={styles.textButton}>VOIR PLUS</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>

          {/* Verso de la carte Essentiel */}
          <TouchableOpacity
            style={styles.cardEssentielContainer}
            onPress={() => cardEssentielRef.current.flip()} // Flip de la carte
          >
            <View style={styles.contentCardVerso}>
              <Text style={styles.textContentCardverso}>
                Fréquence : 3 / mois {"\n"} Engagement : 6 mois minimum {"\n"}
                Prestations : shampooing - coupe - coiffage{" "}
                {/* Détails de la formule */}
              </Text>
              <Text style={styles.price}>39.99 €</Text>{" "}
              {/* Affichage du prix */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleTakeFormula(essentiel)} // Gestion de la sélection de la formule
              >
                <Text style={styles.textButton}>CHOISIR</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </CardFlip>

        {/* Carte Premium et Exclusif suivent le même format que Essentiel */}
        <CardFlip style={styles.cardsContainer} ref={cardPremiumRef}>
          {/* Contenu similaire pour la carte Premium */}
        </CardFlip>

        <CardFlip style={styles.cardsContainer} ref={cardExclusifRef}>
          {/* Contenu similaire pour la carte Exclusif */}
        </CardFlip>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EAE0D5",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#C6AC8F",
    borderColor: "#5E503F",
    borderWidth: 1,
    marginTop: 10,
  },
  cardEssentiel: {
    height: "100%",
    width: "100%",
  },
  cardPremiumContainer: {
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  cardPremium: {
    height: "100%",
    width: "100%",
  },
  cardExclusifContainer: {
    width: "100%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  cardExclusif: {
    height: "100%",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30,
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 15,
  },
  textButton: {
    color: "white",
    letterSpacing: 5,
    fontFamily: "Montserrat_500Medium",
  },
  cardEssentielView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardPremiumView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardExclusifView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentCardVerso: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    height: 170,
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Montserrat_500Medium",
  },
  textContentCardverso: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
});
