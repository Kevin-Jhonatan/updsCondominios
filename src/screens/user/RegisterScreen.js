import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {ActivityIndicator} from 'react-native';
import styles from '../../styles/screens/user/RegisterScreen.component.style';
import theme from '../../styles/theme.style';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, register} = useContext(AuthContext);
  /**
   * Modal Register for Rol
   */
  const [modalVisible, setModalVisible] = useState(false);

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
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <TextInput
            placeholder="Nombre(s)"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <TextInput
            placeholder="Apellido(s)"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          />
          <TextInput
            placeholder="Rol"
            style={styles.input}
            value={userName}
            onChangeText={text => setUserName(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <TextInput
            placeholder="Confirmar contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
          />
          <Button
            title="Crear cuenta"
            onPress={() => {
              register(userName, email, password);
              navigation.navigate('Login');
            }}
            color={theme.SECONDARY_COLOR}
          />
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => {
              register(userName, email, password);
              navigation.navigate('Login');
            }}>
            <Text>I'm a button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
