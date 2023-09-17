import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { LabelBlack, LabelGray } from '../../Typography'
import { heartFillRed } from '../../../assets/images'

const LocalRecipeCard = ({style,source,children,authorSource,authorName}) => {
  return (
    <TouchableOpacity style={{gap:8,padding:4,display:"flex",...style}}>
      <ImageBackground style={{height:256,width:172,display:'flex',padding:12,justifyContent:'flex-end'}} borderRadius={8} source={source} resizeMode='cover'>
        <View style={{gap:4}} className='w-[50px] h-6 rounded bg-light-200 flex flex-row items-center justify-center p-1'>
        <Image className='w-5 h-5' source={heartFillRed}/>
        <LabelGray>4.2</LabelGray>
        </View>
      </ImageBackground>
      <LabelBlack style={{fontSize:16}} >{children}</LabelBlack>
      
      <View style={{gap:4}} className='flex flex-row w-[100%] items-center'>
      <Image className='w-6 h-6 rounded-sm' source={authorSource} />
      <LabelGray>{authorName}</LabelGray>

      </View>
    </TouchableOpacity>
  )
}

export default LocalRecipeCard