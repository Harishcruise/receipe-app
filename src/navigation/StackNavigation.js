import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WelcomePage} from '../pages/Welcome'
import { StatusBar } from 'expo-status-bar';
import {LoginPage, SignUpPage, LoginWithPhone} from '../pages/Onboarding'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name="welcome" options = {{headerShown: false}} component={WelcomePage} />
        <Stack.Screen name="login" options = {{headerShown: false}} component={LoginPage} />
        <Stack.Screen name="signup" options = {{headerShown: false}} component={SignUpPage} />
        <Stack.Screen name="loginwithphone" options = {{headerShown: false}} component={LoginWithPhone} />
      </Stack.Navigator>

      <StatusBar backgroundColor='' style="auto" />
    </NavigationContainer>
   
  )
}

export default StackNavigation