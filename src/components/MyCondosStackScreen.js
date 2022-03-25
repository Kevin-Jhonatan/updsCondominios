import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCondosScreen from "../screens/user/MyCondosScreen";

const LoginStack = createNativeStackNavigator();

const  MyCondosStackScreen = () => {
  return (
    <LoginStack.Navigator> 
      <LoginStack.Screen name="Mis Condominios Stack" component={MyCondosScreen} />            
    </LoginStack.Navigator>
  );
}

export default MyCondosStackScreen;
