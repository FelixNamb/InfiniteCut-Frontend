import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useSelector } from "react-redux";

export default function Header(props) {
  const user = useSelector((state) => state.user.value);
  const userPro = useSelector((state) => state.userPro.value);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.dispositionHeader}>
        <TouchableOpacity
          onPress={() => !user.token && props.navigation.navigate("MyAgenda")}
        >
          <FontAwesome6
            name="scissors"
            size={32}
            color={props.colorScissors ? "#22333B" : "#C6AC8F"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            !userPro.token && props.navigation.navigate("MesInformations")
          }
        >
          <FontAwesome
            name="user-circle"
            size={32}
            color={props.colorUser ? "#22333B" : "#C6AC8F"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 4,
  },
});
