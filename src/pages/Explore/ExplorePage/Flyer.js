import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { LabelBlack } from '../../../Typography'
import { SearchBar } from '../../../components/SearchBar'
import { CustomButton1 } from '../../../components/Buttons'
import { homeCover } from '../../../../assets/images'

const Flyer = () => {
  return (
    <View style={{gap:12,shadowColor: '#000',shadowOffset: { height: 2 },shadowOpacity:  0.2,shadowRadius: 3,elevation:5}} className='flex p-4 justify-between bg-[#FFFFFF] rounded-b-[20px] w-[100%]'>

      <LabelBlack  style={{fontSize:20}}>Recipe Vault</LabelBlack>

      <SearchBar/>

      </View>
  )
}

export default Flyer