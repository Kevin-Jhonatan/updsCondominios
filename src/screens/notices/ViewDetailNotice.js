import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import News from '../../assets/icons/notices/News';
import styles from '../../styles/screens/notices/ViewDetailNotice.component.styles';


const ViewDetailNotice = ({route, navigation}) => {
  const { id, title, description, date } = route.params.item;

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
    </SafeAreaView>
  );
};

export default ViewDetailNotice;
