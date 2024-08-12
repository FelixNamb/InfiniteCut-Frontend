import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function SubHeaderProfile(props) {

    const handleNavigationLeft = () => {
        if(props.firstText === "Mes informations"){
            props.navigation.navigate("MesInformationsPro");
        } else {
            props.navigation.navigate("RDVs")
        };
    }

    const handleNavigationRight = () => {
        if(props.secondText === "Mes chiffres"){
            props.navigation.navigate("MesChiffres");
        } else {
            props.navigation.navigate("MesInformations")
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleNavigationLeft()}>
                <Text style={{
        color: '#22333B',
        fontSize: 18,
        fontWeight: props?.styleFirstText,
    }}>{props.firstText}</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => handleNavigationRight()}>
                <Text style={{
        color: '#22333B',
        fontSize: 18,
        fontWeight: props?.styleSecondText,
    }}>{props.secondText}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container :{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderBottomColor: "#22333B",
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    text :{
        color: '#22333B',
        fontSize: 18,
    },
    divider : {
        borderRightWidth: 1,
        borderColor:'#22333B',
        height: 20
    }
})