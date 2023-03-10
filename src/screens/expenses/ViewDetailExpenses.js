import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Money from '../../assets/icons/expenses/money';
import DollarNegado from '../../assets/icons/expenses/dollar_negado';
import QR from '../../assets/icons/expenses/QR-Expensas';
import styles from '../../styles/screens/expenses/ViewDetailExpenses.component.style';

const ViewDetailExpenses = ({route, navigation}) => {
  const {id, propertyNumber, name, status, period, detailExpenses, total} =
    route.params.item;
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
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
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>
                Condominio: <Text style={styles.data}>Green Tower</Text>
              </Text>
              <Text style={styles.label}>
                Co-propietario: <Text style={styles.data}>{name}</Text>
              </Text>
              <Text style={styles.label}>
                Numero de Departamento:{' '}
                <Text style={styles.data}>{propertyNumber}</Text>
              </Text>
              <Text style={styles.label}>
                Periodo: <Text style={styles.data}>{period}</Text>
              </Text>
              <View style={styles.column}>
                <Text style={styles.label}>Estado: </Text>
                <Text style={styles.data}>{status}</Text>
                <View style={styles.icon}>
                  {status == 'Pendiente' ? (
                    <DollarNegado />
                  ) : status == 'Pagado' ? (
                    <Money />
                  ) : null}
                </View>
              </View>
            </View>

            <View style={styles.containerTable}>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.th, styles.th1]}>Descripcion</Text>
                  <Text style={[styles.th, styles.th2]}>Importe</Text>
                  <Text style={[styles.th, styles.th3]}>Importe a Pagar</Text>
                </View>
                <View style={styles.tableBody}>
                  {detailExpenses.map((d, index) => (
                    <View key={d.id} style={styles.tableRow}>
                      <Text style={[styles.td, styles.td1]}>
                        {d.description}
                      </Text>
                      <Text style={[styles.td, styles.td2]}>{d.amount}</Text>
                      <Text style={[styles.td, styles.td3]}>
                        {d.amountToPay}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.tableFooter}>
                  <Text style={[styles.tf, styles.tf1]}>Total a Pagar</Text>
                  <Text style={[styles.tf, styles.tf2]}>{total}</Text>
                </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.containerQr}>
                        <Text style={styles.titleQr}>Pago con QR</Text>
                        <QR style={styles.qr} />
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={[styles.closeModal, styles.openModal]}>
                            Cerrar Modal
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.openModal}>Pagar con QR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ViewDetailExpenses;
