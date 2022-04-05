import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import MyCondosStackScreen from './MyCondosStackScreen';
import PerfilStackScreen from './PerfilStackScreen';
import View from 'react-native';
import Profile from '../assets/icons/home/profile';
import Condo from '../assets/icons/home/my_condos';
import Home from '../assets/icons/home/home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeStackScreen} />
      <Tab.Screen name="Mis condominios" component={MyCondosStackScreen} />
      <Tab.Screen name="Perfil" component={PerfilStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
