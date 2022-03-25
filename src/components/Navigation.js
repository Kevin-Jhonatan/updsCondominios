import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import LoginStackScreen from './LoginStackScreen';
import TabNavigator from './TabNavigator';


const Navigation = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userInfo.access_token ? (
        <TabNavigator/>
      ) : (
        <LoginStackScreen/>
      )}              
    </NavigationContainer>
  );
}

export default Navigation;