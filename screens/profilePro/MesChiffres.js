import { View, SafeAreaView, Platform, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function MesChiffres({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("semaine"); // Définir "semaine" comme valeur par défaut
  const [items, setItems] = useState([
    { label: "Semaine", value: "semaine" },
    { label: "Mois", value: "mois" },
  ]);

  function renderData() {
    if (value === "mois") {
      return (
        <>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Nombre de rendez-vous</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>26</Text>
            </View>
          </View>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Nombre de rendez-vous annulés</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>4</Text>
            </View>
          </View>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Chiffres d'affaires</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>1299.74 €</Text>
            </View>
          </View>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Nombre de rendez-vous</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>6</Text>
            </View>
          </View>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Nombre de rendez-vous annulés</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>1</Text>
            </View>
          </View>
          <View style={styles.chiffresContainer}>
            <Text style={styles.title}>Chiffres d'affaires</Text>
            <View style={styles.chiffres}>
              <Text style={styles.textChiffres}>361.12 €</Text>
            </View>
          </View>
        </>
      );
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            title="INFINITE CUT"
            colorScissors={false}
            colorUser={true}
            navigation={navigation}
          />
          <SubHeaderProfile
            firstText="Mes informations"
            secondText="Mes chiffres"
            navigation={navigation}
            styleFirstText="500"
          />
        </View>
        <View style={styles.page}>
          <View style={styles.DropDownPickerContainer}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.DropDownPicker}
              textStyle={{
                fontSize: 15,
                fontFamily: "Montserrat_500Medium",
              }}
              labelStyle={{
                fontWeight: "bold",
                fontFamily: "Montserrat_500Medium",
              }}
              disabledStyle={{
                opacity: 0.5,
              }}
              placeholder="Chiffres mensuel"
              placeholderStyle={{
                color: "#5E503F",
                fontWeight: "bold",
                fontFamily: "Montserrat_500Medium",
              }}
              dropDownContainerStyle={{
                backgroundColor: "#5E503F",
              }}
            />
          </View>
          {renderData()}
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    flexDirection: "column",
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#5E503F",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  chiffresContainer: {
    width: "80%",
    alignItems: "center",
  },
  chiffres: {
    height: 50,
    backgroundColor: "#5E503F",
    borderWidth: 1,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5E503F",
    margin: 20,
  },
  textChiffres: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat_500Medium",
  },
  DropDownPicker: {
    width: "100%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  DropDownPickerContainer: {
    width: "80%",
    marginBottom: 80,
    marginTop: 20,
  },
});
