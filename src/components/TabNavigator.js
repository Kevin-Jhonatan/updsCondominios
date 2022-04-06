import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import MyCondosStackScreen from './MyCondosStackScreen';
import PerfilStackScreen from './PerfilStackScreen';
import Profile from '../assets/icons/home/profile';
import Condo from '../assets/icons/home/my_condos';
import Home from '../assets/icons/home/home';
import screenOptions from '../styles/common.style';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Inicio"
        component={HomeStackScreen}
        activeColor="red"
        options={{
          tabBarIcon: () => <Home />,
        }}
      />
      <Tab.Screen
        name="Mis condominios"
        component={MyCondosStackScreen}
        options={{
          tabBarIcon: () => <Condo />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStackScreen}
        options={{
          tabBarIcon: () => <Profile />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
