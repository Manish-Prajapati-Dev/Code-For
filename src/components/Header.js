import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { height, width } from '../constant/Dimension'

export default function Header({title,add,onPressAdd}) {

    return (
        <View style={styles.mainContainer} >
            <View style={styles.subContainer} >
                <Text style={styles.textStyle} >{title}</Text>
                {add && <Text onPress={onPressAdd} style={styles.textStyle} >{add}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#e056fd',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    subContainer:{
        justifyContent:'space-between',
        width:width,
        height:height*.06,
        alignItems:'center',
        flexDirection:'row',
    },
    textStyle:{
        color:'#FFF',
        fontSize:20,
        marginHorizontal:20
    }
})