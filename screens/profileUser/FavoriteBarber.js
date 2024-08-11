import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useState } from "react";

const stars = [];
for (let i = 0; i < 5; i++) {
  stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
}

export default function FavoriteBarber({ navigation }) {
  const [isLiked, setIsLiked] = useState(true);

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
            firstText="Mes RDV"
            secondText="Mon Compte"
            navigation={navigation}
            styleFirstText="500"
          />
        </View>
        <Text style={styles.title}>Mes salons de coiffure favoris</Text>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
            <View style={styles.card}>
              <View style={styles.leftCard}>
                <Image
                  style={styles.img}
                  source={require("../../assets/background_home.jpg")}
                />
                <View style={styles.nameAndNote}>
                  <Text>Lucie Saint Clair</Text>
                  <View style={styles.star}>{stars}</View>
                </View>
              </View>
              <Octicons
                name="heart-fill"
                size={30}
                color={isLiked ? "#C6AC8F" : "#22333B"}
                onPress={() => setIsLiked(!isLiked)}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomPage}>
          <MaterialCommunityIcons
            name="chevron-double-down"
            size={50}
            color="#C6AC8F"
            onPress={() => navigation.navigate("FavoriteBarber")}
          />
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
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  bottomPage: {
    alignItems: "center",
    margin: 30,
  },
  card: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
  },
  leftCard: {
    flexDirection: "row",
    height: 85,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  nameAndNote: {
    flexDirection: "column",
  },
  star: {
    flexDirection: "row",
  },
  img: {
    height: 85,
    width: 85,
    borderRadius: 20,
    marginRight: 5,
  },
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "50%",
    margin: 20,
  },
});
