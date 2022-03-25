import React, {useState, useContext} from "react";
import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator } from "react-native";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, register} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" animating={isLoading}/>
            <View style={styles.wrapper}>
                <TextInput  
                    placeholder="Ingresa nombre de usuario"
                    style={styles.input}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
                <TextInput  
                    placeholder="Ingresa Correo"
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput  
                    placeholder="Ingresa contraseña"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button 
                    title="Crear cuenta" 
                    onPress={() => {
                        register(userName, email, password);
                        navigation.navigate('Login')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor:'#bbb',
        borderRadius: 5,
        paddingHorizontal: 14
    },
    link: {
        color: 'blue',
    }
});



export default RegisterScreen;