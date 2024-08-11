import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Modal,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {URL_BACKEND} from "@env";
import { loginUserPro } from "../reducers/userPro";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default function SignUpProScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mobile, setMobile] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();



  const handleSignUp = () => {
    console.log(EMAIL_REGEX.test(email));
    if(EMAIL_REGEX.test(email)){
      fetch(`${URL_BACKEND}/userpros/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: prenom,
          nom: nom,
          codePostal: codePostal,
          mobile: mobile,
          email: email,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            setModalVisible(true);
          }
        });
  } else {
    setEmailError(true);
  }
}


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Modal 
      visible={modalVisible} 
      animationType="fade" 
      transparent={true}
      onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.globalView}>
              <Text style={styles.textModal}>Nous accusons bonne réception de votre formulaire.</Text>
              <Text style={styles.textModal}>Notre équipe commercial reviendra vers vous dès
                que possible par téléphone afin de convenir
                d'un premier échange.
              </Text>
              <Text style={styles.textModal}>Merci pour votre confiance.</Text>
                <Text style={styles.textTitle}>INFINITE CUT</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
                  <Text style={styles.lastTextButton}>Retourner au menu</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Envie de {"\n"}nous rejoindre ?</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              placeholderTextColor="white"
              onChangeText={(value) => setPrenom(value)}
              value={prenom}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              placeholderTextColor="white"
              onChangeText={(value) => setNom(value)}
              value={nom}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              placeholderTextColor="white"
              autoCapitalize="none"
              onChangeText={(value) => setMobile(value)}
              value={mobile}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Code Postal"
              placeholderTextColor="white"
              onChangeText={(value) => setCodePostal(value)}
              value={codePostal}
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
              onChangeText={(value) => setEmail(value)}
              value={email}
            ></TextInput>
          </View>
          {emailError && <Text style={styles.error}>Adresse mail invalide</Text>}
          <View style={styles.bottomPage}>
            <TouchableOpacity style={styles.lastButton} onPress={() => handleSignUp()}>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
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
      height: 2,}
  },
  globalView:{
    justifyContent: 'space-around',
    alignItems:'center',
    height: "95%",
    widht: "100%",
  },
  textModal: {
    textAlign:'center',
  },
  textTitle:{
    fontSize:20,
    fontWeight: "600",
  },
  bottomModal:{
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-between",

  },
  button:{
    backgroundColor: "transparent",
    height: 50,
    width: 200,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
  inputEmail: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    height: 70,
    width: 150,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
  },
  inputPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  inputConfirmPassword: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
    textAlign: 'center',
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
