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
  const DATA = [
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
    {
      id: '3',
      title: 'Salon de eventos',
      icon: '../../assets/icons/commonArea/piscina.svg',
    },
    {
      id: '4',
      title: 'Churrasquera',
      icon: '../../assets/icons/commonArea/piscina.svg',
    },
    {
      id: '5',
      title: 'Piscina',
      icon: '../../assets/icons/commonArea/piscina.svg',
    },
  ];
  const OpenCommonArea = ({id, title}) => {
    return (
      <View style={styles.containerCard}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CommonAreaReserveList', {
              id: id,
              title: title,
            })
          }>
          <View style={styles.card}>
            {title === 'Churrasquera' ? (
              <Barbecue />
            ) : title === 'Piscina' ? (
              <SwimmingPool />
            ) : title === 'Salon de eventos' ? (
              <SalonOfEvent />
            ) : null}
            <Text style={styles.titleCard}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
          <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Áreas comunes</Text>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <OpenCommonArea id={item.id} title={item.title} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommonAreaScreen;