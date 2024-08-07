import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
//import { Agenda, DateData, AgendaEntry, AgendaSchedule} from "react-native-calendars";
import { useState } from "react";

export default function MyAgenda ({navigation}) {
    const [selected, setSelected] = useState('');
    const currentDay= new Date();
    return(
        <View style={styles.page}>
            <Header title='INFINITE CUT' colorScissors={true} colorUser={false} navigation={navigation}/>
            <View style={styles.container}>
                <Text style={styles.title}>Mon Agenda</Text>
                
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EAE0D5'
    },
    container: {
        justifyContent: 'flex-start',
        alignItems:'center',
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
    }
})