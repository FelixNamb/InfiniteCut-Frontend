import { TextInput } from "react-native";
import Header from "../../components/Header";
import { Button, TextInput, View } from "react-native";
import { useState } from "react";


export default function mesInformations (){
  const [prenom, setPrenom]= useState('');
  const [nom, setNom]=useState('');
const [email, setEmail]=useState('');
const [adresse, setAdresse]=useState('');
const [mobile, setMobile]=useState('');

  const handleSubmit = () => {};

    return(
        <View style={styles.container}>
        <Header
          style={styles.header}
          title=""
          colorScissors={false}
          colorUser={false}
        />
     <Text style={styles.txt}>Mon compte</Text>
<Text>Mes informations</Text>
 <TextInput      
       onChangeText={(value) => setPrenom(value)}

       value={prenom}
     />
     <Button title="Prenom" onPress={() => handleSubmit()} />
     <TextInput      
       onChangeText={(value) => setNom(value)}

       value={nom}
     />
      <Button title="Nom:" onPress={() => handleSubmit()} />
      <TextInput      
       onChangeText={(value) => setEmail(value)}

       value={email}
     />
      <Button title="Email:" onPress={() => handleSubmit()} />
     
      <TextInput      
       onChangeText={(value) => setAdresse(value)}

       value={adresse}
     />
      <Button title="Adresse:" onPress={() => handleSubmit()} />

      <TextInput      
       onChangeText={(value) => setMobile(value)}

       value={mobile}
     />
      <Button title="Mobile:" onPress={() => handleSubmit()} />
   </View>
    )
}

const styles = StyleSheet.create({

})