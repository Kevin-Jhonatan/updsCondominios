import React, { useContext } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DocumentScreen from '../screens/document/DocumentScreen';
import CommonAreaScreen from '../screens/commonArea/commonAreaScreen';
import CommonAreaReserveScreen from '../screens/commonArea/commonAreaReserveScreen';
import NoticesScreen from '../screens/notices/NoticesScreen';
import ViewDetailNotice from '../screens/notices/ViewDetailNotice';
import ExpensesScreen from '../screens/expenses/ExpensesScreen';
import ViewDetailExpenses from '../screens/expenses/ViewDetailExpenses';
import CommonAreaReserveForm from '../screens/commonArea/commonAreaReserveForm';

import Logout from '../assets/icons/home/logout';
import Emoji from '../assets/icons/home/emoji';
import Notification from '../assets/icons/home/notification';
import styles from '../styles/components/HomeStackScreen.component.style';
import theme from '../styles/theme.style';
import {AuthContext} from '../context/AuthContext';

const HomeStack = createNativeStackNavigator();

function HomeHeader() {

  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={logout}  style={styles.iconLogout}>
        <Logout style={styles.icon} />
        <Text style={styles.titleCard}>Salir</Text>
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Condominios</Text>
        <Emoji />
      </View>
      <Notification style={styles.iconNotification} />
    </View>
  );
}

const HomeStackScreen = ({navigation}) => {
  console.log(navigation);
  const {logout} = useContext(AuthContext);

  return (
    <HomeStack.Navigator 
      screenOptions={
        {
          headerShown: true, 
          headerStyle: { 
            backgroundColor: theme.PRIMARY_COLOR,
            borderWidth: 0,
            borderColor: 'transparent',
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '400',
          },
          headerShadowVisible: false,
          headerTintColor: theme.COLOR_FONT_PLACEHOLDER,
          headerBackImageSource: require('../assets/icons/register/back_icon.png'),
        }
        }>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} 
        options={{
          headerLeft: () => (<HomeHeader/>),
        }}
      />
      <HomeStack.Screen name="Document" component={DocumentScreen} 
        options={{
          title: 'Documentos',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="CommonArea" component={CommonAreaScreen} 
        options={{
          title: 'Areas Comunes',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="CommonAreaReserveList"
        component={CommonAreaReserveScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="CommonAreaReserveForm" component={CommonAreaReserveForm}
        options={{
          title: 'Reservar',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="Notices" component={NoticesScreen} 
         options={{
          title: 'Comunicados',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="DetailNotice" component={ViewDetailNotice} 
        options={{
          title: 'Comunicado',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="Expenses" component={ExpensesScreen} 
        options={{
          title: 'Expensas',
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen name="DetailExpenses" component={ViewDetailExpenses} 
        options={{
          title: 'Detalle',
          headerTitleAlign: 'center',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
