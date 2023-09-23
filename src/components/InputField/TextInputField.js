import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { LabelGray } from '../../Typography'

const TextInputField = ({children,keyboardType,onChangeText,value,errorMsg,errorState=false,onFocus,onBlur,focusStatus=false}) => {
  return (
    <View style={{gap:8}} className='flex w-[100%] h-[94px]'>
      <LabelGray style={{fontSize:14}}>{children}</LabelGray>
      <TextInput style={errorState? {borderWidth:1,borderColor:"#F83446"} :focusStatus? {borderWidth:1,borderColor:"#060813",fontFamily:"Cabinet-Grotesk-Bold"}:{fontFamily:"Cabinet-Grotesk-Bold"}} onFocus={onFocus} onBlur={onBlur} value={value} onChangeText={onChangeText}  keyboardType={keyboardType} selectionColor={'#666666'} className='w-[100%] bg-light-900 h-[54px] rounded-md text-justify text-lg pl-4 pb-[5px]'/>
      
      {errorState ? <View className='flex w-[100%] flex-row justify-end'>
          <LabelGray style={{fontSize:14,color:"#F83446"}}>{errorMsg}</LabelGray>
                    </View>:
                    '' }
      
    </View>
  )
}

export default TextInputField