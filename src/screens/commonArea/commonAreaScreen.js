import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/commonArea/commonAreaScreen.component.styles';
import Logo from '../../assets/icons/commonArea/logo';
import Barbecue from '../../assets/icons/home/areas-comunes';
import SwimmingPool from '../../assets/icons/commonArea/piscina';
import SalonOfEvent from '../../assets/icons/commonArea/salon_eventos';

const CommonAreaScreen = ({navigation}) => {
  const CommonArea = [
    {
      id: '1',
      title: 'Churrasquera',
      icon: '../../assets/icons/commonArea/logo.svg',
    },
    {
      id: '2',
      title: 'Piscina',
      icon: '../../assets/icons/commonArea/piscina.svg',
    },
  ];
  const OpenCommonArea = ({title, action}) => {
    return (
      <View style={styles.containerCard}>
        <TouchableOpacity onPress={action}>
          <View style={styles.card}>
            <Barbecue />
            <Text style={styles.titleCard}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Back style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Áreas comunes</Text>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <FlatList
        data={CommonArea}
        renderItem={({item, index}) => (
          <OpenCommonArea
            title={item.title}
            action={() => console.log(item.title)}
          />
        )}
      />
    </View>
  );
};

export default CommonAreaScreen;
