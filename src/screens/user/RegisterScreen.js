import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {ActivityIndicator} from 'react-native';
import styles from '../../styles/screens/user/RegisterScreen.component.style';
import theme from '../../styles/theme.style';
import Back from '../../assets/icons/register/Icon_back';
import Add from '../../assets/icons/register/Icon_add-circle';
import User from '../../assets/icons/home/profile';
import Rol from '../../assets/icons/register/Icon_plus';
import Mail from '../../assets/icons/register/Icon_mail';
import Eye from '../../assets/icons/register/Icon_eye-empty';
import EyeOff from '../../assets/icons/register/Icon_eye-off';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, register} = useContext(AuthContext);
  /**
   * Modal Register for Rol
   */
  const [state, setView] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" animating={isLoading} />
        <View style={styles.wrapper}>
          <View style={styles.profile}>
            <Add style={styles.iconAdd} />
            <Image
              style={styles.image}
              source={{
                uri: 'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
              }}
            />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Nombre de usuario"
              style={styles.input}
              value={userName}
              onChangeText={text => setUserName(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
            <User style={styles.icon} />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Nombre(s)"
              style={styles.input}
              value={userName}
              onChangeText={text => setUserName(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
            <User style={styles.icon} />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Apellido(s)"
              style={styles.input}
              value={userName}
              onChangeText={text => setUserName(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
          </View>
          <Modal
            animationType="slide"
            onDismiss={() => console.log('close')}
            onShow={() => console.log('show')}
            visible={state}
            setView={state}>
            <TouchableOpacity
              onPress={() => {
                setView(false);
              }}>
              <Back />
            </TouchableOpacity>
            <Text>Elegir Rol</Text>
          </Modal>

          <View style={styles.containerInput}>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setView(true)}>
              <Text style={styles.colorTitleRol}>
                Rol
                <Rol style={styles.iconRol} />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerInput}>
            <TextInput
              placeholder="Correo electrónico"
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
            <Mail style={styles.icon} />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
            <Eye style={styles.icon} />
          </View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Confirmar contraseña"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={theme.COLOR_FONT_PLACEHOLDER}
            />
            <EyeOff style={styles.icon} />
          </View>
          <TouchableOpacity
            style={[styles.containerBtn]}
            title="Crear cuenta"
            onPress={() => {
              register(userName, email, password);
              navigation.navigate('Login');
            }}>
            <Text style={[styles.titleBtn]}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
