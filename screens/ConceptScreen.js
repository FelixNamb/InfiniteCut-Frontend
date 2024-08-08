import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

export default function ConceptScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
            color="#5E503F"
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
    height: "10%",
    justifyContent: "flex-end",
    marginLeft: 10,  
  },
  gradient:{
    flex:1,
    justifyContent: "space-evenly",
    alignItems:"center"

  }
});
