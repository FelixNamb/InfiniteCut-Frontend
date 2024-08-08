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
} from "react-native";
import Header from "../components/Header";
import SubHeaderProfile from "../components/SubHeaderProfile";
import Entypo from '@expo/vector-icons/Entypo';

export default function FormuleScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView
        style={styles.AreaView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header title="INFINITE CUT" colorScissors={false} colorUser={true} navigation={navigation} />
        <SubHeaderProfile firstText="Mes RDV" secondText="Mon Compte" navigation={navigation} />
        <Text style={styles.title}>Mon prochain rendez-vous</Text>
        <View style={styles.rdvCard}>
          <View style={styles.informations}>
            <Text style={styles.date}>Vendredi 16 Août, 16h00</Text>
            <View style={styles.imageName}>
              <Image 
              style={styles.img} 
              source={require('../assets/background_home.jpg')}/>
              <Text style={styles.name}>Lucie Saint Clair</Text>
            </View>
            <View style={styles.location}>
                <Entypo name="location-pin" size={24} color="black" />
                <Text>Adresse du salon</Text>
            </View>
            <View style={styles.prestation}>
                <Entypo name="scissors" size={24} color="black" />
                <Text>N° formule</Text>
            </View>
            <View style={styles.tempsMoyen}>
                <Entypo name="clock" size={24} color="black" />
                <Text>20 minutes</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("DatePicker")}>
            <Text>Déplacer le RDV</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#EAE0D5"
  },
  AreaView: {
    backgroundColor: "#EAE0D5",
    flex: 1,
  },
  image:{
    width: 50,
    height: 50,
  }
});
