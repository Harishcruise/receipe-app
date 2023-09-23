import { View, Image, TouchableOpacity } from 'react-native'
import { LabelGray } from '../../Typography'
import React from 'react'

const SettingSelection = ({children,onPress,iconLeft,iconRight}) => {
  return (
    <TouchableOpacity onPress={onPress} className='flex w-[100%] flex-row h-16 py-4 px-2 items-center justify-between border-b border-b-light-800'>

    <View style={{gap:8}} className='flex flex-row items-center'>
    <Image className='w-6 h-6' source={iconLeft} />
    <LabelGray style={{fontSize:16, color:"#060813"}}>{children}</LabelGray>
    </View>
    {iconRight}

    </TouchableOpacity>
  )
}

export default SettingSelection