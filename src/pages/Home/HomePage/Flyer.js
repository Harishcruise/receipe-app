import { View, ImageBackground } from 'react-native'
import React from 'react'
import { LabelBlack } from '../../../Typography'
import { SearchBar } from '../../../components/SearchBar'
import { CustomButton1 } from '../../../components/Buttons'
import { homeCover } from '../../../../assets/images'

const Flyer = () => {
  return (
    <View style={{gap:12,shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,elevation:5}} className='flex p-4 justify-between bg-[#FFFFFF] rounded-b-[20px] w-[100%]'>

      <LabelBlack  style={{fontSize:20}}>What's your lunch today?</LabelBlack>

      <SearchBar/>

      <ImageBackground style={{height:142,display:'flex',justifyContent:'flex-end',padding:12,gap:8}} borderRadius={8} resizeMode="cover" source={homeCover} >
      <LabelBlack style={{color:"#FFFFFF",fontSize:16}}>Barbeque recipes</LabelBlack>
      <CustomButton1 style={{width:"30%",height:40}}>Cook now</CustomButton1>
      </ImageBackground>

      </View>
  )
}

export default Flyer