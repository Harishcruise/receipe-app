import { View, Text } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../components/Background'
import { HeaderFirstVariant } from '../../components/Header'
import EditInputField from '../../components/InputField/EditInputField'
import { CustomButton1 } from '../../components/Buttons'

const AccountInfo = ({navigation}) => {
  return (
    <WrapBackground>
        <HeaderFirstVariant onPress={()=>navigation.goBack()}  style={{elevation:5}}>Account Info</HeaderFirstVariant>

        <View style={{gap:12}} className='flex w-[100%] mt-5'>

        <EditInputField>Name</EditInputField>
        <EditInputField>Email Address</EditInputField>
        <EditInputField>Phone number</EditInputField>
        
        </View>

        <CustomButton1 style={{width:'40%',marginTop:20}}>Save</CustomButton1>
    </WrapBackground>
  )
}

export default AccountInfo