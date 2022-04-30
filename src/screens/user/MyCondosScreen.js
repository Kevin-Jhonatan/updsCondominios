import React, {useContext, useState} from 'react';
import {
  Button,
  Image,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Check from '../../assets/icons/my-condo/check';
import Logout from '../../assets/icons/home/logout';

// Styles.
import theme from '../../styles/theme.style';
import styles from '../../styles/screens/user/MycondosScreen.component.style';


// Helper component for a property.
const Item = ({ title }) => (
  <View style={{borderWidth: 1, borderRadius: 20, padding: 2, borderColor: theme.SECONDARY_COLOR, marginHorizontal: 2}}>
    <Text style={{color: theme.SECONDARY_COLOR}}>{title}</Text>
  </View>
);

// Helper component.
const ItemCondominio = ({ title }) => {
  
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
    <View style={styles.itemCondominioContainer}>

      {/* Left side */}
      <View style={styles.itemCondominioLeftContainer}>
        <Image
          style={styles.itemCondominioImage}
          source={{
            uri: 'https://cochasoft.com/sites/default/files/styles/medium/public/2022-02/enterprise-software-development-option3.jpg?itok=o2Ke9kiG',
          }}
        />
      </View>

      {/* Right side. */}
      <View style={styles.itemCondominioRightContainer}>
        {/* Condominio title. */}
        <View style={styles.itemCondominioTitleContainer}>
          <Text style={styles.itemCondominioTitle}>{title}</Text>
          <Check />
        </View>
      
        {/* Condominio - Add property. */}
        <View style={styles.itemCondominioAddPropertyContainer}>
          <Text style={styles.itemCondominioTitleAddProperty}>Propiedad</Text>
          <TouchableOpacity>
            <View style={styles.itemCondominioAddPropertyIcon}>
              <Text style={{color: theme.SECONDARY_COLOR}}> + </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Condominio - List of apartments. */}
        <View style={styles.itemCondominioListPropertyContainer}>
            <FlatList
              horizontal={true}
              data={DATA_PROPERTIES}
              renderItem={renderItemProperty}
              keyExtractor={item => item.id}
            />
          </View>
      </View>
    </View>
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
    }/* ,
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Condominio Las Lomas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Condominio Eco 1',
    }, */
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={logout} style={styles.iconLogout}>
            <Logout style={styles.icon} />
            <Text style={styles.titleCard}>Salir</Text>
          </TouchableOpacity>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Agregar condominios</Text>
          </View>
        </View>

        <View style={{width: '80%', marginRight: '10%', marginLeft: '10%'}}>
          <View>
            <View>
              <TextInput
                placeholder='Agregar código de condominio'
                placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
                style={styles.input}
              />
            </View>
            <View>
              <Button
                title = "Enviar código"
                color={theme.COLOR_FONT_PLACEHOLDER}
                onPress={assignUserToCondominium} 
              />
              <TouchableOpacity
                style={[styles.containerBtn]}
                title="Enviar código"
                >
                <Text style={[styles.titleBtn]}>
                  Enviar código
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Mis condominios section */}
          <View>
            <Text style={styles.h2}>
              Mis Condominios
            </Text>

            <View>
              <FlatList
                data={DATA}
                renderItem={renderItemCondominio}
                keyExtractor={item => item.id}
              />
              

            </View>

          </View>
    

          <View>
            <TouchableOpacity
              style={[styles.containerBtn]}
              title="Abrir condominio"
              onPress={() => {
                openCondo()
              }}
              >
              <Text style={[styles.titleBtn]}>
                Abrir condominio
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    
      </View>
    </SafeAreaView>
    
  );
}

export default MycondosScreen;

