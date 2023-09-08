import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { LabelGray } from '../../Typography'

const TextInputField = ({children,keyboardType,onChangeText,value}) => {
  return (
    <View style={{gap:8}} className='flex w-[100%]'>
      <LabelGray style={{fontSize:14}}>{children}</LabelGray>
      <TextInput value={value} onChangeText={onChangeText} style={{fontFamily:"Cabinet-Grotesk-Bold"}} keyboardType={keyboardType} selectionColor={'#666666'} className='w-[100%] bg-light-900 h-[54px] rounded-md text-justify text-lg pl-4 pb-[5px]'/>
    </View>
  )
}

export default TextInputField