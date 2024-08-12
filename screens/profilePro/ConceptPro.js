import Header from "../../components/Header";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
export default function ConceptPro({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        style={styles.header}
        title="INFINITE CUT"
        navigation={navigation}
        colorScissors={false}
        colorUser={true}
      />
      <View style={styles.upperContent}>
        <Text style={styles.title}>Votre assistant au quotidien.</Text>
        <View style={styles.secondTitle}>
          <Text style={styles.subtitle}>
            Boostez votre activité de coiffeur indépendant avec
          </Text>
          <Text style={styles.capital}>INFINITE CUT !</Text>
        </View>
      </View>
      <View style={styles.underContent}>
        <Text style={styles.info}>
          Offrez des abonnements personnalisés, gérez vos rendez-vous et
          paiements en un clic, fidélisez vos clients facilement.
        </Text>
        <Text style={styles.otherInfo}>
          Simplifiez votre quotidien, maximisez vos revenus.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#EAE0D5",
    height: "100%",
    width: "100%",
  },
  upperContent: {
    height: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  secondTitle: {
    textAlign: "center",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 32,
    color: "#5E503F",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    width: "85%",
    fontSize: 18,
    color: "#000000",
  },
  capital: {
    fontWeight: "bold",
  },
  underContent: {
    height: "17%",
    width: "90%",
    color: "#000000",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign:"center",
    marginLeft:10
  },
  info: {
    fontSize: 18,
    justifyContent:"flex-start"
  },
  otherInfo: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
