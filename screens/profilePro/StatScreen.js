import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function StatScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Et si on parlait</Text>
        <Text style={styles.subtitle}>chiffres</Text>
        <Text style={styles.dot}>.</Text>
      </View>
      <View style={styles.squareOne}>
        <View style={styles.textOne}>+50 000</View>
      </View>
      <View style={styles.squareTwo}>
        <View style={styles.textOne}>+ 6 milliards</View>
      </View>
      <View style={styles.squareThree}>
        <View style={styles.textOne}>60% d’appel</View>
      </View>
      <View style={styles.squareFour}>
        <View style={styles.textOne}>75</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
  upperViewText: {
    margin: 0,
    padding: 0,
    width: "100%",
  },
  underline: {
    flexDirection: "row",
  },
  title: {
    color: "#5E503F",
    color: "#5E503F",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 4,
    marginTop: 15,
  },
  subtitle: {
    fontWeight: "bold",
    color: "#5E503F",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
    letterSpacing: 5,
    marginTop: 15,
  },
  squareContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    marginTop: 20,
  },
  squareOne: {
    backgroundColor: "#5E503F",
    height: 100,
    width: 100,
  },
  textOne: {
    color: "#FFFFFF",
  },
  squareTwo: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderTopRightRadius: 10,
  },
  squareThree: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderBottomLeftRadius: 10,
  },
  squareFour: {
    backgroundColor: "#5E503F",
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderBottomRightRadius: 10,
  },
  textOne: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  textTwo: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontFamily: " Montserrat_500Medium",
  },
});

//élargis le carré prcl, point d'interro, header à revoir. fontfamily app.js prendre font medium
