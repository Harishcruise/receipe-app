import { View, Image, TouchableOpacity,Text, Alert} from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1, CustomButton3} from '../../components/Buttons'
import { OtpInputField} from '../../components/InputField'
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
          <View style={{gap:20}} className='flex px-4 py-2 w-[100%]'>
              <View style={{gap:7}} className='flex'>
              <LabelBlack style={{fontSize:24}}>Verification Code</LabelBlack>
              <LabelGray>Otp is sent to  <LabelBlack> {phoneNumber}</LabelBlack></LabelGray>
              </View>
  
              <View style={{gap:5}} className='flex'>
                <OtpInputField></OtpInputField>
              </View>

              <TouchableOpacity className='flex items-end px-1' onPress={()=>{navigation.navigate('OtpVerificationPage',{
        phoneNumber:phoneNumber})}}>
                      <LabelGray>Resend OTP!</LabelGray>
                        
                    
                    </TouchableOpacity>
              <View style={{gap:20}} className='flex items-center'>
                  <View style={{gap:8}}  className='flex flex-row justify-between'>
                      <CustomButton1 style={{width:"100%"}} onPress={()=>{Alert.alert("wait for backend")}} >Request OTP</CustomButton1>

                  </View>
  
          
              </View>
          </View>
      </WrapBackground>
    )
}

export default OtpVerificationPage