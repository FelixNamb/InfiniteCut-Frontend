import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function MesInformations({ navigation }) {
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [mobile, setMobile] = useState("");
  const [isModified, setIsModified] = useState(false);

  const handleModifier = () => {
    setIsModified(true);
  };

  return (
    <SafeAreaView style={styles.total}>
      <Header
        style={styles.header}
        title="INFINITE CUT"
        navigation={navigation}
        colorScissors={false}
        colorUser={true}
      />
      <SubHeaderProfile
        firstText="Mes RDV"
        secondText="Mon compte"
        styleSecondText="600"
      />
      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mon compte</Text>
        </View>
        <View style={styles.globalInput}>
          <Text style={styles.sousText}>Mes informations</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setPrenom(value)}
            placeholderTextColor="#000000"
            value={prenom}
            placeholder="  Prénom :"
          />

          <TextInput
            style={styles.input}
            onChangeText={(value) => setNom(value)}
            placeholder="  Nom :"
            placeholderTextColor="#000000"
            value={nom}
          />

          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            placeholder="  Email :"
            placeholderTextColor="#000000"
            value={email}
          />

          <TextInput
            style={styles.input}
            onChangeText={(value) => setAdresse(value)}
            placeholder="  Adresse :"
            placeholderTextColor="#000000"
            value={adresse}
          />

          <TextInput
            style={styles.input}
            onChangeText={(value) => setMobile(value)}
            placeholder="  Mobile :"
            placeholderTextColor="#000000"
            value={mobile}
          />
        </View>
        <View style={styles.bottomPage}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.final}>M o d i f i e r</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("Connection")}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AllInput: {
    width: "80%",
    height: "40%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  header: {},
  keyboard: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
  },
  globalInput: {
    height: "50%",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  input: {
    height: "18%",
    width: "80%",
    backgroundColor: "#C6AC8F",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
    fontSize: 16,
    textAlign: "left",
  },
  bottomPage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    marginBottom: 30,
  },
  button: {
    height: "30%",
    borderWidth: 1,
    marginTop: 20,
    width: "35%",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5E503F",
  },
  text: {
    fontSize: 36,
    color: "#5E503F",
  },
  sousText: {
    fontSize: 24,
    color: "#5E503F",
    alignSelf: "flex-start",
  },
  line: {
    color: "#5E503F",
  },
  total: {
    width: "100%",
    height: "100%",
    //backgroundColor: "orange",
  },
});
