import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import News from '../../assets/icons/notices/News';
import styles from '../../styles/screens/notices/ViewDetailNotice.component.styles';


const ViewDetailNotice = ({route, navigation}) => {
  const { id, title, description, date } = route.params.item;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back style={styles.back}/>
      </TouchableOpacity>
      
      <Text style={styles.title}>Comunicado</Text>
      <View style={styles.containerLogo}>
        <News />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.panel}>
          <Text style={styles.titleDoc}>{title}</Text>
          <Text style={styles.containerText}>
            {description}
          </Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewDetailNotice;
