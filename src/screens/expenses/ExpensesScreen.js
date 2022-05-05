import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/expenses/logo';
import Ellipse from '../../assets/icons/expenses/ellipse';
import Money from '../../assets/icons/expenses/money';
import DollarNegado from '../../assets/icons/expenses/dollar_negado';
import styles from '../../styles/screens/expenses/ExpensesScreen.component.styles';

const DATA = [{
  id: 1,
  propertyNumber: "1C",
  name: "Shirl Frissell",
  status: "Pagado",
  period: "Agosto",
  total: "Bs 0.48"
}, {
  id: 2,
  propertyNumber: "2C",
  name: "Arie Folland",
  status: "Pagado",
  period: "Septiembre",
  total: "Bs 2.46"
}, {
  id: 3,
  propertyNumber: "3C",
  name: "Tilly Richardin",
  status: "Pagado",
  period: "Octubre",
  total: "Bs 3.16"
}, {
  id: 4,
  propertyNumber: "4C",
  name: "Karrie Casebourne",
  status: "Pagado",
  period: "Noviembreiciembre",
  total: "Bs 1.97"
}, {
  id: 6,
  propertyNumber: "6C",
  name: "Cesar McTear",
  status: "Pendiente",
  period: "Enero",
  total: "Bs 0.08"
}, {
  id: 7,
  propertyNumber: "7C",
  name: "Bonnee Camplen",
  status: "Pendiente",
  period: "Febrero",
  total: "Bs 1.75"
}, {
  id: 8,
  propertyNumber: "8C",
  name: "Sven Bremmer",
  status: "Pendiente",
  period: "Marzo",
  total: "Bs 2.70"
}, {
  id: 9,
  propertyNumber: "9C",
  name: "Cyrillus Dungay",
  status: "Pendiente",
  period: "Abril",
  total: "Bs 8.13"
}, {
  id: 10,
  propertyNumber: "10C",
  name: "Micki Domonkos",
  status: "Pendiente",
  period: "Mayo",
  total: "Bs 9.14"
}];

const ExpencesListItem = ({ item, navigation }) => {

  return <TouchableOpacity>
          <View style={styles.card} id={item.id}>
            <Ellipse />
            <Text style={styles.id}>{item.propertyNumber}</Text>
            <View style={styles.containerText}>
              <Text style={styles.titleCard}>{item.name}</Text>
              <Text style={styles.label}>Periodo: <Text style={styles.data}>{item.period}</Text></Text>
              
              <View style={styles.column}>
                <Text style={styles.label}>Estado: </Text>
                <Text style={styles.data}>{item.status}</Text>
                <View style={styles.icon}>
                  { item.status == 'Pendiente' ? <DollarNegado/> : item.status == "Pagado" ? <Money/> : null}
                </View>
                </View>
              <Text style={styles.label}>Total: <Text style={styles.data}>{item.total}</Text></Text>
            </View>
          </View>
        </TouchableOpacity> 
};

const ExpensesScreen = ({navigation}) => {
  console.log("NoticeScreen", navigation);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Comunicados</Text>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <SafeAreaView style={{paddingBottom: '5%', marginTop: '5%'}}>
          <FlatList
            style = {styles.contentList}
            data={DATA}
            renderItem={({item}) => 
              <ExpencesListItem item={item} navigation={navigation}></ExpencesListItem>
            }
          />
      </SafeAreaView>
    </View>
  );
};

export default ExpensesScreen;
