import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Hourglass from '../../assets/icons/notices/Hourglass';
import News from '../../assets/icons/notices/News';
import styles from '../../styles/screens/notices/ViewDetailNotice.component.styles';


const ViewDetailNotice = ({route}) => {
  const { id, title, description, date } = route.params.item;
  const navigation = route.params.navigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back style={styles.back}/>
      </TouchableOpacity>
      
      <Text style={styles.title}>Comunicado</Text>
      <View style={styles.containerLogo}>
        <News />
      </View>
      <SafeAreaView style={{paddingBottom: '5%', marginTop: '5%'}}>
        <View style={styles.panel}>
          <Text style={styles.titleDoc}>{title}</Text>
          <Text style={styles.containerText}>
            {description}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewDetailNotice;
