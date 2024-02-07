import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { height, width } from '../constant/Dimension'
import Button from '../components/Button'
import { FillData } from '../storage/AsyncStorage'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        let valid = true
        if (email == "") {
            alert("Please input email")
            valid=false
        }
        if (password == "") {
            alert("Please input password")
            valid=false
        }
        if (valid) {
            let body = { email: email, password: password }
            FillData('LoginUser', body)
            navigation.navigate('Home')
        }
    }

    return (
        <View style={style.container} >
            <Header title="Login" />
            <View style={{ paddingTop: '40%' }} >
                <View style={style.loginContainer} >
                    <Text style={style.textStyle} >Enter your password</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='Email'
                        placeholderTextColor='grey'
                        style={{ backgroundColor: '#FFF',color:'#000', borderRadius: 15, borderColor: '#e7e7e7', borderWidth: 1 }}
                    />
                    <View style={{ marginVertical: 5 }} />
                    <Text style={style.textStyle} >Enter your password</Text>
                    <TextInput
                        value={password}
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='grey'
                        onChangeText={(text) => setPassword(text)}
                        style={{ backgroundColor: '#FFF',color:'#000', borderRadius: 15, borderColor: '#e7e7e7', borderWidth: 1 }}
                    />
                    <View style={style.buttonContainer} >
                        <Button btnHeight={height * .04} btnWidth={'50%'} title='Login' onPress={() => handleLogin()} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle:{
        color: '#000',
        fontSize: 14,
        marginVertical:10
    },
    loginContainer: {
        alignSelf: 'center',
        width: width * .9,
        height: height * .35,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 15,
        elevation: 15,
        shadowColor: 'rgba(0,0,0,0.5)',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15
    }
})