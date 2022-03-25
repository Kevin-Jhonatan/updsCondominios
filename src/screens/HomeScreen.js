import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  return (
     <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" animating={isLoading}/>
         <Text style={styles.welcome}>Welcome {userInfo.current_user.name}</Text>
         <Button title="Logout" color="red" onPress={logout}/>
     </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8
  }
});

export default HomeScreen;