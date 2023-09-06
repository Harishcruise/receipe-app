import { View, Text } from 'react-native'
import React from 'react'

const LabelGray = ({style,children}) => {
  return (
    <>
      <Text className='text-dark-600 font-bold' style={{fontFamily:"Cabinet-Grotesk-Medium",...style}} >{children}</Text>
    </>
  )
}

export default LabelGray