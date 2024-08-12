import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import Header from "../../components/Header";

export default function DatePicker({ navigation }) {
  const [dateTaken, setDateTaken] = useState(null);
  const [selectDatePicker, setSelectDatePicker] = useState(false);
  const [morningButton, setMorningButton] = useState(false);
  const [eveningButton, setEveningButton] = useState(false);

  let styleButton = {
    backgroundColor: "white",
    width: 148.62,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    bordeColor: "#5E503F",
  };
  let styleTextButton = {
    color: "#5E503F",
  };

  const onChangeDate = (value) => {
    setSelectDatePicker(false);
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setDateTaken(
      new Date(value.nativeEvent.timestamp).toLocaleDateString("fr-FR", options)
    );
  };

  return (
    <View style={styles.page}>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Text style={styles.title}>Votre {"\n"}rendez-vous</Text>
          <Text style={styles.subtitle}>Choisissez une date</Text>
          <TouchableOpacity
            style={styles.buttonDate}
            onPress={() => setSelectDatePicker(true)}
          >
            <Text style={styles.textDate}>
              {dateTaken ? dateTaken : "Sélectionner une date"}
            </Text>
          </TouchableOpacity>
          {selectDatePicker && (
            <RNDateTimePicker
              mode="date"
              display="default"
              value={new Date()}
              maximumDate={new Date(2030, 10, 20)}
              onChange={(value) => onChangeDate(value)}
            />
          )}
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.subtitle}>Choisissez une demi journée</Text>
          <View style={styles.ButtonSection}>
            <TouchableOpacity
              style={morningButton ? styleButton : styles.button}
              onPress={() => {
                setMorningButton(true), setEveningButton(false);
              }}
            >
              <Text style={morningButton ? styleTextButton : styles.textButton}>
                Matin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={eveningButton ? styleButton : styles.button}
              onPress={() => {
                setEveningButton(true), setMorningButton(false);
              }}
            >
              <Text style={eveningButton ? styleTextButton : styles.textButton}>
                Après-midi
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.lastButton}
          onPress={() => navigation.navigate("ChooseBarber")}
        >
          <Text style={styles.textLastButton}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#EAE0D5",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
  },
  upperView: {
    height: "50%",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    height: 70,
    width: 150,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 18,
    fontWeight: "bold",
  },
  textButton: {
    color: "#5E503F",
    fontFamily: "Montserrat_500Medium",
  },
  bottomView: {
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: 15,
    padding: 10,
  },
  buttonDate: {
    width: 300,
    height: 70,
    backgroundColor: "#C6AC8F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textDate: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Montserrat_500Medium",
  },
  lastButton: {
    backgroundColor: "#5E503F",
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
  textLastButton: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
  },
});
