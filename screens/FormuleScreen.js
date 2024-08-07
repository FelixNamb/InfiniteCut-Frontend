import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import Header from "../components/Header";

export default function FormuleScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nos Formules</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            placeholderTextColor="white"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            placeholderTextColor="white"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            placeholderTextColor="white"
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Code Postal"
            placeholderTextColor="white"
          ></TextInput>
        </View>
        <View style={styles.containerBottom}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          ></TextInput>
        </View>
        {emailError && <Text style={styles.error}>Adresse mail invalide</Text>}
        <View style={styles.bottomPage}>
          <TouchableOpacity style={styles.lastButton}>
            <Text style={styles.lastTextButton}>Déposer votre demande</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  AreaView: {
    backgroundColor: "#EAE0D5",
    flex: 1,
    height: "100%",
  },
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
  inputEmail: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 130,
  },
  input: {
    height: 70,
    width: 150,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    marginBottom: 30,
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 110,
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 70,
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    flex: 1,
  },
  titleContainer: {
    height: "25%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
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
  buttonContainer: {
    width: 380,
    height: 250,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  error: {
    marginTop: 10,
    color: "red",
  },
  bottomPage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 130,
  },
  containerBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
