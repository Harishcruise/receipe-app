import React from 'react'
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginWithPhone } from '../pages/Onboarding';
import { Profile } from '../pages/Profile';
import { home,homeFill,explore,exploreFill,heart,heartFill,profile,profileFill } from '../../assets/images'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? homeFill : home;
            }else if (route.name === 'Explore') {
              iconName = focused ? exploreFill : explore;
            }else if (route.name === 'Liked Recipes') {
              iconName = focused ? heartFill : heart;
            }else if (route.name === 'Profile') {
              iconName = focused ? profileFill : profile;
            }
            return Platform.OS === 'ios' ? <Image className="w-6 h-6" source={iconName}/> : <Image className="w-5 h-5" source={iconName}/>
          },
          tabBarStyle: { backgroundColor:"#060813" },
          tabBarLabelStyle:{fontFamily:"Cabinet-Grotesk-Medium"},
          tabBarActiveTintColor: '#F8F8F8',
          tabBarInactiveTintColor: '#5E5E5E'
        })}
    >

    <Tab.Screen name="Home" options={{headerShown: false,}} component={LoginWithPhone} />
    <Tab.Screen name="Explore" options={{headerShown: false}} component={LoginWithPhone} />
    <Tab.Screen name="Liked Recipes" options={{headerShown: false}} component={LoginWithPhone} />
    <Tab.Screen name="Profile" options={{headerShown: false}} component={Profile} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation