import { Text, TouchableOpacity, View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Header from "../components/Header";

export default function ChooseBarberScreen() {
    const [lieu, setLieu] = useState(null);
    const [isLiked, setIsLiked] = useState(false);

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Octicons key={i} name="star-fill" size={18} color="#22333B" />);
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <Header />
            </View> */}
            <View style={styles.upperContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Où souhaitez-vous aller ?" value={lieu} onChangeText={(value) => setLieu(value)} />
                    <Octicons name="search" size={24} color="#5E503F" />
                </View>
                <ScrollView>
                    <View style={styles.card}>
                        <View style={styles.leftCard}>
                            <Image
                                style={styles.img}
                                source={require('../assets/background_home.jpg')} />
                            <View style={styles.nameAndNote}>
                                <Text>Lucie Saint Clair</Text>
                                <View style={styles.star}>
                                    {stars}
                                </View>
                            </View>
                        </View>
                        <Octicons name="heart-fill" size={30} color={isLiked ? "#C6AC8F" : "#22333B"} onPress={() => setIsLiked(!isLiked)} />
                    </View>
                </ScrollView>
                <MaterialCommunityIcons name="chevron-double-down" size={30} color="#C6AC8F" />
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAE0D5",
    },
    upperContainer: {
        marginTop: 50,
        height: '55%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: "80%",
        height: 50,
    },
    input: {
        color: '#5E503F',
        fontSize: 18,
        fontWeight: "200",
        borderBottomWidth: 1,
        borderBottomColor: '#918F8F'
    },
    card: {
        width: 300,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    leftCard: {
        flexDirection: 'row',
        height: 85,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    nameAndNote: {
        flexDirection: 'column',
    },
    star: {
        flexDirection: 'row',
    },
    img: {
        height: 85,
        width: 85,
        borderRadius: 20,
        marginRight: 5,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'blue'
    }
});