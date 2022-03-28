import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyCondosScreen from "../screens/user/MyCondoScreen";
import Properties from '../screens/user/Properties';

const MyCondos = createNativeStackNavigator();

const  MyCondosStackScreen = () => {
  return (
    <MyCondos.Navigator> 
      <MyCondos.Screen name="CondosStackScreen" component={MyCondosScreen} />
      <MyCondos.Screen name="PropertiesStackScreen" component={Properties} />            
    </MyCondos.Navigator>
  );
}

export default MyCondosStackScreen;
