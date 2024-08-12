import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  KeyboardAvoidingView,
} from "react-native";

import Octicons from "@expo/vector-icons/Octicons";
import { useState } from "react";
import Header from "../../components/Header";

export default function FinRDVScreen({ navigation }) {
  const [commentaire, setCommentaire] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = () => {
    if (commentaire !== null) {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate("DatePicker");
      }, 3000);
    } else {
      setFormError(true);
    }
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        title="INFINITY CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <View style={styles.containerPage}>
        <Text style={styles.titlePage}>Fin de {"\n"}rendez-vous</Text>
        <View style={styles.note}>
          <Text style={styles.textNote}>Note</Text>
          <View style={styles.star}>{stars}</View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Qu'en avez vous pensé ?"
          placeholderTextColor="#5E503F"
          autoCapitalize="none"
          onChangeText={(value) => setCommentaire(value)}
          value={commentaire}
          maxLength={280}
        />
        {formError && <Text style={styles.error}>Le champ est vide.</Text>}

        <Modal visible={modalVisible} animationType="fade" transparent>
          <View style={styles.centeredCardView}>
            <View style={styles.modalCardView}>
              <Text style={styles.textCardModal}>
                Merci pour votre retour. On réserve le prochain rendez-vous ?
              </Text>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.textButton}>Soumettre</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  note: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  textNote: {
    color: "#5E503F",
    fontSize: 25,
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  star: {
    flexDirection: "row",
    margin: 10,
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
    width: 200,
    height: 70,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  textButton: {
    color: "white",
    letterSpacing: 2,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  centeredCardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCardView: {
    backgroundColor: "#C6AC8F",
    borderRadius: 20,
    borderColor: "#22333B",
    padding: 5,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textCardModal: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    margin: 10,
  },
  error: {
    marginTop: 10,
    color: "red",
    fontFamily: "Montserrat_500Medium",
  },
});
