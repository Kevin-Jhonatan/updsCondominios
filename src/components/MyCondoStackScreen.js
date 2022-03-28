import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCondoScreen from "../screens/user/MyCondoScreen";

const LoginStack = createNativeStackNavigator();

const  MyCondoStackScreen = () => {
  return (
    <LoginStack.Navigator> 
      <LoginStack.Screen name="Mis Condominios Stack" component={MyCondoScreen} />            
    </LoginStack.Navigator>
  );
}

export default MyCondoStackScreen;
