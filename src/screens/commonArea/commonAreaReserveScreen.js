import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/commonArea/commonAreaScreen.component.styles';
import Logo from '../../assets/icons/commonArea/logo';
import Barbecue from '../../assets/icons/home/areas-comunes';
import SwimmingPool from '../../assets/icons/commonArea/piscina';
import SalonOfEvent from '../../assets/icons/commonArea/salon_eventos';

const CommonAreaReserveScreen = ({route, navigation}) => {
  React.useEffect(() => {
    const {title} = route.params;
    Alert.alert('Parametro de navegacion', title);
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CommonArea')}>
          <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>CommonArea</Text>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommonAreaReserveScreen;
