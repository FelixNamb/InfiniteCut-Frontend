import Header from "../../components/Header";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function ConceptPro({ navigation }) {
  return (
    <>
      <Header
        style={styles.header}
        title="INFINITE CUT"
        navigation={navigation}
        colorScissors={false}
        colorUser={true}
      />
      <SafeAreaView style={styles.content}>
        <View style={styles.upperContent}>
          <Text style={styles.title}>Votre assistant au quotidien.</Text>
          <View style={styles.secondTitle}>
            <Text style={styles.subtitle}>
              Boostez votre activité {"\n"}de coiffeur indépendant avec
            </Text>
            <Text style={styles.capital}>INFINITE CUT. </Text>
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
        <ScrollView horizontal={true} style={styles.ScrollView}>
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("../../assets/capture d'écran agenda.png")}
              alt="agenda"
              style={styles.card}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("../../assets/capture d'écran mes informations.png")}
              alt="agenda"
              style={styles.card}
              resizeMode="contain"
            ></ImageBackground>
          </View>
          <View style={styles.cardContainer}>
            <ImageBackground
              source={require("../../assets/capture d'écran mes chiffres.png")}
              alt="agenda"
              style={styles.card}
              resizeMode="contain"
            ></ImageBackground>
          </View>
        </ScrollView>
        <MaterialIcons
          name="read-more"
          size={24}
          color="#5E503F"
          onPress={() => navigation.navigate("StatPro")}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
  },
  upperContent: {
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },
  secondTitle: {
    textAlign: "center",
    alignItems: "center",
    width: "80%",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  subtitle: {
    textAlign: "center",
    width: "85%",
    fontSize: 20,
    color: "#5E503F",
    fontFamily: "Montserrat_500Medium",
  },

  capital: {
    fontFamily: "Montserrat_500Medium",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 5,
  },
  underContent: {
    height: "17%",
    width: "100%",
    color: "#5E503F",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  info: {
    fontSize: 18,
    justifyContent: "center",
    fontFamily: "Montserrat_500Medium",
    color: "#5E503F",
  },
  otherInfo: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    padding: 5,
    letterSpacing: 3,
    marginBottom: 15,
  },
  ScrollView: {
    marginTop: 15,
    width: "60%",
  },
  cardContainer: {
    height: "100%",
    width: "30%",
    margin: 3,
  },
  card: {
    justifyContent: "center",
    height: "100%",
    width: 190,
    padding: 5,
  },
});
