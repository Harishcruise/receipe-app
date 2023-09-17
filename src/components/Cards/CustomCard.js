import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LabelGray } from '../../Typography'

const CustomCard = ({width,height,children,borderRadius=4,source,style}) => {
  return (
    <TouchableOpacity style={{gap:8,padding:4,width:width,display:"flex",...style}} className='w-[100%]'>
      <Image width={width} height={height} style={{borderRadius:borderRadius}} source={source}/>
      <LabelGray style={{color:"#060813"}}>{children}</LabelGray>
    </TouchableOpacity>
  )
}

export default CustomCard