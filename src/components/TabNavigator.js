import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import MyCondosStackScreen from './MyCondosStackScreen';
import PerfilStackScreen from './PerfilStackScreen';
import Profile from '../assets/icons/home/profile';
import Condo from '../assets/icons/home/my_condos';
import Home from '../assets/icons/home/home';
import common from '../styles/common.style';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#5A66DF',
    tabBarStyle: {
      ...common.tabBarStyle,
    },
    tabBarItemStyle: {
      ...common.tabBarIconStyle,
    },
  };

  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="Inicio"
        component={HomeStackScreen}
        activeColor="red"
        options={{
          tabBarIcon: () => <Home />,
          tabBarInactiveTintColor: '#363947',
        }}
      />
      <Tab.Screen
        name="Mi condominio"
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
