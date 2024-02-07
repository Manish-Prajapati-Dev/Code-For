import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AddListScreen from '../screens/AddListScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: '#e056fd', statusBarStyle: 'light' }} initialRouteName='Login' >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen}
                    initialParams={{ body:[]}} />
                <Stack.Screen name="AddNew" component={AddListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;