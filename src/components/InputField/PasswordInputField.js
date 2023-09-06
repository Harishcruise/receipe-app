import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LabelGray } from '../../Typography'

const PasswordInputField = ({children,onChangeText,value}) => {
  
    const [showPassword,setShowPassword] = useState(true);
   
  return (
    <View style={{gap:8}} className='flex w-[100%]'>
      <LabelGray style={{fontSize:14}}>{children}</LabelGray>
      <View className='flex flex-row justify-between bg-light-900 rounded-md items-center px-4'>
      <TextInput value={value} onChangeText={onChangeText} style={{fontFamily:"Cabinet-Grotesk-Bold"}} passwordRules secureTextEntry={showPassword} selectionColor={'#666666'} className='w-[85%] bg-light-900 h-[54px] rounded-md text-justify text-lg  pb-[5px]'/>
      <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
        <LabelGray>{showPassword?"Show":"Hide"}</LabelGray>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default PasswordInputField