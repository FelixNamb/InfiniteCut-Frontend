import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import Header from "../../components/Header";

export default function FinRDVScreen({ navigation }) {
  const [commentaire, setCommentaire] = useState(null);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }
  return (
    <View style={styles.container}>
      <Header
        title="INFINITY CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <View style={styles.containerPage}>
        <Text style={styles.titlePage}>Fin de rendez-vous</Text>
        <View style={styles.note}>
          <Text style={styles.textNote}>Note</Text>
          <View style={styles.star}>{stars}</View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Mettez un commentaire"
          onChangeText={(value) => setCommentaire(value)}
          value={commentaire}
          maxLength={280}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Soumettre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#EAE0D5",
  },
  header: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  dispositionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
  containerPage: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "90%",
  },
  titlePage: {
    fontSize: 24,
    fontWeight: "500",
  },
  note: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  textNote: {
    fontWeight: "semibold",
    fontSize: 18,
  },
  star: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    width: 300,
    height: 300,
    borderRadius: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5E503F",
    width: 148.62,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
