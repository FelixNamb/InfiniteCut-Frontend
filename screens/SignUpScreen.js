<<<<<<< HEAD
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// const EMAIL_REGEX =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// export default function ConnectionScreen() {
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState(false);

//   const [signUpMobile, setSignUpMobile] = useState("");
//   const [signUpMotDePasse, setSignUpMotDePasse] = useState("");
//   const [signUpConfirmMotDePasse, setSignUpConfirmMotDePasse] = useState("");

//   const handleSubmit = () => {
//     if (EMAIL_REGEX.test(email)) {
//       dispatch(updateEmail(email));
//     } else {
//       setEmailError(true);
//     }
//   };
// }

// const handleConnection = () => {
//   fetch("http://localhost:3000/users/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application.json" },
//     body: JSON.stringify({
//       email: signUpEmail,
//       mobile: signUpMobile,
//       motDePasse: signUpMotDePasse,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.result) {
//         dispatch(
//           login({
//             email: signUpEmail,
//             token: data.token,
//             mobile: signUpMobile,
//             motDePasse: signUpMotDePasse,
//           })
//         );
//         setSignUpEmail("");
//         setSignUpMobile("");
//         setSignUpMotDePasse("");
//         setSignUpConfirmMotDePasse("");
//       }
//     });
// };

// return (
//   <SafeAreaView style={styles.container}>
//     <View style={styles.titleContainer}>
//       <Text style={styles.title}>Nouveau sur Infinite Cut ?</Text>
//     </View>
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.textButton}>Email</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.textButton}>Mobile</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.textButton}>Mot de passe</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.textButton}>Confirmation mot de passe</Text>
//       </TouchableOpacity>
//     </View>

//     <TouchableOpacity style={styles.lastButton}>
//       <Text style={styles.lastTextButton}>Créer son compte</Text>
//     </TouchableOpacity>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EAE0D5",
//     alignItems: "center",
//     justifyContent: "space-around",
//     margin: 0,
//     padding: 0,
//     width: "100%",
//     height: "100%",
//   },
//   button: {
//     height: 70,
//     width: 300,
//     backgroundColor: "#5E503F",
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textButton: {
//     color: "white",
//     height: 30,
//     fontSize: 18,
//   },
//   title: {
//     color: "#5E503F",
//     fontSize: "40",
//     flexWrap: "wrap",
//   },
//   titleContainer: {
//     height: 150,
//     width: 300,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   lastButton: {
//     backgroundColor: "transparent",
//     height: 70,
//     width: 300,
//     fontWeight: "600",
//     fontSize: 16,
//     borderRadius: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#5E503F",
//   },
//   lastTextButton: {
//     color: "#5E503F",
//     fontWeight: "600",
//     fontSize: 20,
//   },
//   buttonContainer: {
//     width: 300,
//     height: 350,
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
// });
=======
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
import { useState } from "react";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        email: signUpEmail,
        mobile: signUpMobile,
        motDePasse: signUpMotDePasse,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              email: signUpEmail,
              token: data.token,
              mobile: signUpMobile,
              motDePasse: signUpMotDePasse,
            })
          );
          navigation.navigate("DatePicker");
          setSignUpEmail("");
          setSignUpMobile("");
          setSignUpMotDePasse("");
          setSignUpConfirmMotDePasse("");
        }
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Nouveau sur {"\n"}Infinite Cut ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoComplete="email"
          ></TextInput>
          {emailError && (
            <Text style={styles.error}>Adresse mail invalide</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Mobile"
            placeholderTextColor="white"
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
          <TextInput
            style={styles.inputConfirmPassword}
            secureTextEntry={true}
            placeholder="Confirmation mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
          ></TextInput>
        </View>
        <View style={styles.bottomPage}>
          <TouchableOpacity style={styles.lastButton}>
            <Text style={styles.lastTextButton}>Créer son compte</Text>
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
  input: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 130,
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
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    flexWrap: "wrap",
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
    width: 300,
    height: 350,
    justifyContent: "space-around",
    alignItems: "center",
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
});
>>>>>>> 0dc004ad34643f836f6692be7475b29f42cc2111
