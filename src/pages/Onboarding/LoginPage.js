import { View, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {HeaderSecondVariant} from '../../components/Header'
import { LabelBlack, LabelGray, LabelLink } from '../../Typography'
import {CustomButton1, CustomButton3} from '../../components/Buttons'
import { PasswordInputField, TextInputField } from '../../components/InputField'
import {google,home} from '../../../assets/images'
import { WrapBackground } from '../../components/Background'

const LoginPage = ({navigation}) => {
  const [loginData, setLoginData] = useState({
    email:'',
    password:'',
  })

  const [loginStatus, setLoginStatus] = useState({
    email:{
      onfocus:false,
      notValid:false
    },
    password:{
      onfocus:false,
      notValid:false
    }
  })

  const onChangeEmail=(text)=>{
    setLoginData({
        email:text,
        password:loginData.password,
    })
  }

  const onChangePassword=(text)=>{
    setLoginData({
        email:loginData.email,
        password:text,
    })
  }

  return (
    <WrapBackground>
        <HeaderSecondVariant onPress={()=>navigation.goBack()} />

        <View style={{gap:36}} className='flex px-4 py-3 w-[100%]'>
            <View style={{gap:7}} className='flex'>
            <LabelBlack style={{fontSize:24}}>Login your account</LabelBlack>
            <LabelGray>To access your saved recipes and much more</LabelGray>
            </View>

            <View style={{gap:12}} className='flex'>
                <TextInputField focusStatus={loginStatus.email.onfocus} onFocus={()=>setLoginStatus({...loginStatus,email:{...loginStatus.email,onfocus:true}})} onBlur={()=>setLoginStatus({...loginStatus,email:{...loginStatus.email,onfocus:false}})} value={loginData.email} onChangeText={onChangeEmail} keyboardType={'email-address'} errorMsg="Enter a valid email address" errorState={loginStatus.email.notValid}>Email Address</TextInputField>
                <PasswordInputField focusStatus={loginStatus.password.onfocus} onFocus={()=>setLoginStatus({...loginStatus,password:{...loginStatus.password,onfocus:true}})} onBlur={()=>setLoginStatus({...loginStatus,password:{...loginStatus.password,onfocus:false}})} value={loginData.password} onChangeText={onChangePassword} errorMsg="Enter the correct password" errorState={loginStatus.password.notValid}>Password</PasswordInputField>
            </View>

            <View style={{gap:20}} className='flex items-center'>
                <View style={{gap:8}}  className='flex flex-row justify-between'>
                    <CustomButton1 style={{width:"49%"}} onPress={()=>navigation.navigate('signup')} >Login</CustomButton1>
                    <CustomButton3 style={{width:"49%"}} onPress={()=>navigation.navigate('loginwithphone')}>Use Phone</CustomButton3>
                </View>

                <LabelGray>Other Options</LabelGray>

                <CustomButton1 onPress={()=>navigation.navigate('tab')} logo={<Image className="w-6 h-6" source={google}/>}>Google</CustomButton1>

                <View style={{gap:4}} className='flex flex-row'>
                 <LabelGray style={{color:"#353535"}}>Don’t have an account</LabelGray>

                 <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                 <LabelLink>Signup</LabelLink>
                 </TouchableOpacity>
                </View>
            </View>
        </View>
    </WrapBackground>
  )
}

export default LoginPage