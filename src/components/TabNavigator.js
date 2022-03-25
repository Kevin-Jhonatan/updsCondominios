import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import MyCondosStackScreen from './MyCondosStackScreen';
import PerfilStackScreen from './PerfilStackScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={HomeStackScreen} />
            <Tab.Screen name="Mis condominios" component={MyCondosStackScreen} />
            <Tab.Screen name="Tab Perfil" component={PerfilStackScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigation;