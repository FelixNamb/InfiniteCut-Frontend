import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from '../components/Header'

export default function ConceptScreen({ navigation }) {
  return (
    <SafeAreaView styles={styles.container}>
      <Header title='INFINITE CUT' colorUser={false} colorScissors={false} navigation={navigation}/>
      <View style={styles.upper}>
        <Text style={styles.title}>Beau et soigné quand vous voulez.</Text>
        <Text style={styles.subTitle}>
          Réservez vos séances facilement et gérez vos rendez-vous en toute
          tranquilité. {"\n"}
          {"\n"}Faites des économies, chaque mois.{"\n"}
          {"\n"}Profitez d'abonnements avantageux pour des services de qualité
        </Text>
      </View>
      <View style={styles.bottomPage}>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={50}
          color="#C6AC8F"
          margin="10"
          onPress={() => navigation.navigate("Connection")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
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
  bottomPage: {
    alignItems: "center",
    width: 370,
    margin: 20,
    justifyContent: "center",
  },
});
