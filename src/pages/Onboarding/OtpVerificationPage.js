import { View, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1, CustomButton3} from '../../components/Buttons'
import { PasswordInputField, TextInputField } from '../../components/InputField'
import { WrapBackground } from '../../components/Background'

const OtpVerificationPage = ({navigation,route}) => {
    const{phoneNumber}=route.params;
    const [OtpData, setOtpData] = useState({otp:'',})

    const onChangeOtp=(text)=>{
      setOtpData({  
          otp:text,
      })
    }
  
    return (
      <WrapBackground>
          <HeaderSecondVariant onPress={()=>navigation.goBack()} />
  
          <View style={{gap:36}} className='flex px-4 py-3 w-[100%]'>
              <View style={{gap:7}} className='flex'>
              <LabelBlack style={{fontSize:24}}>Verification Code</LabelBlack>
              <LabelGray>Otp is sent to {phoneNumber}</LabelGray>
              </View>
  
              <View style={{gap:12}} className='flex'>
                  <TextInputField value={OtpData.otp} onChangeText={onChangeOtp} keyboardType={'numeric'}>Phone Number</TextInputField>
                  
              </View>
  
              <View style={{gap:20}} className='flex items-center'>
                  <View style={{gap:8}}  className='flex flex-row justify-between'>
                      <CustomButton1 style={{width:"100%"}} onPress={()=>navigation.navigate('OtpVerificationPage')} >Request OTP</CustomButton1>
                  </View>
  
          
              </View>
          </View>
      </WrapBackground>
    )
}

export default OtpVerificationPage