import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
           <LinearGradient
               colors={['#EAE0D5', '#C6AC8F', ]}
        style={styles.button}>
        <Text style={styles.text}>Découvrez notre concept</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#C6AC8F',
  },
});
