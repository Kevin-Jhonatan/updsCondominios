import { builtinModules } from "module";
import React, { useState, useContext } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator } from "react-native";

// SVG.
import LogoLogin from "./../../assets/icons/login/logo.svg";

// Import style for this component.
// Keep 'styles' name because that helps to understand what we are doing.
import theme from '../../styles/theme.style';
import styles from '../../styles/screens/user/LoginScreen.component.style'

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#00ff00" animating={isLoading}/>
          <View style={styles.logoLogin}>
            <Text style={styles.h1}>Condominios</Text>
            <View style={styles.logoContainer}>
              <LogoLogin width={300} height={200} />
            </View>
            <Text style={styles.h4}>La forma más fácil de administrar su condominio</Text>
          </View>
          <View style={styles.wrapper}>
            <TextInput
              autoCapitalize="none"
              placeholder="Usuario"
              style={styles.input}
              value={userName}
              onChangeText={text => setUserName(text)}
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
            <TouchableOpacity
              style={[styles.containerBtn]}
              title="Iniciar sesión"
              onPress={() => {
              login(userName, password)
              }}>
              <Text style={[styles.titleBtn]}>
                Iniciar Sesión
              </Text>
            </TouchableOpacity>
            <View style={styles.containerPassword}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>¿Has olvidado tu contraseña?</Text>
              </TouchableOpacity>
              <View style={styles.containerRegister}>
                <Text style={styles.smallText}>¿No tienes cuenta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.link}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen;