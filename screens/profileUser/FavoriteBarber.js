// Importations des modules et composants nécessaires depuis 'react-native' et d'autres packages
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Header from "../../components/Header"; // Importation du composant Header
import SubHeaderProfile from "../../components/SubHeaderProfile"; // Importation du composant SubHeaderProfile
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Importation d'icônes Material Icons
import Octicons from "@expo/vector-icons/Octicons"; // Importation d'icônes Octicons
import { useState } from "react"; // Importation du hook useState pour la gestion de l'état
import { StatusBar } from "expo-status-bar"; // Importation du composant StatusBar d'Expo

// Création d'un tableau d'étoiles remplis pour les évaluations
const stars = [];
for (let i = 0; i < 5; i++) {
  stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
}

// Définition du composant fonctionnel FavoriteBarber
export default function FavoriteBarber({ navigation }) {
  // Déclaration d'un état local pour savoir si un salon est aimé ou non
  const [isLiked, setIsLiked] = useState(true);

  return (
    <>
      {/* En-tête du composant avec le titre et les icônes */}
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={true}
        navigation={navigation}
      />
      {/* Sous-en-tête avec des boutons de navigation */}
      <SubHeaderProfile
        firstText="Mes RDV"
        secondText="Mon Compte"
        navigation={navigation}
        styleFirstText="Montserrat_600SemiBold"
      />
      <SafeAreaView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Barre de statut */}
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mes salons favoris</Text>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView>
              {/* Carte représentant un salon favori */}
              {[...Array(5)].map((_, index) => (
                <View key={index} style={styles.card}>
                  <View style={styles.leftCard}>
                    <Image
                      style={styles.img}
                      source={require("../../assets/background_home.jpg")}
                      alt="photo du salon de coiffure"
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
                    onPress={() => setIsLiked(!isLiked)} // Changement de l'état de l'icône coeur lors du clic
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* Icône en bas de l'écran pour naviguer vers une autre page */}
        <View style={styles.bottomIconContainer}>
          <MaterialIcons
            name="read-more"
            size={24}
            color="#5E503F"
            onPress={() => navigation.navigate("MoyenDePaiement")}
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
  titleContainer: {
    marginTop: 15,
    width: "100%",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
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
    margin: 5,
    marginTop: 15,
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
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "70%",
    margin: 20,
  },
  bottomIconContainer: {
    alignItems: "center",
  },
});
