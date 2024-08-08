import Header from "../../components/Header";
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";


export default function MesInformations ({navigation}){
  const [prenom, setPrenom]= useState('');
  const [nom, setNom]=useState('');
const [email, setEmail]=useState('');
const [adresse, setAdresse]=useState('');
const [mobile, setMobile]=useState('');

 
    return(
        <View style={styles.container}>
        <Header
          style={styles.header}
          title="INFINITE CUT"
          navigation={navigation}
          colorScissors={false}
          colorUser={true}
        />
     <Text style={styles.txt}>Mon compte</Text>
<Text>Mes informations</Text>
 <View style={styles.globalInput}>
  <TextInput  style={styles.input}    
       onChangeText={(value) => setPrenom(value)}

       value={prenom}
       placeholder="Prénom"
     />
    
     <TextInput  style={styles.input}     
      onChangeText={(value) => setNom(value)}
      placeholder="nom"

       value={nom}
            />
      
      <TextInput   style={styles.input}    
       onChangeText={(value) => setEmail(value)}
placeholder="email"
       value={email}
     />
      
     
      <TextInput     style={styles.input}  
       onChangeText={(value) => setAdresse(value)}
placeholder="Adresse"
       value={adresse}
     />
    

      <TextInput   style={styles.input}    
       onChangeText={(value) => setMobile(value)}
placeholder="Mobile"
       value={mobile}
     />
     </View>
     <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Modifier</Text>
     </TouchableOpacity>
     <Text style= {styles.line}>Ma formule</Text>
   </View>
    )
}

const styles = StyleSheet.create({

globalInput: {
  height : 430,
  width: "80%",
justifyContent : "spacebetween",
alignItems : "center"
},
  input: {
    height: 70,
    width: 300,
    backgroundColor: "#5E503F",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  
button:{
  height: 40,
  borderwidth: 1,
  width: "40%",
  borderRadius: 20,
    backgroundColor:"#FFFFFF",
    marginTop: 30,
    marginBottom: 50,
    alignItems:"center",
    justifyContent:"center",
    },

text: {
  textAlign: "center",
  },
container: {
  flex: 1,
  alignItems: "center",
  justifyContent:"space-evenly",
  },
line: {
  textAlign: "left",
}
})