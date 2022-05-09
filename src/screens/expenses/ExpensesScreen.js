import React from 'react';
import { View, Text, SafeAreaView ,FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/expenses/logo';
import Ellipse from '../../assets/icons/expenses/ellipse';
import Money from '../../assets/icons/expenses/money';
import DollarNegado from '../../assets/icons/expenses/dollar_negado';
import styles from '../../styles/screens/expenses/ExpensesScreen.component.styles';

const DATA = [
  {
    id: 12,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pendiente",
    period: "Mayo",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 11,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pendiente",
    period: "Abril",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  },
  {
    id: 10,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pendiente",
    period: "Marzo",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  },
  {
    id: 9,
    propertyNumber: "1C",
    name: "Shirl Frissell",
      status: "Pendiente",
    period: "Febrero",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  },
  {
    id: 8,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pendiente",
    period: "Enero",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 7,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Noviembreiciembre",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 6,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Octubre",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 5,
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Septiembre",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 4,
    condominium: "",
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Agosto",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 3,
    condominium: "",
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Julio",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 2,
    condominium: "",
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Junio",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }, 
  {
    id: 1,
    condominium: "",
    propertyNumber: "1C",
    name: "Shirl Frissell",
    status: "Pagado",
    period: "Mayo",
    detailExpenses: [
      {
        id: 1,
        description: 'Limpiza (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 2,
        description: 'Ascensor (10)',
        amount: 627,
        amountToPay: 62,
      },
      {
        id: 3,
        description: 'Jardineria (14)',
        amount: 100,
        amountToPay: 7.14,
      },
      {
        id: 4,
        description: 'Gas (14)',
        amount: 700,
        amountToPay: 50,
      },
      {
        id: 5,
        description: 'Administracion (14)',
        amount: 500,
        amountToPay: 35,
      }
    ],
    total: "Bs 204.14"
  }
];

const ExpencesListItem = ({ item, navigation }) => {

  return <TouchableOpacity onPress={ () => navigation.navigate('DetailExpenses', { item: item, navigation: navigation })}>
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

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Expensas</Text>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => 
            <ExpencesListItem item={item} navigation={navigation}></ExpencesListItem>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ExpensesScreen;
