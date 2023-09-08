import { View, Text } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { LabelGray } from '../../Typography'

const PhoneNumberInputField = ({children,onChangeText,value,onChangeCountry,onChangeFormattedText}) => {
  return (
    <View style={{gap:8}} className='flex w-[100%]'>
        <LabelGray style={{fontSize:14}}>{children}</LabelGray>
        <PhoneInput defaultCode="US" placeholder='   ' onChangeCountry={onChangeCountry} onChangeFormattedText={onChangeFormattedText} textInputProps={{maxLength:10,}} value={value} onChangeText={onChangeText}  containerStyle={{borderRadius:6,backgroundColor:"#F3F3F3",width:"100%"}} textInputStyle={{fontFamily:"Cabinet-Grotesk-Bold"}} textContainerStyle={{borderRadius:6,backgroundColor:"#F3F3F3",width:'100%'}} />
    </View>
    
  )
}

export default PhoneNumberInputField