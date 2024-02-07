import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'#FFF'}} >
      <RootNavigation/>
    </View>
  )
}