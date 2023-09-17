import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { WrapBackground } from '../../components/Background'
import { HeaderFirstVariant } from '../../components/Header'
import { Switch1 } from '../../components/Switches'
import { LabelBlack, LabelGray } from '../../Typography'

const Notification = ({navigation}) => {
  return (
    <WrapBackground>
        <HeaderFirstVariant onPress={()=>navigation.goBack()}  style={{elevation:5}}>Notifications</HeaderFirstVariant>

        <View style={{gap:12}} className='flex w-[100%] px-6 mt-5'>
        
        <View className='flex w-[100%] flex-row h-16 py-4 px-2 items-center justify-between border-b border-b-light-800'>
        <View style={{gap:8}} className='flex'>   
        <LabelBlack style={{fontSize:16, color:"#060813"}}>Cooking inspiration</LabelBlack>
        <LabelGray style={{fontSize:12, color:"#060813"}}>Never miss out our delicious notifications</LabelGray>
        </View>
        <Switch1/>
        </View>

        <View className='flex w-[100%] flex-row h-16 py-4 px-2 items-center justify-between border-b border-b-light-800'>
        <View style={{gap:8}} className='flex'>   
        <LabelBlack style={{fontSize:16, color:"#060813"}}>Cooking inspiration</LabelBlack>
        <LabelGray style={{fontSize:12, color:"#060813"}}>Never miss out our delicious notifications</LabelGray>
        </View>
        <Switch1/>
        </View>


        </View>
    </WrapBackground>
  )
}

export default Notification