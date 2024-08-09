import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import Link from "next/link";

function SignIn() {
  const dispatch = useDispatch();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              email: signInEmail,
              token: data.token,
            })
          );
          setSignInEmail("");
          setSignInPassword("");
        }
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header
        title="INFINITE CUT"
        colorUser={false}
        colorScissors={false}
        navigation={navigation}
      />
      <SafeAreaView
        style={styles.areaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Maintenant que vous savez tout,{"\n"} rejoignez nous.
          </Text>
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
            onChangeText={(value) => setSignInEmail(value)}
            value={signInEmail}
          ></TextInput>
          {emailError && <Text style={styles.error}>Aucun compte trouvé</Text>}
          <TextInput
            style={styles.inputPassword}
            secureTextEntry={true}
            placeholder="Mot de passe"
            placeholderTextColor="white"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => setSignUpMotDePasse(value)}
            value={signUpMotDePasse}
          ></TextInput>
          <TouchableOpacity
            style={styles.ConnectedButton}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.textButton}>Se connecter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPage}>
          <View style={styles.newUser}>
            <Text style={styles.textNewUser}>
              Nouveau sur Infinite Cut ? {"\n"}
              <Link to={{ screen: "SignUp", params: { id: "SignUp" } }}>
                <Text style={styles.createAccount}>Créer votre compte</Text>
              </Link>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.lastButton}
            onPress={() => navigation.navigate("SignUpPro")}
          >
            <Text style={styles.lastTextButton}>
              Proposez votre {"\n"}établissement
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
