import { View, Text, Image } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../components/Background'
import { HeaderFirstVariant } from '../../components/Header'
import { SettingSelection } from '../../components/Selections'
import { profile2, globe, bell, cookie, lock, info } from '../../../assets/images'
import { AntDesign } from '@expo/vector-icons'; 
import { Switch2 } from '../../components/Switches'
import { CustomButton3 } from '../../components/Buttons'

const Setting = ({navigation}) => {
  return (
    <WrapBackground>
        <HeaderFirstVariant onPress={()=>navigation.goBack()}  style={{elevation:5}}>Settings</HeaderFirstVariant>

        <View className='flex w-[100%] px-4 mt-4'>

        <SettingSelection iconLeft={profile2} iconRight={<AntDesign name="right" size={24} color="#060813" />} >Account information</SettingSelection>
        <SettingSelection iconLeft={bell} iconRight={<AntDesign name="right" size={24} color="#060813" />} >Notifications</SettingSelection>
        <SettingSelection iconLeft={cookie} iconRight={<Switch2/>} >Only show vegan recipes</SettingSelection>
        <SettingSelection iconLeft={lock} iconRight={<AntDesign name="right" size={24} color="#060813" />} >Terms and Conditions</SettingSelection>
        <SettingSelection iconLeft={globe} iconRight={<AntDesign name="right" size={24} color="#060813" />} >Language (English)</SettingSelection>
        <SettingSelection iconLeft={info} iconRight={<AntDesign name="right" size={24} color="#060813" />} >About Us</SettingSelection>
        </View>

        <CustomButton3 style={{width:"40%",marginTop:24}}>Delete account</CustomButton3>
    </WrapBackground>
  )
}

export default Setting