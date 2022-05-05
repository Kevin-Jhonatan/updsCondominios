import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/notices/ViewDetailNotice.component.styles';


const ViewDetailNotice = ({route}) => {
  const { id, title, type, description, date } = route.params.item;
  const navigation = route.params.navigation;

  console.log('title',title);
  console.log('navigation',navigation);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back style={styles.back}/>
      </TouchableOpacity>
      
      <Text style={styles.title}>Comunicado</Text>
      <SafeAreaView style={{paddingBottom: '5%', marginTop: '5%'}}>
        <View style={styles.panel}>
          <Text style={styles.titleDoc}>{title}</Text>
          <Text style={styles.containerText}>
            {description}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ViewDetailNotice;
