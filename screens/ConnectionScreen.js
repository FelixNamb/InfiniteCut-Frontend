import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConnectionScreen() {
  return (
    <View style={styles.container}>
      {/* <Headers></Headers> */}
      <View>
        <Text style={styles.title}>
          Maintenant que vous savez tout, rejoignez nous.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Mot de passe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.textButton}>
          Nouveau sur Infinite Cut ? Créer votre compte
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Proposez votre établissement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    height: "20%",
    backgroundColor: "#5E503F",
    borderRadius: 50,
  },
  textButton: {
    color: "black",
    height: 30,
    fontWeight: "600",
    fontSize: 16,
  },
  title: {
    color: "#5E503F",
    fontSize: "40",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
