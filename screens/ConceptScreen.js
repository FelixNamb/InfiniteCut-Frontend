import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

export default function ConceptScreen({ navigation }) {
  return (
    <View styles={styles.container}>
      <Header
          title="INFINITE CUT"
          colorUser={false}
          colorScissors={false}
          navigation={navigation}
        />
      <LinearGradient colors={["#EAE0D5", "#C6AC8F"]} >
        
        <View style={styles.upper}>
          <Text style={styles.title}>Beau et soigné quand vous voulez.</Text>
          <Text style={styles.subTitle}>
            Réservez vos séances facilement et gérez vos rendez-vous en toute
            tranquilité. {"\n"}
            {"\n"}Faites des économies, chaque mois.{"\n"}
            {"\n"}Profitez d'abonnements avantageux pour des services de qualité
          </Text>
        </View>
<View style={styles.bottompage}>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={50}
          color="#2233B"
          onPress={() => navigation.navigate("Connection")}
        />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center" 
  },
  upper: {
    height: 450,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#5E503F",
    padding: 10,
  },
  subTitle: {
    fontSize: 25,
    color: "#5E503F",
    padding: 15,
  },
  bottompage: {
    alignItems: "center",
    width: 130,
    margin: 120,
    justifyContent: "center"
  }
  
});
