import { TextInput } from "react-native";
import Header from "../../components/Header";
import { TextInput, View } from "react-native";
// import { useState } from "react";
export default function mesInformations (){
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
{/* <TextInput      
       onChangeText={(value) => (value)}

       value={}
     /> */}
   </View>
    )
}