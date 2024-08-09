import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import SubHeaderProfile from "../components/SubHeaderProfile";
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from "@expo/vector-icons/Octicons";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";

export default function FormuleScreen({ navigation }) {
  const [isLiked, setIsLiked] = useState(false);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
  }
  return (
    <SafeAreaView style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.header}>
        <Header title="INFINITE CUT" colorScissors={false} colorUser={true} navigation={navigation} />
        <SubHeaderProfile firstText="Mes RDV" secondText="Mon Compte" navigation={navigation} styleFirstText="500" />
      </View>
      <ScrollView style={styles.page} contentContainerStyle={{alignItems: "center", justifyContent:"space-around"}}>
        <Text style={styles.title}>Mon prochain RDV</Text>
        <View style={styles.upContainer}>
          <View style={styles.rdvCard}>
            <View style={styles.informations}>
              <Text style={styles.date}>Vendredi 16 Août, 16h00</Text>
              <View style={styles.imageName}>
                <Image
                  style={styles.img}
                  source={require('../assets/background_home.jpg')}
                />
                <Text style={styles.name}>Lucie Saint Clair</Text>
              </View>
              <View style={styles.allIcons}>
                <View style={styles.location}>
                  <Entypo name="location-pin" size={24} color="black" />
                  <Text> Adresse du salon</Text>
                </View>
                <View style={styles.prestation}>
                  <Entypo name="scissors" size={24} color="black" />
                  <Text> N° formule</Text>
                </View>
                <View style={styles.tempsMoyen}>
                  <Entypo name="clock" size={24} color="black" />
                  <Text> 20 minutes</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DatePicker")}>
              <Text style={styles.textButton}>Déplacer le RDV</Text>
            </TouchableOpacity>
            <View style={styles.calendarAndDelete}>
              <TouchableOpacity style={styles.addToCalendar}>
                <Entypo name="calendar" size={24} color="black" />
                <Text> Ajouter à mon calendrier</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteRdv}>
                <Feather name="trash" size={24} color="black" />
                <Text> Annuler le rdv</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.title}>Historique de RDV</Text>
        <View style={styles.scrollView}>
          <View style={styles.barber}>
            <View style={styles.leftCard}>
              <Image
                style={styles.img}
                source={require("../assets/background_home.jpg")}
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
          <View style={styles.barber}>
            <View style={styles.leftCard}>
              <Image
                style={styles.img}
                source={require("../assets/background_home.jpg")}
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
          <View style={styles.barber}>
            <View style={styles.leftCard}>
              <Image
                style={styles.img}
                source={require("../assets/background_home.jpg")}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE0D5",
    alignItems: "center",
  },
  page:{
    minHeight: "100vh"
  },
  header: {
    width: '100%',
  },
  upContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  title: {
    width: "100%",
    fontSize: 26,
    letterSpacing: 6,
    marginTop: 30,
    marginBottom: 20,
  },
  rdvCard: {
    marginTop: 10,
    height: '90%',
    backgroundColor: "white",
    width: 320,
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#22333B",
    paddingBottom: 30,
  },
  informations: {
    width: "90%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: "60%",
  },
  date: {
    fontWeight: "500",
  },
  imageName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    width: "100%",
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 20,
  },
  prestation: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 5
  },
  location: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
  }, prestation: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
  }, tempsMoyen: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  calendarAndDelete: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addToCalendar: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  deleteRdv: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  button: {
    width: 120,
    backgroundColor: "#5E503F",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#EAE0D5"
  },
  barber: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "#22333B"
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
  scrollView: {
    marginBottom: 20,
    marginTop:15,
  }
});
