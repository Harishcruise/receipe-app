import { View, Image, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1, CustomButton3} from '../../components/Buttons'
import { TextInputField, PhoneNumberInputField } from '../../components/InputField'
import {google} from '../../../assets/images'
import { WrapBackground } from '../../components/Background'

const LoginWithPhone = ({navigation}) => {
  const [loginWithPhoneData, setLoginWithPhoneData] = useState({phone:'',})
  const [formatedData,setFormatedData] = useState('')

  const onChangePhone=(text)=>{
    setLoginWithPhoneData({  
        phone:text,
    })
  }

  const onRequestOtp=()=>{
    if(loginWithPhoneData.phone.length===10){
      navigation.navigate('OtpVerificationPage',{
        phoneNumber:formatedData})
    }
  };

  return (
    <WrapBackground>
        <HeaderSecondVariant onPress={()=>navigation.goBack()} />

        <View style={{gap:36}} className='flex px-4 py-3 w-[100%]'>
            <View style={{gap:7}} className='flex'>
            <LabelBlack style={{fontSize:24}}>Login via OTP</LabelBlack>
            <LabelGray>Accesss best recipes and top chefs cuisines</LabelGray>
            </View>

            <View style={{gap:12}} className='flex'>
            <PhoneNumberInputField value={loginWithPhoneData.phone} onChangeFormattedText={(text)=>setFormatedData(text)} onChangeText={onChangePhone}>Phone Number</PhoneNumberInputField>       
            </View>

            <View style={{gap:20}} className='flex items-center'>
                <View style={{gap:8}}  className='flex flex-row justify-between'>
                    <CustomButton1 style={{width:"100%"}} onPress={onRequestOtp} >Request OTP</CustomButton1>
                </View>

        
            </View>
        </View>
    </WrapBackground>
  );
};

export default LoginWithPhone;
