import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DocumentScreen from '../screens/document/DocumentScreen';
import CommonAreaScreen from '../screens/commonArea/commonAreaScreen';
import CommonAreaReserveScreen from '../screens/commonArea/commonAreaReserveScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name="Document" component={DocumentScreen} />
      <HomeStack.Screen name="CommonArea" component={CommonAreaScreen} />
      <HomeStack.Screen
        name="CommonAreaReserveList"
        component={CommonAreaReserveScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
