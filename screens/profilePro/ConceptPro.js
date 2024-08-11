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
        <Text style={styles.subtitle}>
          Boostez votre activité de coiffeur indépendant avec
        </Text>
        <Text style={styles.capital}>INFINITE CUT !</Text>
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
    content : {
       
        backgroundColor:"#EAE0D5",
        
    },
  upperContent: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    fontSize: 32,
    color: "#5E503F",
  },
  subtitle: {
    fontSize: 18,
    color: "#000000",
  },
  capital : {
    fontWeight: "bold"
  },
  underContent: {
    color: "#000000",
    fontSize: 18,
  },
  info: {},
  otherInfo: {
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"bold"
  },
});
