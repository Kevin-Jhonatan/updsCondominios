import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

const  HomeStackScreen = () => {
  return (
    <HomeStack.Navigator> 
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />              
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
