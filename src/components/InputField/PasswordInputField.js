import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LabelGray } from '../../Typography'

const PasswordInputField = ({children,onChangeText,value,errorMsg,errorState=false,onBlur,onFocus,focusStatus=false}) => {
  
    const [showPassword,setShowPassword] = useState(true);
   
  return (
    <View style={{gap:8}} className='flex w-[100%] h-[94px]'>
      <LabelGray style={{fontSize:14}}>{children}</LabelGray>
      <View style={errorState? {borderWidth:1,borderColor:"#F83446"}:focusStatus? {borderWidth:1,borderColor:errorState?"#F83446":"#060813",fontFamily:"Cabinet-Grotesk-Bold"}:{fontFamily:"Cabinet-Grotesk-Bold"}} className='flex flex-row justify-between bg-light-900 rounded-md items-center px-4'>
      <TextInput  onBlur={onBlur} onFocus={onFocus} value={value} onChangeText={onChangeText} style={{fontFamily:"Cabinet-Grotesk-Bold"}} secureTextEntry={showPassword} selectionColor={'#666666'} className='w-[85%] bg-light-900 h-[54px] rounded-md text-justify text-lg  pb-[5px]'/>
      <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
        <LabelGray>{showPassword?"Show":"Hide"}</LabelGray>
      </TouchableOpacity>
      </View>

      {errorState ? <View className='flex w-[100%] flex-row justify-end'>
          <LabelGray style={{fontSize:14,color:"#F83446"}}>{errorMsg}</LabelGray>
                    </View>:
                    '' }
    </View>
  )
}

export default PasswordInputField