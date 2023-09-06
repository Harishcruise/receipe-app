import { View , Image } from 'react-native'
import {LabelBlack} from '../../Typography'
import React from 'react'
import {welcome3} from '../../../assets/images'


const WelcomeSection3 = () => {
  return (
    <>
    <Image source={welcome3} className='w-[336px] h-[417px]' />
    <View className='px-4'>
    <LabelBlack style={{fontSize:24}}>Contains recipes from  </LabelBlack>
    <LabelBlack style={{fontSize:24}}>different cuisines</LabelBlack>
    </View>
    </>
  )
}

export default WelcomeSection3