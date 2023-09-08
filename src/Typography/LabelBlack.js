import { View, Text } from 'react-native'
import React from 'react'

const LabelBlack = ({style,children}) => {
  return (
    <>
      <Text className='text-dark-200' style={{fontFamily:"Cabinet-Grotesk-Bold",...style}} >{children}</Text>
    </>
  )
}

export default LabelBlack