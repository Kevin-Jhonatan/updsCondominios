import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/commonArea/commonAreaReserveForm.component.styles';

const CommonAreaReserveForm = ({navigation}) => {
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('CommonAreaReserveList')}>
          <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Reservar</Text> */}
        <View>
          <Text>Formulario de reserva!!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommonAreaReserveForm;
