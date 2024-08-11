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
      <View style={styles.header}>
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
      </View>
      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mon compte</Text>
        </View>
        <View style={styles.globalInput}>
          <Text style={styles.sousText}>Mes informations</Text>
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
          <TouchableOpacity style={styles.button}
          onPress={() => handleModifier}>
            <Text style={styles.final}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  total: {
    flex:1,
    backgroundColor: "#EAE0D5",
  },
  keyboard: {
    flex:1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    width: "100%",
  },
  AllInput: {
    width: "80%",
    height: "40%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  textContainer: {
    width: "100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop: 10,
  },
  globalInput: {
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  input: {
    height: "16%",
    width: "85%",
    backgroundColor: "#C6AC8F",
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 2,
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
    width: 150,
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
  final: {
    color:"#5E503F",
    fontSize:20,
    letterSpacing: 4,
  }
});
