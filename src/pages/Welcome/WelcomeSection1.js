import { View , Image } from 'react-native'
import {LabelBlack} from '../../Typography'
import React from 'react'
import {welcome1} from '../../../assets/images'

const WelcomeSection1 = () => {
  return (
    <>
    <Image source={welcome1} className='w-[336px] h-[417px]' />
    <View className='px-4'>
    <LabelBlack style={{fontSize:24}}>Try different Culinary </LabelBlack>
    <LabelBlack style={{fontSize:24}}>recipes at your finger tips</LabelBlack>
    </View>
    </>
  )
}

export default WelcomeSection1