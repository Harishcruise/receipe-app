import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1} from '../../components/Buttons'
import { PasswordInputField, TextInputField } from '../../components/InputField'
import { WrapBackground } from '../../components/Background'
import {PhoneNumberInputField} from '../../components/InputField'


const SignUpPage = ({navigation}) => {
  const [signUpData, setSignUpData] = useState({
    name:'',
    email:'',
    phoneNo:'',
    password:'',
    confirmPassword:'',
  })
  return (
    <WrapBackground>
      <HeaderSecondVariant onPress={()=>navigation.goBack()} />
      <View style={{gap:20}} className='flex px-4 py-3 w-[100%]'>
            <View style={{gap:7}} className='flex'>
            <LabelBlack style={{fontSize:24}}>Register your account</LabelBlack>
            <LabelGray>Access best recipes and top chefs cuisines</LabelGray>
            </View>   


            <View style={{gap:12}} className='flex'>
                <TextInputField value={signUpData.name} onChangeText={(text)=>setSignUpData({...signUpData,name:text})} keyboardType={'default'}>Name</TextInputField>
                <TextInputField value={signUpData.email} onChangeText={(text)=>setSignUpData({...signUpData,email:text})} keyboardType={'email-address'}>Email Address</TextInputField>
                <PhoneNumberInputField value={signUpData.phoneNo} onChangeFormattedText={(text)=>setSignUpData({...setSignUpData,phoneNo:text})} onChangeText={(text)=>setSignUpData({...signUpData,phoneNo:text})}>Phone Number</PhoneNumberInputField>
                <PasswordInputField value={signUpData.password} onChangeText={(text)=>setSignUpData({...signUpData,password:text})}>Password</PasswordInputField>
                <PasswordInputField value={signUpData.confirmPassword} onChangeText={(text)=>setSignUpData({...signUpData,confirmPassword:text})}>Confirm Password</PasswordInputField>
                
            </View>

            <View style={{gap:16}} className='flex items-center'>
            <CustomButton1 onPress={()=>console.log(signUpData)} style={{width:"100%"}}>Signup</CustomButton1>

            <View style={{gap:4}} className='flex flex-row'>
                 <LabelGray style={{color:"#353535"}}>Already have an account</LabelGray>

                 <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                 <LabelLink>Login</LabelLink>
                 </TouchableOpacity>
            </View>
            </View>

      </View>
    </WrapBackground>
  )
}

export default SignUpPage