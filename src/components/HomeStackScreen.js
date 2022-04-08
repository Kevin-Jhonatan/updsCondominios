import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DocumentScreen from '../screens/document/DocumentScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name="Document" component={DocumentScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
