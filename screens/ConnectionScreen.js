import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function ConnectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Maintenant que vous savez tout, rejoignez nous.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Mot de passe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ConnectedButton}>
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newUser}>
        <Text style={styles.textNewUser}>
          Nouveau sur Infinite Cut ? Créer votre compte
        </Text>
      </View>
      <TouchableOpacity style={styles.lastButton}>
        <Text style={styles.lastTextButton}>Proposez votre établissement</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  button: {
    height: 60,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    height: 30,
    fontSize: 18,
  },
  title: {
    color: "#5E503F",
    fontSize: "40",
    flexWrap: "wrap",
  },
  titleContainer: {
    height: 150,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  lastButton: {
    backgroundColor: "transparent",
    height: 60,
    width: 300,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
  lastTextButton: {
    color: "#5E503F",
    height: 40,
    width: 180,
    fontWeight: "600",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    textAlign: "justify",
  },

  ConnectedButton: {
    height: 60,
    width: 200,
    backgroundColor: "#C6AC8F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textNewUser: {
    color: "#5E503F",
    fontWeight: "600",
    fontSize: 20,
    flexWrap: "wrap",
  },
  newUser: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 300,
  },
  buttonContainer: {
    width: 300,
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
