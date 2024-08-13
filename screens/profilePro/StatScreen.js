import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function StatScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.upperViewText}>
          <Text style={styles.title}>Et si on</Text>
          <View style={styles.underline}>
            <Text style={styles.title}>parlait </Text>
            <Text style={styles.subtitle}>chiffres ?</Text>
          </View>
        </View>
        <View style={styles.squareContainer}>
          <View style={styles.squareOne}>
            <Text style={styles.textOne}>+50 000</Text>
            <Text style={styles.textTwo}>Salons et instituts</Text>
          </View>
          <View style={styles.squareTwo}>
            <Text style={styles.textOne}>+ 6 milliards</Text>
            <Text style={styles.textTwo}> rendez-vous vendus</Text>
          </View>
          <View style={styles.squareThree}>
            <Text style={styles.textOne}>60% d’appel</Text>
            <Text style={styles.textTwo}>en moins au salon</Text>
          </View>
          <View style={styles.squareFour}>
            <Text style={styles.textOne}>75</Text>
            <Text style={styles.textTwo}>% de rendez-vous sauvés</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EAE0D5"
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
  underline:{
flexDirection:"row"
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
    height: "55%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderTopLeftRadius: 10,
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
