import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function ConceptScreen() {
  return (
    <View styles={styles.container}>
      <LinearGradient colors={["#EAE0D5", "#C6AC8F"]} style={styles.gradient} />

      <View style={styles.bottomPage}>
        <Text style={styles.text}>Beau et soigné quand vous voulez</Text>
        <Text style={styles.soustext}>
          Réservez vos séances facilement et gérez vos rendez-vous en toute
          tranquilité. Faites des économies, chaque mois Profitez d'abonnements
          avantageux pour des services de qualité
        </Text>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={50}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  text: {
    backgroundColor: "transparent",
    fontSize: 25,
    color: "#C6AC8F",
  },
  soustext: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#C6AC8F",
  },
});
