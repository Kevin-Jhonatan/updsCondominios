import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import LoginStackScreen from './LoginStackScreen';
import TabNavigator from './TabNavigator';
import MycondosScreen from '../screens/user/MyCondosScreen';


const Navigation = () => {
  const {userInfo,condoInfo} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userInfo.access_token ? (
        <>
          {condoInfo.id ? (<TabNavigator/>):(<MycondosScreen/>)}
        </>
        
      ) : (
        <LoginStackScreen/>
      )}              
    </NavigationContainer>
  );
}

export default Navigation;