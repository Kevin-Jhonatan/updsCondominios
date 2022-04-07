import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Profile from '../../assets/icons/profile/profile-circled';
import Condo from '../../assets/icons/home/my_condos';
import Logout from '../../assets/icons/home/logout';
import Logo from '../../assets/icons/login/logo';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/user/PerfilScreen.component.style';

const PerfilScreen = () => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Back style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>Condominios</Text>
        <Logo width={'100%'} height={100} />
        <ActivityIndicator size="large" color="#5A66DF" animating={isLoading} />
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <TouchableOpacity>
              <Profile width={65} height={65} />
              <Text style={styles.titleCard}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <TouchableOpacity>
              <Condo width={65} height={65} style={{left: '24%'}} />
              <Text style={styles.titleCard}>Mis condominios</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <TouchableOpacity onPress={logout}>
              <Logout width={55} height={55} />
              <Text style={styles.titleCard}>Salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PerfilScreen;
