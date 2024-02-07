import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({btnWidth,btnHeight,title,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor:'#FFF',elevation:10,shadowColor:'rgba(0,0,0,0.5)',borderRadius:20,borderWidth:1,borderColor:'#f1f2f6',width:btnWidth,height:btnHeight,justifyContent:'center'}} >
            <View style={{justifyContent:'center',alignItems:'center',}} >
                <Text style={{color:'#000',}} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}