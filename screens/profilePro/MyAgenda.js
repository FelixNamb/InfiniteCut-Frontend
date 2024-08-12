import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { Agenda } from "react-native-calendars";
import { useState, useCallback } from "react";


export default function MyAgenda({ navigation }) {
    const [items, setItems] = useState({});


    return (
        <View style={styles.page}>
        <Header title='INFINITE CUT' colorScissors={true} colorUser={false} navigation={navigation} />
        <View style={styles.container}>
            <Text style={styles.title}>Mon Agenda</Text>
            <Agenda
            items={items}
            selected="2024-08-12"
            
            />
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Programmez un RDV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Annuler un RDV</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#EAE0D5'
  },
  container: {
    flex:1,
    alignItems:"center",
    marginTop: 20,
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  agenda:{
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection:"row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "13%",
  },
  button:{
    backgroundColor:"#5E503F",
    width: 150,
    height:50,
    borderRadius:20,
    justifyContent: "center",
    alignItems:"center",
  },
  textButton:{
    color:"white",
    fontSize:18,
    textAlign:"center",
  }
});