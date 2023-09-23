import { View, Image } from 'react-native'
import React from 'react'
import { LabelBlack } from '../../../Typography'
import { CustomButton4 } from '../../../components/Buttons'

const CookNow = () => {
  return (
    <View style={{gap:8}} className='flex p-3 bg-dark-100 rounded-lg'>
      <Image source={{uri:"https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?cs=srgb&dl=pexels-roman-odintsov-4551832.jpg&fm=jpg"}} className='w-[100%] h-[120px] rounded-md'/>
      <LabelBlack style={{color:"#FFFFFF",fontSize:16}}>Cook with what you have</LabelBlack>
      <CustomButton4 style={{width:"40%",height:40,zIndex:9}}>Cook now</CustomButton4>
      </View>
  )
}

export default CookNow