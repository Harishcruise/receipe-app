import { View , Image } from 'react-native'
import {LabelBlack} from '../../Typography'
import React from 'react'
import {welcome2} from '../../../assets/images'

const WelcomeSection2 = () => {
  return (
    <>
    <Image source={welcome2} className='w-[336px] h-[417px]' />
    <View className='px-4'>
    <LabelBlack style={{fontSize:24}}>Unlock recipes from top </LabelBlack>
    <LabelBlack style={{fontSize:24}}>chefs around the world</LabelBlack>
    </View>
    </>
  )
}

export default WelcomeSection2