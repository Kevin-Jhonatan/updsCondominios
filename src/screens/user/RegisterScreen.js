import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {ActivityIndicator} from 'react-native';
import styles from '../../styles/screens/user/RegisterScreen.component.style';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, register} = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Nombre de usuario"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Nombre(s)"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Apellido(s)"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Rol"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={'#5A66DF'}
          />
          <Button
            title="Crear cuenta"
            onPress={() => {
              register(userName, email, password);
              navigation.navigate('Login');
            }}
            style={styles.btn}
            color={'#5A66DF'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
