import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Header from "../components/Header";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import React, { useState } from "react";
import { Table, Row, Rows } from "react-native-table-component";

const Tableau = () => {
  const header = ["Essentiel ", "Premium", "Exclusif"];
  const data = [
    ["Prix", "39.99€", "49.99€", "54.99€"],
    ["Passage max /mois", "3", "4", "4"],
    ["Engagement", "6mois min.", "Aucun", "Aucun"],
    ["Shampooing", "validIcon", "validIcon", "validIcon"][
      ("Coupe", "validIcon", "validIcon", "validIcon")
    ][("Coiffage", "validIcon", "validIcon", "validIcon")][
      ("Massage cuir chevelu", "RemoveIcon", "validIcon", "validIcon")
    ][("Barbe", "RemoveIcon", "validIcon", "validIcon")][
      ("Soin du visage", "RemoveIcon", "RemoveIcon", "validIcon")
    ][("Epilation (nez, oreilles)", "RemoveIcon", "RemoveIcon", "validIcon")],
  ];
  return (
    <View style={{ marginTop: 200 }}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={header} />
        <Rows data={data} />
      </Table>
    </View>
  );
};

export default function CompareFormuleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="INFINITE CUT"
        colorScissors={false}
        colorUser={false}
        navigation={navigation}
      />
      {Tableau}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Obtenir</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Obtenir</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Obtenir</Text>
            </TouchableOpacity>
          </View>
        </View>
        <MaterialCommunityIcons
          name="chevron-double-down"
          size={30}
          color="#C6AC8F"
          onPress={() => navigation.navigate("Pay")}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    justifyContent: "center",
    alignItems: "center",
  },
  tableau: {
    width: "60%",
    height: "70%",
    backgroundColor: "blue",
  },
  button: {
    backgroundColor: "#5E503F",
    width: 100,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
  bottomContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },
});
