import { View, Text } from 'react-native'
import React from 'react'

const LabelLink = ({style,children}) => {
  return (
    <>
      <Text className='font-bold underline' style={{fontFamily:"Cabinet-Grotesk-Bold",...style}} >{children}</Text>
    </>
  )
}

export default LabelLink