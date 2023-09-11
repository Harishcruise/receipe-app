import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { instagram, twitter } from '../../../assets/images'
import { LabelBlack, LabelGray } from '../../Typography'

const FollowChefCard = () => {
  return (
    <TouchableOpacity style={{gap:16,shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,elevation:5}} className='flex w-[100%] h-20 rounded-xl flex-row p-3 bg-[#FFFFFF] items-center'>
         <Image className='w-14 h-14 rounded bg-light-800' />

         <View className='flex w-48'>
            <LabelBlack style={{fontSize:20}}>Franklin Star</LabelBlack>
            <LabelGray style={{fontSize:12}}>Culinary Expert | Star chef</LabelGray>
         </View>

         <View style={{gap:8}} className='flex flex-row'>
            <Image source={instagram} className='w-5 h-5'/>
            <Image source={twitter} className='w-5 h-5'/>
         </View>
    </TouchableOpacity>
  )
}

export default FollowChefCard