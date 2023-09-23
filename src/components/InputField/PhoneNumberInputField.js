import { View, Text } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { LabelGray } from '../../Typography'

const PhoneNumberInputField = ({children,onChangeText,value,onChangeCountry,onChangeFormattedText,errorMsg,errorState=false,onBlur,onFocus,focusStatus}) => {
  return (
    <View style={{gap:8}} className='flex w-[100%] h-[94px]'>
        <LabelGray style={{fontSize:14}}>{children}</LabelGray>
        <PhoneInput defaultCode="CA" placeholder='  ' onChangeCountry={onChangeCountry} onChangeFormattedText={onChangeFormattedText} textInputProps={{maxLength:10,onFocus:onFocus,onBlur:onBlur}} value={value} onChangeText={onChangeText}  containerStyle={errorState? {borderWidth:1,borderColor:"#F83446",borderRadius:6,backgroundColor:"#F3F3F3",width:"100%"} :focusStatus? {borderWidth:1,borderColor:"#060813",borderRadius:6,backgroundColor:"#F3F3F3",width:"100%"}:{borderRadius:6,backgroundColor:"#F3F3F3",width:"100%"}} textInputStyle={{fontFamily:"Cabinet-Grotesk-Bold"}} textContainerStyle={{borderRadius:6,backgroundColor:"#F3F3F3",width:'100%'}} />
        {errorState ? <View className='flex w-[100%] flex-row justify-end'>
          <LabelGray style={{fontSize:14,color:"#F83446"}}>{errorMsg}</LabelGray>
                    </View>:
                    '' }
    </View>
    
  )
}

export default PhoneNumberInputField