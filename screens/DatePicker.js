import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
// import Header from "./Header"

export default function DatePicker() {
    return(
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Text style={styles.title}>Votre rendez-vous</Text>
                <Text style={styles.subtitle}>Choisissez une date</Text>
                {/* <Calendar></Calendar> */}
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.subtitle}>Choisissez une demi journée</Text>
                <View style={styles.ButtonSection}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Matin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Après-midi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Confirmer</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#EAE0D5',
        padding: 0,
        margin: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        letterSpacing: 0.3,
        marginBottom: 60,
    },
    upperView:{
        height: '50%',
        width: '90%'
    },
    button : {
        backgroundColor: "#5E503F",
        width:148.62,
        height: 50,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle : {
        fontSize: 20,
        marginBottom: 30
    },
    textButton: {
        color: 'white'
    },
    bottomView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonSection : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    }
})