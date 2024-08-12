import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Header from "../../components/Header";
import SubHeaderProfile from "../../components/SubHeaderProfile";
import { Agenda } from "react-native-calendars";
import { useState, useCallback } from "react";


export default function MyAgenda({ navigation }) {

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                <Header title="INFINITE CUT" navigation={navigation} colorScissors={true} colorUser={false}/>
                <SubHeaderProfile firstText="Mes informations" secondText="Mes chiffres" styleFirstText="600" navigation={navigation} />
            </View>
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>Mon agenda</Text>
                </View>
                <Agenda 
                    items={{
                        '2024-08-12': [{name: "Meeting 1", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."},
                            {name: "Meeting 0", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}
                        ],
                        '2024-08-13': [{name: "Meeting 2", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}],
                        '2024-08-15': [{name: "Meeting 3", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}],
                        '2024-08-17': [{name: "Meeting 4", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}],
                        '2024-08-18': [{name: "Meeting 5", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}],
                        '2024-08-22': [{name: "Meeting 6", data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit."}],
                    }}
                    renderItem={(item, isFirst) => (
                        <TouchableOpacity style={styles.item}
                        onPress={() => handleDeleteItem(item)}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.data}</Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Programmer un RDV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Annuler un RDV</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lastButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Plage{"\n"}d'indisponibilités</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:"#EAE0D5"
  },
  container:{
    flex:1,
    paddingHorizontal:"5%",
  },
  titleView:{
    width:"100%",
    justifyContent:'center',
    alignItems:'center',
    marginVertical:"5%",
  },
  title:{
    fontSize: 32,
    fontWeight: "semibold",
  },
  item:{
    flex:1,
    borderRadius:5,
    marginTop:20,
  },
  buttons:{
    flexDirection:'row',
    width: "100%",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"5%",
  },
  button:{
    backgroundColor:"#C6AC8F",
    width:150,
    height:50,
    borderRadius:20,
    justifyContent: "center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#5E503F"
  },
  textButton:{
    color:"#5E503F",
    textAlign: "center",
    fontWeight:"500",
  },
  lastButton:{
    marginVertical:"10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});