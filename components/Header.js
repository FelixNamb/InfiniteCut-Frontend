import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header(props) {
  const [token, setToken] = useState(null);
  const [userType, setUserType] = useState(null); 
  useEffect(() => {
    const fetchedToken = 'your-valid-token'; 
    const fetchedUserType = 'UserPro'; 
    
    setToken(fetchedToken);
    setUserType(fetchedUserType);
  }, []);

  const isUserConnected = !!token; 
  const isUserPro = userType === 'UserPro'; 
  const isUser = userType === 'User'; 

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.dispositionHeader}>
        
        <TouchableOpacity
          onPress={() => isUserConnected && isUserPro && props.navigation.navigate("MyAgenda")}
          disabled={!isUserConnected || !isUserPro}
        >
          <FontAwesome6
            name="scissors"
            size={32}
            color={
              isUserConnected && isUserPro
                ? props.colorScissors ? "#22333B" : "#C6AC8F"
                : "#888"
            }
          />
        </TouchableOpacity>

        <Text style={styles.title}>{props.title}</Text>

        <TouchableOpacity
          onPress={() => isUserConnected && isUser && props.navigation.navigate("MesInformations")}
          disabled={!isUserConnected || !isUser}
        >
          <FontAwesome
            name="user-circle"
            size={32}
            color={
              isUserConnected && isUser
                ? props.colorUser ? "#22333B" : "#C6AC8F"
                : "#888" 
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  dispositionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
    fontFamily: "Montserrat_500Medium",
    letterSpacing: 4,
  },
});
