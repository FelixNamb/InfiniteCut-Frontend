import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Header from "./Header"

export default function DatePicker() {
    return(
        <View style={styles.container}>
            <Header></Header>
            <Text style={styles.title}>Votre rendez-vous</Text>
            <View>
                <Text style={styles.subtitle}>Choisissez une date</Text>
                {/* <Calendar></Calendar> */}
            </View>
            <View>
                <Text style={styles.subtitle}>Choisissez une demi journée</Text>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text>Matin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Après-midi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Confirmer</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    constainer : {
        flex: 1,
        backgroundColor: '"EAE0D5',
    },
    title: {
        fontSize: 32,
        letterSpacing: 0.3,
        fontFamily: 'Lateef',
    },
    button : {
        backgroundColor: "5E503F",
        width:148.62,
        height: 50,
        color: 'white',
        borderRadius:20,
    }
})