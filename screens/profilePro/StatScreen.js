import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header";

export default function StatScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={styles.header}
        title="INFINITE CUT"
        navigation={navigation}
        colorScissors={false}
        colorUser={true}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Et si on parlait</Text>
        <Text style={styles.subtitle}>chiffres</Text>
        <Text style={styles.dot}>.</Text>
      </View>
      <View style={styles.squareOne}>
        <View style={styles.textOne}>+50 000</View>
      </View>
      <View style={styles.squareTwo}>
        <View style={styles.textOne}>+ 6 milliards</View>
      </View>
      <View style={styles.squareThree}>
        <View style={styles.textOne}>60% d’appel</View>
      </View>
      <View style={styles.squareFour}>
        <View style={styles.textOne}>75</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    color: "#5E503F",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#5E503F",
  },
  dot: {
    fontSize: 36,
    color: "#5E503F",
  },
  squareOne: {
    backgroundColor: "#5E503F",
    height: 100,
    width: 100,
  },
  textOne: {
    color: "#FFFFFF"
  },
  squareTwo: {
    backgroundColor: "#5E503F",
    height: 100,
    width: 100,
  },
  squareThree: {
    backgroundColor: "#5E503F",
    height: 100,
    width: 100,
  },
  squareFour: {
    backgroundColor: "#5E503F",
    height: 100,
    width: 100,
  },
});
