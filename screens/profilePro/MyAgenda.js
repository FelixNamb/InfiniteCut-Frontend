import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import { Agenda } from "react-native-calendars";
import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


//MyAgenda est la page principale du userPro. Il y retrouve un agenda avec ses rendez-vous
// Et différents boutons pour pouvoir modifier son agenda. 
export default function MyAgenda({ navigation }) {
  const userPro = useSelector((state) => state.userPro.value);
  const [rdv, setRdv] = useState({});// On initialise un état rdv qui prend des objets
  const dispatch = useDispatch();


  /*Le useEffect permet de remplir notre état rdv de date et de plage horaire */
  useEffect(() => {
    const urlBackend = process.env.EXPO_PUBLIC_URL_BACKEND;
    fetch(`${urlBackend}/userpros/${userPro.token}`) // Ici on récupère les données du userPro
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          fetch(`${urlBackend}/rdv/${data.user._id}`) //Si tout réussi, alors on récupère les rendez-vous affilier au pro
          .then(response => response.json())
          .then(finalData => {
            setRdv(finalData.data)
            let newObj = {};
            for(let elt of finalData.data){
              // On split la date en deux tableaux, le premier qui récupère la date "brute" et le 'T' fais la séparation 
              // Avec la deuxième partie de notre date. On ne récupère que la première partie, qui nous intéresse
              // pour devenir la des objets
              const date = new Date(elt.date).toISOString().split("T")[0];
              if (!newObj[date]) {
                newObj[date] = [];
              }
              
              newObj[date].push({
                name: elt.plageHoraire,
                description: "30 minutes"
              });
            }
            setRdv(newObj);// On initialise l'état de rdv avec newObj
          })
        }
      });
  },[])


  console.log(rdv);

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header
          title="INFINITE CUT"
          navigation={navigation}
          colorScissors={true}
          colorUser={false}
        />
        <SubHeaderProfile
          firstText="Mes informations"
          secondText="Mes chiffres"
          styleFirstText="Montserrat_600SemiBold"
          navigation={navigation}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Mon agenda</Text>
        </View>
        <Agenda
          items={rdv}
          renderItem={(item, isFirst) => (
            <TouchableOpacity
              style={styles.item}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Programmer un rendez-vous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Annuler un rendez-vous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastButton}>
          <TouchableOpacity style={styles.buttonLast}>
            <Text style={styles.textButton}>Plage{"\n"}d'indisponibilités</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
    paddingHorizontal: "5%",
  },
  titleView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
  },
  title: {
    color: "#5E503F",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 5,
    marginTop: 15,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5%",
  },
  button: {
    backgroundColor: "transparent",
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
  textButton: {
    color: "#5E503F",
    fontWeight: "600",
    fontSize: 15,
    textAlign: "center",
    letterSpacing: 1,
    fontFamily: "Montserrat_500Medium",
  },
  lastButton: {
    marginVertical: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLast: {
    backgroundColor: "transparent",
    height: 70,
    width: 300,
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5E503F",
  },
});
