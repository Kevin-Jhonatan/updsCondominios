import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/notices/logo';
import Hourglass from '../../assets/icons/notices/Hourglass';
import News from '../../assets/icons/notices/News';
import PageStar from '../../assets/icons/notices/page-star';
import styles from '../../styles/screens/notices/NoticesScreen.component.styles';

const DATA = [
  {
    id: 1,
    type:"temporary",
    title: "Mantenimiento del Ascensor, Mantenimiento del Ascensor.",
    date: "25-03-2022",
  },
  {
    id: 2,
    type:"permanent",
    title: "Mantenimiento de camaras de seguridad.",
    date: "30-03-2022",
  },
  {
    id: 3,
    type:"permanent",
    title: "Comunicado 3",
    date: "15-04-2022",
  },
  {
    id: 4,
    type:"temporary",
    title: "Comunicado 4",
    date: "25-03-2022",
  },
  {
    id: 5,
    type:"permanent",
    title: "Comunicado 5",
    date: "30-03-2022",
  },
  {
    id: 6,
    type:"permanent",
    title: "Comunicado 6",
    date: "15-04-2022",
  },
];

const NoticesListItem = ({ item }) => {

  return <TouchableOpacity onPress={ () => null}>
          <View style={styles.card} id={item.id}>
            { item.type === 'temporary' ? <Hourglass /> : item.type === 'permanent' ? <News /> : null }
            <View style={styles.containerText}>
              <Text style={styles.titleDoc} numberOfLines = {3} ellipsizeMode = { 'tail' }>{item.title}</Text>
              <View style={styles.row}>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.column}>
                  <Text style={styles.columnText}>Ver</Text>
                  <PageStar/>
                </View>  
              </View>
            </View>
          </View>
        </TouchableOpacity> 
};

const NoticesScreen = ({navegation}) => {

  return (
    <View style={styles.container}>
      <Back style={styles.back} />
      <Text style={styles.title}>Comunicados</Text>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <SafeAreaView style={{paddingBottom: '5%', marginTop: '5%'}}>
          <FlatList
            style = {styles.contentList}
            data={DATA}
            renderItem={({item}) => 
              <NoticesListItem item={item}></NoticesListItem>
            }
          />
        
      </SafeAreaView>
    </View>
  );
};

export default NoticesScreen;
