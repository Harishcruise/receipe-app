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

  const [signUpStatus, setSignUpStatus] = useState({
    name:{
      onfocus:false,
      notValid:false
    },
    email:{
      onfocus:false,
      notValid:false
    },
    phoneNo:{
      onfocus:false,
      notValid:false
    },
    password:{
      onfocus:false,
      notValid:false
    },
    confirmPassword:{
      onfocus:false,
      notValid:false
    },
  })
  return (
    <WrapBackground>
      <HeaderSecondVariant onPress={()=>navigation.goBack()} />
      <View style={{gap:20}} className='flex px-4 py-3 w-[100%]'>
            <View style={{gap:7}} className='flex'>
            <LabelBlack style={{fontSize:24}}>Register your account</LabelBlack>
            <LabelGray>Access best recipes and top chefs cuisines</LabelGray>
            </View>   


            <View style={{gap:6}} className='flex'>
                <TextInputField focusStatus={signUpStatus.name.onfocus} onFocus={()=>setSignUpStatus({...signUpStatus,name:{...signUpStatus.name,onfocus:true}})} onBlur={()=>setSignUpStatus({...signUpStatus,name:{...signUpStatus.name,onfocus:false}})} errorMsg="Enter your Name" errorState={signUpStatus.name.notValid} value={signUpData.name} onChangeText={(text)=>setSignUpData({...signUpData,name:text})} keyboardType={'default'}>Name</TextInputField>
                <TextInputField focusStatus={signUpStatus.email.onfocus} onFocus={()=>setSignUpStatus({...signUpStatus,email:{...signUpStatus.email,onfocus:true}})} onBlur={()=>setSignUpStatus({...signUpStatus,email:{...signUpStatus.email,onfocus:false}})} errorMsg="Enter a valid email address" errorState={signUpStatus.email.notValid} value={signUpData.email} onChangeText={(text)=>setSignUpData({...signUpData,email:text})} keyboardType={'email-address'}>Email Address</TextInputField>
                <PhoneNumberInputField focusStatus={signUpStatus.phoneNo.onfocus} onFocus={()=>setSignUpStatus({...signUpStatus,phoneNo:{...signUpStatus.phoneNo,onfocus:true}})} onBlur={()=>setSignUpStatus({...signUpStatus,phoneNo:{...signUpStatus.phoneNo,onfocus:false}})} errorMsg="Enter a valid phone number" errorState={signUpStatus.phoneNo.notValid} value={signUpData.phoneNo} onChangeFormattedText={(text)=>setSignUpData({...signUpData,phoneNo:text})}>Phone Number</PhoneNumberInputField>
                <PasswordInputField focusStatus={signUpStatus.password.onfocus} onFocus={()=>setSignUpStatus({...signUpStatus,password:{...signUpStatus.password,onfocus:true}})} onBlur={()=>setSignUpStatus({...signUpStatus,password:{...signUpStatus.password,onfocus:false}})} errorMsg="Enter a strong password" errorState={signUpStatus.password.notValid} value={signUpData.password} onChangeText={(text)=>setSignUpData({...signUpData,password:text})}>Password</PasswordInputField>
                <PasswordInputField focusStatus={signUpStatus.confirmPassword.onfocus} onFocus={()=>setSignUpStatus({...signUpStatus,confirmPassword:{...signUpStatus.confirmPassword,onfocus:true}})} onBlur={()=>setSignUpStatus({...signUpStatus,confirmPassword:{...signUpStatus.confirmPassword,onfocus:false}})} errorMsg="Enter the correct password" errorState={signUpStatus.confirmPassword.notValid} value={signUpData.confirmPassword} onChangeText={(text)=>setSignUpData({...signUpData,confirmPassword:text})}>Confirm Password</PasswordInputField>
                
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