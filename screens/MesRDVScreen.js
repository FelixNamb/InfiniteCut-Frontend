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

export default function FormuleScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.subHeader}>
          <TextInput>Mes RDV</TextInput>
          <TextInput>Mon compte</TextInput>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mon prochain rendez-vous</Text>
        </View>
        <View style={styles.rdvCard}>
          <View style={styles.date}></View>
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
  subHeader: {
    height: 30,
    width: "100%",
    backgroundColor: "white",
  },
  titleContainer: {
    height: "25%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
  },
  title: {
    color: "#5E503F",
    fontSize: 30,
    flex: 1,
  },
  rdvCard: {
    height: "60%",
    widht: "90%",
    backgroundColor: "white",
    borderRadius: 50,
  },
  date: {},
});
