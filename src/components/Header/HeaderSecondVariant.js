import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const HeaderSecondVariant = ({style,children,onPress,rightIcon,rightOnPress,backIconColor="#353535"}) => {
  return (
    <View style={{...style,gap:16,shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,}} className='flex w-[100%] py-6 px-4 rounded-b-[20px] '>
    <View className='flex flex-row justify-between'>
    <Ionicons onPress={onPress}  name="ios-arrow-back" size={24} color={backIconColor} />
    <TouchableOpacity onPress={rightOnPress}>
    {rightIcon}
    </TouchableOpacity>
    </View>
    {children}
  </View>
  )
}

export default HeaderSecondVariant