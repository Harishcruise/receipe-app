import React from 'react'
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WelcomePage} from '../pages/Welcome'
import { StatusBar } from 'expo-status-bar';
import {LoginPage, SignUpPage, LoginWithPhone,OtpVerificationPage} from '../pages/Onboarding'
import { Setting } from '../pages/Profile';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
  
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name="welcome" options = {{headerShown: false}} component={WelcomePage} />
        <Stack.Screen name="login" options = {{headerShown: false}} component={LoginPage} />
        <Stack.Screen name="signup" options = {{headerShown: false}} component={SignUpPage} />
        <Stack.Screen name="loginwithphone" options = {{headerShown: false}} component={LoginWithPhone} />
        <Stack.Screen name="OtpVerificationPage" options = {{headerShown: false}} component={OtpVerificationPage} />
        <Stack.Screen name="tab" options = {{headerShown: false}} component={BottomTabNavigation} />
        <Stack.Screen name="setting" options = {{headerShown: false}} component={Setting} />
      </Stack.Navigator>

      <StatusBar backgroundColor='' style="auto" />
    </NavigationContainer>
   
  )
}

export default StackNavigation