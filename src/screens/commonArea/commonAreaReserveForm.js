import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from '../../styles/screens/commonArea/commonAreaReserveForm.component.styles';
import {AuthContext} from '../../context/AuthContext';

const CommonAreaReserveForm = ({navigation}) => {
  const { commonArea } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Formulario de reserva para {commonArea}!!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommonAreaReserveForm;
