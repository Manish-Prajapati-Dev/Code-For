import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { height, width } from '../constant/Dimension'
import { useNavigation } from '@react-navigation/native'

export default function AddListScreen() {

    const navigation = useNavigation()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [data, setData] = useState([])

    const handleSubmit = () => {
        let valid = true
        if (title == "") {
            alert("Please input title")
            valid = false
        }
        if (description == "") {
            alert("Please input description")
            valid = false
        }
        if (valid) {
            let id = Math.floor(Math.random() * 99 + 10)
            let body = { id: id, title: title, body: description }
            setData(prevState => [...prevState, body])
            showData()
        }
    }

    const showData = () => {
        if (data.length > 0) {
            navigation.navigate('Home', { body: data })
        }
    }

    return (
        <View style={style.container} >
            <Header title="Add your item" />
            <View style={{ paddingTop: '5%' }} >
                <View style={style.loginContainer} >
                    <Text style={style.textStyle} >Enter title</Text>
                    <TextInput
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        placeholder='Title'
                        placeholderTextColor='grey'
                        style={{ backgroundColor: '#FFF', color: '#000', borderRadius: 15, borderColor: '#e7e7e7', borderWidth: 1 }}
                    />
                    <View style={{ marginVertical: 5 }} />
                    <Text style={style.textStyle} >Enter description</Text>
                    <TextInput
                        value={description}
                        placeholder='Description'
                        multiline
                        numberOfLines={5}
                        textAlignVertical='top'
                        placeholderTextColor='grey'
                        onChangeText={(text) => setDescription(text)}
                        style={{ backgroundColor: '#FFF', color: '#000', borderRadius: 15, borderColor: '#e7e7e7', borderWidth: 1, }}
                    />
                    <View style={style.buttonContainer} >
                        <Button btnHeight={height * .04} btnWidth={'50%'} title='Submit' onPress={() => handleSubmit()} />
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
    textStyle: {
        color: '#000',
        fontSize: 14,
        marginVertical: 10
    },
    loginContainer: {
        alignSelf: 'center',
        width: width * .9,
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