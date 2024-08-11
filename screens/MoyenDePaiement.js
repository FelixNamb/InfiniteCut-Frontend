import { Text, View, StyleSheet,TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import SubHeaderProfile from "../components/SubHeaderProfile";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MoyenDePaiement({navigation}) {
    return (
        <SafeAreaView style={styles.page}>
            <Header title="INFINITE CUT" colorUser={true} colorScissors={false} navigation={navigation} />
            <SubHeaderProfile firstText="Mes RDV" secondText="Mon compte" styleSecondText="600"/>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <View style={styles.informationPerso}>
                        <Text style={styles.title}>Moyen de paiement</Text>
                        <Text style={styles.subTitle}>Votre carte</Text>
                        <View style={styles.creditCard}>
                            <FontAwesome name="credit-card" size={24} color="black" />
                            <Text style={styles.creditCardNumber}>**** **** **** **67</Text>
                        </View>
                    </View>
                    <Text style={styles.deleteCard}>Supprimer carte</Text>
                    <TouchableOpacity style={styles.buttonAdd} onPress={() => addCreditCard()}>
                        <Text style={styles.textButton}> Ajouter carte</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.deleteAccount} onPress={() => deleteAccount()}>
                    <Text style={styles.textDeleteButton}>Supprimer compte</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:"#EAE0D5",
        flex:1,
        
    }
})