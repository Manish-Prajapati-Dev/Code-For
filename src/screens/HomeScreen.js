import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { height, width } from '../constant/Dimension'
import Header from '../components/Header'
import { GetData } from '../storage/AsyncStorage'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen({ route }) {

    const { body } = route.params
    console.log("body",body)
    const navigation = useNavigation()

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [name, setName] = React.useState('')

    const userData = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await res.json()
            if (response) {
                setData(response)
                setLoading(false)
            }
            else {
                console.log("Failed")
            }
        }
        catch (e) {
            console.log("Error in api", e)
            if (e === 400) {
                alert("Error 400")
            }
            else if (e === 401) {
                alert("Error 400")
            }
            else {
                alert("Request failed")
            }
            setLoading(false)
        }
    }

    const getUserData = async () => {
        try {
            const res = await GetData('LoginUser')
            if (res) {
                setName(res.email)
            }
        }
        catch (e) {
            console.log("Error in get async data", e)
        }
    }

    React.useEffect(() => {
        userData()
        getUserData()
    }, [])

    return (
        <View style={style.container} >
            <Header title={name} add='add new' onPressAdd={() => navigation.navigate("AddNew")} />
            {loading ?
                <ActivityIndicator size='large' color='#000' style={{ alignSelf: 'center', flex: 1 }} />
                :
                <FlatList
                    data={[...body,...data]}
                    keyExtractor={(i) => i.id}
                    contentContainerStyle={{ alignSelf: 'center', alignItems: 'flex-start' }}
                    renderItem={(item) => {
                        console.log("body",item)
                        return (
                            <View style={style.rendercontainer} >
                                <View style={style.subContainer} >
                                    <Text style={style.textStyle} >
                                        {item.item.title}
                                    </Text>
                                    <Text style={style.textStyle} >
                                        {item.item.body}
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                />
            }
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    textStyle: {
        color: '#000',
        fontSize: 14,
        marginVertical: 10
    },
    rendercontainer: {
        width: width * .9,
        backgroundColor: '#FFF',
        elevation: 12,
        shadowColor: 'rgba(0,0,0,0.5)',
        margin: 15,
        borderRadius: 15,
        padding: 10
    },
    subContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})