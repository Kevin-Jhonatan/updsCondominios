import { builtinModules } from "module";
import React, {useState, useContext} from "react";
import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { ActivityIndicator } from "react-native";

const LoginScreen = ({navigation}) => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" animating={isLoading}/>
            <View style={styles.wrapper}>
                <TextInput  
                    placeholder="Nombre de usuario"
                    style={styles.input}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
                <TextInput  
                    placeholder="Contraseña"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Button 
                    title="Login"
                    onPress={() => {
                        login(userName, password)
                    }} 
                />
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}> 
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
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



export default LoginScreen;