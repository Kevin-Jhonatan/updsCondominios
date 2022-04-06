import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Profile from '../../assets/icons/profile/profile-circled';
import Condo from '../../assets/icons/home/my_condos';
import Logout from '../../assets/icons/home/logout';
import Logotype from '../../assets/icons/login/logo';
import styles from '../../styles/screens/user/PerfilScreen.component.style';

const PerfilScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Condominios</Text>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <TouchableOpacity>
            <Profile />
            <Text style={styles.titleCard}>Editar perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <TouchableOpacity>
            <Condo />
            <Text style={styles.titleCard}>Mis condominios</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerCard}>
        <View style={styles.card}>
          <TouchableOpacity>
            <Logout />
            <Text style={styles.titleCard}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PerfilScreen;
