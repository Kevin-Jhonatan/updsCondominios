import React, {useContext} from 'react';
import {Button, View, Text, TextInput} from "react-native";
import { AuthContext } from "../../context/AuthContext";

const MycondosScreen = ({navigation}) => {
  const {userInfo, isLoading, logout, openCondo} = useContext(AuthContext);
  return (
    <View>
      <Button
        title = "Logout"
        color="red"
        onPress={logout} 
      />
      <Text>
        Agregar condominio
      </Text>
      <TextInput
        placeholder='Agregar código de condominio'
      />
      <Text>
        Mis Condominios
      </Text>
      <Button 
        title = "Abrir condominio"
        onPress={() => {
          openCondo()
        }}
      />
    </View>
  );
}

export default MycondosScreen;

