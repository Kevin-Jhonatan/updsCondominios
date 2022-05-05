import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DocumentScreen from '../screens/document/DocumentScreen';
import NoticesScreen from '../screens/notices/NoticesScreen';
import ViewDetailNotice from '../screens/notices/ViewDetailNotice';
import ExpensesScreen from '../screens/expenses/ExpensesScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name="Document" component={DocumentScreen} />
      <HomeStack.Screen name="Notices" component={NoticesScreen} />
      <HomeStack.Screen name="DetailNotice" component={ViewDetailNotice} />
      <HomeStack.Screen name="Expenses" component={ExpensesScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
