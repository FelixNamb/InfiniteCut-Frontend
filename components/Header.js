import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header () {
    return(
        <View style={styles.header}>
            <TouchableOpacity >
                <FontAwesome6 name="scissors" size={24} color="#C6AC8F" />
            </TouchableOpacity>
            <Text style={styles.title}>INFINITE CUT</Text>
            <TouchableOpacity >
                <FontAwesome name="user-circle" size={24} color="#C6AC8F" />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:"100%",
        height: 200,
    },
    title:{
        fontSize:32,
        fontWeight: "600",
    }
})