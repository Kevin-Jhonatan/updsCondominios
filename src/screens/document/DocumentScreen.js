import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/document/logo';
import Word from '../../assets/icons/document/word';
import Excel from '../../assets/icons/document/excel';
import Pdf from '../../assets/icons/document/pdf';
import styles from '../../styles/screens/document/DocumentScreen.component.styles';

const DocumentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Back style={styles.back} />
      <Text style={styles.title}>Documentos</Text>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Word />
          <View style={styles.containerText}>
            <Text style={styles.titleDoc}>Horarios de áreas comunes</Text>
            <Text style={styles.date}>25/03/2022</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Pdf />
          <View style={styles.containerText}>
            <Text style={styles.titleDoc}>Horarios de áreas comunes</Text>
            <Text style={styles.date}>25/03/2022</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Excel />
          <View style={styles.containerText}>
            <Text style={styles.titleDoc}>Horarios de áreas comunes</Text>
            <Text style={styles.date}>25/03/2022</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DocumentScreen;
