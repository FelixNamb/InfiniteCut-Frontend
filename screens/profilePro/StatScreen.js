import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function StatScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Et si on parlait chiffres ?</Text>
      </View>
      <View style={styles.squareContainer}>
        <View style={styles.squareOne}>
          <Text style={styles.textCapital}>+50 000</Text>
          <Text style={styles.text}>salons & instituts</Text>
        </View>
        <View style={styles.squareTwo}>
          <Text style={styles.textCapital}>+ 6 millions d'€</Text>
          <Text style={styles.text}>de rendez-vous vendus</Text>
        </View>
        <View style={styles.squareThree}>
          <Text style={styles.textCapital}>60% d'appel</Text>
          <Text style={styles.text}>en moins au salon</Text>
        </View>
        <View style={styles.squareFour}>
          <Text style={styles.textCapital}>75%</Text>
          <Text style={styles.text}>de rendez-vous sauvés</Text>
        </View>
      </View>
      <MaterialIcons
        name="read-more"
        size={24}
        color="#5E503F"
        onPress={() => navigation.navigate("SignUpPro")}
        style={styles.icon}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
  },

  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  squareContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    marginTop: 20,
  },
  squareOne: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderColor: "#000000",
    borderTopLeftRadius: 10,
  },
  squareTwo: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 2,
    borderColor: "#000000",
    borderTopRightRadius: 10,
  },
  squareThree: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "#000000",
    borderBottomLeftRadius: 10,
  },
  squareFour: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 2,
    borderColor: "#000000",
    borderBottomRightRadius: 10,
  },
  textCapital: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  text: {
    color: "#C6AC8F",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  icon: {
    marginTop: 110,
  },
});
