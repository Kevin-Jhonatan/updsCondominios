import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Check from '../../assets/icons/my-condo/check';
import styles from '../../styles/screens/user//MycondoScreen.component.style';

const MycondoScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerCondo}>
          <Text style={styles.title}>Mi condominio</Text>
          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Text>Green Tower</Text>
              <Check />
            </View>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20}}
              source={{
                uri: 'https://www.greentowers.com/wp-content/uploads/2020/01/green-tower-lpz-slide-1536x560.png',
              }}
            />
          </View>
        </View>
        <ScrollView style={{}}>
          <View style={styles.containerCardDepto}>
            <View style={styles.containerCard}></View>
            <TouchableOpacity>
              <View style={styles.cardDepto}>
                <Text style={styles.numberDepto}>1A</Text>
                <Check />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cardDepto}>
                <Text style={styles.numberDepto}>1B</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MycondoScreen;
