import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/document/logo';
import Word from '../../assets/icons/document/word';
import Excel from '../../assets/icons/document/excel';
import Pdf from '../../assets/icons/document/pdf';
import styles from '../../styles/screens/document/DocumentScreen.component.styles';
import * as OpenAnything from 'react-native-openanything';

const DATA = [
  {
    id: 1,
    type:"Word",
    title: "Document 1 Word ECN CULTIVAR EL ROMANCE Y EL AMOR",
    date: "25-03-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/ECN%2520CULTIVAR%2520EL%2520ROMANCE%2520Y%2520EL%2520AMOR.docx"
  },
  {
    id: 3,
    type:"Excel",
    title: "Document 2 PDF Workout Log",
    date: "30-03-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/Workout%20Log.xlsx"
  },
  {
    id: 4,
    type:"Pdf",
    title: "Document 3 PDF EXAMENDEINGRESOFCE1-2022_0_2021-12-30_08-42",
    date: "15-04-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/EXAMENDEINGRESOFCE1-2022_0_2021-12-30_08-42.pdf"
  },
  {
    id: 5,
    type:"Word",
    title: "Document 4 Word ECN CULTIVAR EL ROMANCE Y EL AMOR",
    date: "25-03-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/ECN%2520CULTIVAR%2520EL%2520ROMANCE%2520Y%2520EL%2520AMOR.docx"
  },
  {
    id: 6,
    type:"Excel",
    title: "Document 5 Excel Workout Log",
    date: "30-03-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/Workout%20Log.xlsx"
  },
  {
    id: 7,
    type:"Pdf",
    title: "Document 6 PDF EXAMENDEINGRESOFCE1-2022_0_2021-12-30_08-42",
    date: "15-04-2022",
    source:"https://dev-condominios.cochasoft.com/sites/default/files/2022-04/EXAMENDEINGRESOFCE1-2022_0_2021-12-30_08-42.pdf"
  }
];

const ViewListItem = ({ item }) => {

  return <TouchableOpacity onPress={ () => {OpenAnything.Open(item.source)}}>
          <View style={styles.card} id={item.id}>
            { item.type === 'Word' ? <Word /> : item.type === 'Pdf' ? <Pdf /> : item.type === 'Excel' ? <Excel /> : null }
            <View style={styles.containerText}>
              <Text style={styles.titleDoc} numberOfLines = {3} ellipsizeMode = { 'tail' }>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity> 
};


const DocumentScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Back style={styles.back}/>
      </TouchableOpacity>
      <Text style={styles.title}>Documentos</Text>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <FlatList
        style = {styles.contentList}
        data={DATA}
        renderItem={({item}) => 
          <ViewListItem item={item}></ViewListItem>
        }
      />
    </View>
  );
};

export default DocumentScreen;
