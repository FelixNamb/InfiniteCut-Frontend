import Header from "../../components/Header";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function ConceptScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="INFINITE CUT"
        colorUser={false}
        colorScissors={false}
        navigation={navigation}
      />

      <LinearGradient style={styles.gradient} colors={["#EAE0D5", "#C6AC8F"]}>
        <Text style={styles.title}>Beau et soigné{"\n"}quand vous voulez.</Text>
        <View style={styles.upper}>
          <Text style={styles.subTitle}>
            Réservez vos séances facilement et gérez vos rendez-vous en toute
            tranquillité.{"\n"}
            {"\n"}Faites des économies, chaque mois.{"\n"}
            {"\n"}Profitez d'abonnements avantageux pour des services de qualité
          </Text>
        </View>

        <View style={styles.bottomPage}>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("Connection")}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upper: {
    height: "50%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#5E503F",
    padding: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 25,
    color: "#5E503F",
    textAlign: "center",
    paddingVertical: 20,
  },
  bottomPage: {
    alignItems: "center",
    width: "100%",
    height: "15%",
    marginBottom: 30,
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
