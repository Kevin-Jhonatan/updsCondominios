import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from '../screens/user/LoginScreen';
import RegisterScreen from '../screens/user/RegisterScreen';

const LoginStack = createNativeStackNavigator();

const  LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}> 
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Register" component={RegisterScreen}/>              
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen;
