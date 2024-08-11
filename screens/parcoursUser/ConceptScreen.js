import Header from "../../components/Header";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import {LinearTextGradient} from "react-native-text-gradient";

export default function ConceptScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>Beau et soigné{"\n"}quand vous voulez.</Text>
        <View style={styles.upper}>
          <Text style={styles.subTitle}>
            Réservez vos séances facilement et gérez vos rendez-vous en toute
            tranquillité.{"\n"}
            {"\n"}Faites des économies, chaque mois.{"\n"}
          </Text>
          <Text style={styles.subTitleColor}>{"\n"}Profitez d'abonnements avantageux pour des services de qualité</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  upper: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#C6AC8F",
    padding: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 25,
    color: "#C6AC8F",
    textAlign: "center",
  },
  subTitleColor: {
    color: "#5E503F",
    fontSize: 25,
    textAlign: "center",
  },
  upperContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
