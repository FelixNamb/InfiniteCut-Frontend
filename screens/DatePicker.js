import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from "react";
// import Header from "./Header"

export default function DatePicker() {
    const [dateTaken, setDateTaken] = useState(null);
    const [selectDatePicker, setSelectDatePicker] = useState(false);
    const [morningButton, setMorningButton] = useState(false);
    const [eveningButton, setEveningButton] = useState(false);

    let styleButton = {
        backgroundColor: "white",
        width:148.62,
        height: 50,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        bordeColor: '#5E503F',
    };
    let styleTextButton = {
        color: '#5E503F'
    }


    const onChangeDate = (value) => {
        setSelectDatePicker(false);
        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
        setDateTaken(new Date(value.nativeEvent.timestamp).toLocaleDateString("fr-FR", options));
    }

    return(
        <View style={styles.container}>
            <View style={styles.upperView}>
                <Text style={styles.title}>Votre rendez-vous</Text>
                <Text style={styles.subtitle}>Choisissez une date</Text>
                <TouchableOpacity style={styles.buttonDate} onPress={() => setSelectDatePicker(true)}>
                    <Text style={styles.textDate}>{dateTaken ? dateTaken: "Sélectionner une date"}</Text>
                </TouchableOpacity>
                {selectDatePicker && 
                <RNDateTimePicker 
                mode="date" 
                display="default" 
                value={new Date()} 
                maximumDate={new Date(2030, 10, 20)} 
                onChange={(value) => onChangeDate(value)}
                />}
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.subtitle}>Choisissez une demi journée</Text>
                <View style={styles.ButtonSection}>
                    <TouchableOpacity 
                    style={morningButton ? styleButton : styles.button} 
                    onPress={() => {setMorningButton(true), setEveningButton(false)}}
                    >
                        <Text style={morningButton ? styleTextButton : styles.textButton}>Matin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={eveningButton ? styleButton : styles.button} 
                    onPress={() => {setEveningButton(true), setMorningButton(false)}}
                    >
                        <Text style={eveningButton ? styleTextButton : styles.textButton}>Après-midi</Text>
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
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    },
    buttonDate: {
        width: '80%',
        height: 75,
        backgroundColor: "#C6AC8F",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
    },
    textDate: {
        color: 'white',
        fontSize: 24,
        fontWeight: "600",
    }
})