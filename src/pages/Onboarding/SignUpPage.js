import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1} from '../../components/Buttons'
import { PasswordInputField, TextInputField } from '../../components/InputField'

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    name:'',
    email:'',
    phoneNo:'',
    password:'',
    confirmPassword:'',
  })
  return (
    <>
      <HeaderSecondVariant/>
      <View style={{gap:20}} className='flex px-4 py-3 w-[100%]'>
            <View style={{gap:7}} className='flex'>
            <LabelBlack style={{fontSize:24}}>Register your account</LabelBlack>
            <LabelGray>Access best recipes and top chefs cuisines</LabelGray>
            </View>   


            <View style={{gap:12}} className='flex'>
                <TextInputField value={signUpData.name} onChangeText={(text)=>setSignUpData({...signUpData,name:text})} keyboardType={'default'}>Name</TextInputField>
                <TextInputField value={signUpData.email} onChangeText={(text)=>setSignUpData({...signUpData,email:text})} keyboardType={'email-address'}>Email Address</TextInputField>
                <TextInputField value={signUpData.phoneNo} onChangeText={(text)=>setSignUpData({...signUpData,phoneNo:text})} keyboardType={'phone-pad'}>Phone Number</TextInputField>
                <PasswordInputField value={signUpData.password} onChangeText={(text)=>setSignUpData({...signUpData,password:text})}>Password</PasswordInputField>
                <PasswordInputField value={signUpData.confirmPassword} onChangeText={(text)=>setSignUpData({...signUpData,confirmPassword:text})}>Confirm Password</PasswordInputField>
                
            </View>

            <View style={{gap:16}} className='flex items-center'>
            <CustomButton1 onPress={()=>console.log(signUpData)} style={{width:"100%"}}>Signup</CustomButton1>

            <View style={{gap:4}} className='flex flex-row'>
                 <LabelGray style={{color:"#353535"}}>Already have an account</LabelGray>

                 <TouchableOpacity>
                 <LabelLink>Login</LabelLink>
                 </TouchableOpacity>
            </View>
            </View>

      </View>
    </>
  )
}

export default SignUpPage