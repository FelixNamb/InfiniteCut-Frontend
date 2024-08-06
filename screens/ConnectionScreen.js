import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function ConnectionScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Maintenant que vous savez tout, rejoignez nous.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          onChangeText={(value) => setEmail(value)}
          value={email}
        ></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TouchableOpacity
          style={styles.ConnectedButton}
          onPress={() => navigation.navigate("DatePicker")}
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newUser}>
        <Text style={styles.textNewUser}>
          Nouveau sur Infinite Cut ? {"\n"}Créer votre compte
        </Text>
      </View>
      <TouchableOpacity
        style={styles.lastButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.lastTextButton}>
          Proposez votre {"\n"}établissement
        </Text>
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
  input: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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
    height: 70,
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
    fontWeight: "600",
    fontSize: 20,
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
  textButton: {
    color: "white",
    height: 30,
    fontSize: 18,
  },
});
