import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LabelBlack } from '../../Typography';

const HeaderFirstVariant = ({children,onPress}) => {
  return (
    <View className='flex flex-row w-[100%] h-[99px] px-4 items-center rounded-b-[20px] bg-[#FFFFFF]'>
      <Ionicons onPress={onPress}  name="ios-arrow-back" size={24} color="#353535" />
      <View className='flex w-[85%] items-center'>
      <LabelBlack style={{fontSize:24}} >{children}</LabelBlack>
      </View>
    </View>
  )
}

export default HeaderFirstVariant