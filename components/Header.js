// Importation des composants nécessaires depuis React Native
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// Importation des icônes FontAwesome depuis Expo
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Importation de 'useSelector' pour accéder à l'état Redux
import { useSelector } from "react-redux";

// Composant Header qui reçoit des props pour la navigation et les couleurs
export default function Header(props) {
  // Sélection des valeurs des utilisateurs (user et userPro) depuis l'état Redux
  const user = useSelector((state) => state.user.value);
  const userPro = useSelector((state) => state.userPro.value);

  // Structure de l'entête
  return (
    <SafeAreaView style={styles.header}>
      {/* Conteneur principal de l'entête */}
      <View style={styles.dispositionHeader}>
        {/* Bouton avec icône de ciseaux, redirige vers "MyAgenda" si l'utilisateur n'est pas connecté */}
        <TouchableOpacity
          onPress={() => !user.token && props.navigation.navigate("MyAgenda")}
        >
          <FontAwesome6
            name="scissors"
            size={32}
            color={props.colorScissors ? "#22333B" : "#C6AC8F"} // Couleur dynamique basée sur la prop colorScissors
          />
        </TouchableOpacity>

        {/* Titre de l'en-tête, redirige vers "MyAgenda" ou "RDVs" selon le statut de connexion */}
        <TouchableOpacity
          onPress={() =>
            (!user.token && props.navigation.navigate("MyAgenda")) ||
            (!userPro.token && props.navigation.navigate("RDVs"))
          }
        >
          <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

        {/* Bouton avec icône de profil utilisateur, redirige vers "MesInformations" si l'utilisateur professionnel n'est pas connecté */}
        <TouchableOpacity
          onPress={() =>
            !userPro.token && props.navigation.navigate("MesInformations")
          }
        >
          <FontAwesome
            name="user-circle"
            size={32}
            color={props.colorUser ? "#22333B" : "#C6AC8F"} // Couleur dynamique basée sur la prop colorUser
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Définition des styles pour le composant
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  dispositionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 4,
  },
});
