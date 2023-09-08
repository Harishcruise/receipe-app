import { View, Text } from 'react-native'
import React from 'react'

function LabelWhite({style,children}) {
  return (
    <>
      <Text className='text-light-200' style={{fontFamily:"Cabinet-Grotesk",...style}} >{children}</Text>
    </>
  )
}

export default LabelWhite