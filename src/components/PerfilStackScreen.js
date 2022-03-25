import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PerfilScreen from '../screens/user/PerfilScreen';

const PerfilStack = createNativeStackNavigator();

const  PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator> 
      <PerfilStack.Screen name="Perfil Stack" component={PerfilScreen} />            
    </PerfilStack.Navigator>
  );
}

export default PerfilStackScreen;
