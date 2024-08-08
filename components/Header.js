import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header ( props) {
    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.dispositionHeader}>
                <TouchableOpacity >
                    <FontAwesome6 
                    name="scissors" 
                    size={32} 
                    color={props.colorScissors ? "#22333B" : "#C6AC8F"}
                    onPress={() => props.navigation.navigate("ChooseBarber")} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity >
                    <FontAwesome 
                    name="user-circle" 
                    size={32} 
                    color={props.colorUser ? "#22333B" : "#C6AC8F"} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        width:"100%",
        height: 100,
    },
    dispositionHeader: {
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:"90%",
    },
    title: {
        fontSize:32,
        fontWeight: "600",
        color: 'white',
    }
})