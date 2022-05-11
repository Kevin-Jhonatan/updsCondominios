import React, {useContext, useState} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  TextInput,
  Modal
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Logout from '../../assets/icons/home/logout';
import Add from '../../assets/icons/register/Icon_plus';

// Styles.
import theme from '../../styles/theme.style';
import styles from '../../styles/screens/user/MycondosScreen.component.style';


// Helper component for a property.
const Item = ({ title }) => (
  <View style={
      { borderWidth: 1, 
        borderRadius: 20, 
        padding: 2, 
        borderColor: theme.SECONDARY_COLOR, 
        marginHorizontal: 2
      }
  }>
    <Text style={{color: theme.SECONDARY_COLOR}}>{title}</Text>
  </View>
);

// Helper component.
const ItemCondominio = ({ title}) => {
  const {openCondo} = useContext(AuthContext);
  // This will be propagated from API.
  const DATA_PROPERTIES = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1A',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2B',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3F',
    },
  ];

  const renderItemProperty = ({ item }) => (
    <Item title={item.title} />
  );
  
  return (
    <TouchableOpacity onPress={() => { openCondo() }}>
      <View style={styles.mainContainerList}>

        <View style={styles.itemCondominioContainer}>
          <View>
            <Text style={styles.itemCondominioTitle}>{title}</Text>
          </View>
          <View style={styles.itemImageContainer}>
            <Image
              style={styles.imageCondo}
              source={{
                uri: 'https://cochasoft.com/sites/default/files/styles/medium/public/2022-02/enterprise-software-development-option3.jpg?itok=o2Ke9kiG',
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ItemTest = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const MycondosScreen = ({navigation}) => {
  const {userInfo, isLoading, logout, openCondo} = useContext(AuthContext);

  console.log("userInfo",userInfo);


  // This will be propagated from API.
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Green Tower',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Condominio Las Lomas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Condominio Eco 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
      title: 'Condominio Las Lomas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d722',
      title: 'Condominio Eco 1',
    }
  ];

  const renderItemCondominio = ({ item }) => (
    <ItemCondominio title={item.title} />
  );

  const assignUserToCondominium = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        { text: "OK", onPress: () => loadCondominiums() }
      ]
    );
  }

  const loadCondominiums = () => {
    
    alert('test');
  }


  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={logout} style={styles.iconLogout}>
            <Logout style={styles.icon} />
            <Text style={styles.titleCard}>Salir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconPlus} onPress={() => setModalVisible(true)}>
            <Add/>
          </TouchableOpacity>
        </View>
        <View style={{width: '80%', marginRight: '10%', marginLeft: '10%'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.contentModal}>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.containerClose} onPress={() => setModalVisible(!modalVisible)}>
                  <Add style={{transform: [{rotate: '45deg'}]}}/>
                </TouchableOpacity>
                
                <View style={styles.modalTitle}>
                  <Text style={styles.title}>Agregar condominios</Text>
                </View> 
                <View>
                  <TextInput
                    placeholder='Agregar código de condominio'
                    placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={[styles.containerBtn]}
                  title="Enviar código"
                  >
                  <Text style={[styles.titleBtn]}>
                    Enviar código
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Mis condominios section */}
          <View>
            <Text style={styles.h2}>
              Mis Condominios
            </Text>
              <FlatList
                style = {styles.contentList}
                data={DATA}
                renderItem={renderItemCondominio}
                keyExtractor={item => item.id}
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MycondosScreen;

