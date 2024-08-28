// Importation des composants nécessaires depuis React Native
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Composant SubHeaderProfile qui reçoit des props pour la navigation et le style
export default function SubHeaderProfile(props) {
  // Fonction de navigation pour le bouton gauche
  const handleNavigationLeft = () => {
    if (props.firstText === "Mes informations") {
      // Navigation vers "MesInformationsPro" si le texte de gauche est "Mes informations"
      props.navigation.navigate("MesInformationsPro");
    } else {
      // Sinon, navigation vers "RDVs"
      props.navigation.navigate("RDVs");
    }
  };

  // Fonction de navigation pour le bouton droit
  const handleNavigationRight = () => {
    if (props.secondText === "Mes chiffres") {
      // Navigation vers "MesChiffres" si le texte de droite est "Mes chiffres"
      props.navigation.navigate("MesChiffres");
    } else {
      // Sinon, navigation vers "MesInformations"
      props.navigation.navigate("MesInformations");
    }
  };

  // Affichage du sous-en-tête
  return (
    <View style={styles.container}>
      {/* Bouton gauche avec texte dynamique et fonction de navigation */}
      <TouchableOpacity onPress={() => handleNavigationLeft()}>
        <Text
          style={{
            color: "#22333B", // Couleur du texte
            fontSize: 18, // Taille de la police
            fontFamily: props?.styleFirstText
              ? props.styleFirstText
              : "Montserrat_500Medium", // Style de police dynamique
          }}
        >
          {props.firstText}
        </Text>
      </TouchableOpacity>

      {/* Séparateur visuel entre les deux boutons */}
      <View style={styles.divider}></View>

      {/* Bouton droit avec texte dynamique et fonction de navigation */}
      <TouchableOpacity onPress={() => handleNavigationRight()}>
        <Text
          style={{
            color: "#22333B", // Couleur du texte
            fontSize: 18, // Taille de la police
            fontFamily: props?.styleSecondText
              ? props.styleSecondText
              : "Montserrat_500Medium", // Style de police dynamique
          }}
        >
          {props.secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderBottomColor: "#22333B",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    color: "#22333B",
    fontSize: 18,
  },
  divider: {
    borderRightWidth: 1,
    borderColor: "#22333B",
    height: 20,
  },
});
