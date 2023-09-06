import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const HeaderSecondVariant = ({style,children,onPress}) => {
  return (
    <View style={{...style,gap:16,shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,}} className='flex w-[100%] py-6 px-4 rounded-b-[20px] '>
    <Ionicons onPress={onPress}  name="ios-arrow-back" size={24} color="#353535" />
    {children}
  </View>
  )
}

export default HeaderSecondVariant