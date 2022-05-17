import React, {useContext} from 'react';
import {ScrollView, Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Logout from '../assets/icons/home/logout';
import Notification from '../assets/icons/home/notification';
import Emoji from '../assets/icons/home/emoji';
import Comunicated from '../assets/icons/home/anuncios';
import Expensive from '../assets/icons/home/expensas';
import AreaCommon from '../assets/icons/home/areas-comunes';
import Document from '../assets/icons/home/docs';
import styles from '../styles/screens/HomeScreen.component.style';

const HomeScreen = ({navigation}) => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Condominios {userInfo.current_user.name}</Text> */}
          <View style={styles.containerTitle}>
            <Emoji />
          </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
            <View style={styles.containerCard}>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('Notices')}>
                  <Comunicated />
                  <Text style={styles.titleCard}>Comunicados</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardTwo}>
                <TouchableOpacity onPress={() => navigation.navigate('Expenses')}>
                  <Expensive />
                  <Text style={styles.titleCard}>Expensas</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerCard}>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('CommonArea')}>
                  <AreaCommon />
                  <Text style={styles.titleCard}>Área común</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardTwo}>
                <TouchableOpacity onPress={() => navigation.navigate('Document')}>
                  <Document />
                  <Text style={styles.titleCard}>Documentos</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <ActivityIndicator size="large" color="#5A66DF" animating={isLoading} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
